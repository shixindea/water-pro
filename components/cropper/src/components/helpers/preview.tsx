
import { defineComponent } from 'vue';
import bem from 'easy-bem';
import classnames from '../../../../_util/classNames';
import { getStyleTransforms } from '../../core/image';
import { rotateSize } from '../../core/service';
const cn = bem('vue-preview');
export default defineComponent({
  props: {
    coordinates: {
      type: Object,
    },
    transitions: {
      type: Object,
    },
    image: {
      type: Object,
      default() {
        return {};
      },
    },
    imageClass: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    fill: {
      type: Boolean,
    },
  },
  data() {
    return {
      calculatedImageSize: {
        width: 0,
        height: 0,
      },
      calculatedSize: {
        width: 0,
        height: 0,
      },
    };
  },
  computed: {
    classes() {
      return {
        root: cn({ fill: this.fill }),
        wrapper: cn('wrapper'),
        imageWrapper: cn('image-wrapper'),
        image: classnames(cn('image'), this.imageClass),
      };
    },
    style() {
      if (!this.fill) {
        const result: any = {};
        if (this.width) {
          result.width = `${this.size.width}px`;
        }
        if (this.height) {
          result.height = `${this.size.height}px`;
        }
        if (this.transitions && this.transitions.enabled) {
          result.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
        }
        return result;
      } else {
        return {};
      }
    },
    wrapperStyle() {
      const result: any = {
        width: `${this.size.width}px`,
        height: `${this.size.height}px`,
        left: `calc(50% - ${this.size.width / 2}px)`,
        top: `calc(50% - ${this.size.height / 2}px)`,
      };
      if (this.transitions && this.transitions.enabled) {
        result.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
      }
      return result;
    },
    imageStyle() {
      if (this.coordinates && this.image) {
        const coefficient = this.coordinates.width / this.size.width;
        const transforms = {
          rotate: 0,
          flip: {
            horizontal: false,
            vertical: false,
          },
          ...this.image.transforms,
          scaleX: 1 / coefficient,
          scaleY: 1 / coefficient,
        };
        const width = this.imageSize.width;
        const height = this.imageSize.height;
        const virtualSize = rotateSize(
          {
            width,
            height,
          },
          transforms.rotate,
        );
        const result: any = {
          width: `${width}px`,
          height: `${height}px`,
          left: '0px',
          top: '0px',
        };
        const compensations: any = {
          rotate: {
            left: ((width - virtualSize.width) * transforms.scaleX) / 2,
            top: ((height - virtualSize.height) * transforms.scaleY) / 2,
          },
          scale: {
            left: ((1 - transforms.scaleX) * width) / 2,
            top: ((1 - transforms.scaleY) * height) / 2,
          },
        };
        result.transform =
          `translate(
        ${-this.coordinates.left / coefficient - compensations.rotate.left - compensations.scale.left}px,${
            -this.coordinates.top / coefficient - compensations.rotate.top - compensations.scale.top
          }px) ` + getStyleTransforms(transforms);
        if (this.transitions && this.transitions.enabled) {
          result.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
        }
        return result;
      } else {
        return {};
      }
    },
    size() {
      return {
        width: this.width || this.calculatedSize.width,
        height: this.height || this.calculatedSize.height,
      };
    },
    imageSize() {
      return {
        width: this.image.width || this.calculatedImageSize.width,
        height: this.image.height || this.calculatedImageSize.height,
      };
    },
  },
  watch: {
    image(value) {
      if (value.width || value.height) {
        this.onChangeImage();
      }
    },
  },
  mounted() {
    this.onChangeImage();
    this.$refs.image.addEventListener('load', () => {
      this.refreshImage();
    });
    window.addEventListener('resize', this.refresh);
    window.addEventListener('orientationchange', this.refresh);
  },
  unmounted() {
    window.removeEventListener('resize', this.refresh);
    window.removeEventListener('orientationchange', this.refresh);
  },
  methods: {
    refreshImage() {
      const image = this.$refs.image;
      this.calculatedImageSize.height = image.naturalHeight;
      this.calculatedImageSize.width = image.naturalWidth;
    },
    refresh() {
      const root = this.$refs.root;
      if (!this.width) {
        this.calculatedSize.width = root.clientWidth;
      }
      if (!this.height) {
        this.calculatedSize.height = root.clientHeight;
      }
    },
    onChangeImage() {
      const image = this.$refs.image;
      if (image && image.complete) {
        this.refreshImage();
      }
      this.refresh();
    },
  },
  render() {
    return <div ref="root" class={this.classes.root} style={this.style}>
      <div ref="wrapper" class={this.classes.wrapper} style={this.wrapperStyle}>
        <img
          v-show={this.image && this.image.src}
          ref="image"
          src={this.image && this.image.src}
          class={this.classes.image}
          style={this.imageStyle}
        />
      </div>
    </div>
  }
});
