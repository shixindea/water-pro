
import { PropType, defineComponent } from 'vue';
import bem from 'easy-bem';
import classnames from '../../../../_util/classNames';
import { BoundingBox, DraggableArea, StencilPreview } from '../service';
import { SimpleHandler } from '../handlers';
import { SimpleLine } from '../lines';

const cn = bem('vue-rectangle-stencil');

export default defineComponent({
  name: 'RectangleStencil',
  components: {
    StencilPreview,
    BoundingBox,
    DraggableArea,
  },
  props: {
    image: {
      type: Object as PropType<any>,
    },
    coordinates: {
      type: Object,
    },
    stencilCoordinates: {
      type: Object,
    },
    handlers: {
      type: Object,
    },
    handlersComponent: {
      type: [Object, String],
      default() {
        return SimpleHandler;
      },
    },
    lines: {
      type: Object,
    },
    linesComponent: {
      type: [Object, String],
      default() {
        return SimpleLine;
      },
    },
    aspectRatio: {
      type: [Number, String],
    },
    minAspectRatio: {
      type: [Number, String],
    },
    maxAspectRatio: {
      type: [Number, String],
    },
    movable: {
      type: Boolean,
      default: true,
    },
    resizable: {
      type: Boolean,
      default: true,
    },
    transitions: {
      type: Object,
    },
    movingClass: {
      type: String,
    },
    resizingClass: {
      type: String,
    },
    previewClass: {
      type: String,
    },
    boundingBoxClass: {
      type: String,
    },
    linesClasses: {
      type: Object,
      default() {
        return {};
      },
    },
    linesWrappersClasses: {
      type: Object,
      default() {
        return {};
      },
    },
    handlersClasses: {
      type: Object,
      default() {
        return {};
      },
    },
    handlersWrappersClasses: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      moving: false,
      resizing: false,
    };
  },
  computed: {
    classes() {
      return {
        stencil: classnames(
          cn({ movable: this.movable, moving: this.moving, resizing: this.resizing }),
          this.moving && this.movingClass,
          this.resizing && this.resizingClass,
        ),
        preview: classnames(cn('preview'), this.previewClass),
        boundingBox: classnames(cn('bounding-box'), this.boundingBoxClass),
      };
    },
    style() {
      const { height, width, left, top } = this.stencilCoordinates;

      const style: any = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${left}px, ${top}px)`,
      };

      if (this.transitions && this.transitions.enabled) {
        style.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
      }
      return style;
    },
  },
  methods: {
    onMove(moveEvent) {
      this.$emit('move', moveEvent);
      this.moving = true;
    },
    onMoveEnd() {
      this.$emit('move-end');
      this.moving = false;
    },
    onResize(resizeEvent) {
      this.$emit('resize', resizeEvent);
      this.resizing = true;
    },
    onResizeEnd() {
      console.log(8888);
      this.$emit('resize-end');
      this.resizing = false;
    },
    // 默认等比缩放
    aspectRatios() {
      return {
        minimum: this.aspectRatio || this.minAspectRatio,
        maximum: this.aspectRatio || this.maxAspectRatio,
      };
    },
  },
  emits: ['resize', 'resize-end', 'move', 'move-end'],
  render() {
    return <div class={this.classes.stencil} style={this.style}>
      <BoundingBox
        width={this.stencilCoordinates.width}
        height={this.stencilCoordinates.height}
        transitions={this.transitions}
        class={this.classes.boundingBox}
        handlers={this.handlers}
        handlers-component={this.handlersComponent}
        handlers-classes={this.handlersClasses}
        handlers-wrappers-classes={this.handlersWrappersClasses}
        lines={this.lines}
        lines-component={this.linesComponent}
        lines-classes={this.linesClasses}
        lines-wrappers-classes={this.linesWrappersClasses}
        resizable={this.resizable}
        onResize={(theEv) => this.onResize(theEv)}
        onResize-end={() => this.onResizeEnd}
      >
        <DraggableArea movable={this.movable} onMove={this.onMove} onMove-end={this.onMoveEnd}>
          <StencilPreview
            image={this.image}
            coordinates={this.coordinates}
            width={this.stencilCoordinates.width}
            height={this.stencilCoordinates.height}
            class={this.classes.preview}
            transitions={this.transitions}
          />
        </DraggableArea>
      </BoundingBox>
    </div>
  },
});
