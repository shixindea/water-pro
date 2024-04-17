
import { defineComponent } from 'vue';
import bem from 'easy-bem';
import classnames from '../../../../_util/classNames';
import { getStyleTransforms } from '../../core/image';
import { rotateSize } from '../../core/service';

const cn = bem('vue-preview-result');

export default defineComponent({
  name: 'PreviewResult',
  props: {
    image: {
      type: Object,
    },
    transitions: {
      type: Object,
    },
    stencilCoordinates: {
      type: Object,
      default() {
        return {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        };
      },
    },
    imageClass: {
      type: String,
    },
  },
  computed: {
    classes() {
      return {
        root: cn(),
        wrapper: cn('wrapper'),
        imageWrapper: cn('image-wrapper'),
        image: classnames(cn('image'), this.imageClass),
      };
    },
    wrapperStyle() {
      const result: any = {
        width: `${this.stencilCoordinates.width}px`,
        height: `${this.stencilCoordinates.height}px`,
        left: `calc(50% - ${this.stencilCoordinates.width / 2}px)`,
        top: `calc(50% - ${this.stencilCoordinates.height / 2}px)`,
      };
      if (this.transitions && this.transitions.enabled) {
        result.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
      }
      return result;
    },
    imageStyle() {
      const imageTransforms = this.image.transforms;

      const virtualSize = rotateSize(
        {
          width: this.image.width,
          height: this.image.height,
        },
        imageTransforms.rotate,
      );

      const result: any = {
        width: `${this.image.width}px`,
        height: `${this.image.height}px`,
        left: '0px',
        top: '0px',
      };

      const compensations: any = {
        rotate: {
          left: ((this.image.width - virtualSize.width) * imageTransforms.scaleX) / 2,
          top: ((this.image.height - virtualSize.height) * imageTransforms.scaleY) / 2,
        },
        scale: {
          left: ((1 - imageTransforms.scaleX) * this.image.width) / 2,
          top: ((1 - imageTransforms.scaleY) * this.image.height) / 2,
        },
      };

      result.transform =
        `translate(
        ${
          -this.stencilCoordinates.left -
          imageTransforms.translateX -
          compensations.rotate.left -
          compensations.scale.left
        }px,${
          -this.stencilCoordinates.top -
          imageTransforms.translateY -
          compensations.rotate.top -
          compensations.scale.top
        }px) ` + getStyleTransforms(imageTransforms);

      if (this.transitions && this.transitions.enabled) {
        result.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
      }
      return result;
    },
  },
  render(){
    return <div class={this.classes.root}>
      <div ref="wrapper" class={this.classes.wrapper} style={this.wrapperStyle}>
        <img ref="image" src={this.image.src} class={this.classes.image} style={this.imageStyle} />
      </div>
    </div>
  }
});
