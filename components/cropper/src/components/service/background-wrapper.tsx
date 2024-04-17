import { defineComponent } from 'vue';
import TransformableImage from './transformable-image';

export default defineComponent({
  components: {
    TransformableImage,
  },
  props: {
    touchMove: {
      type: Boolean,
      required: true,
    },
    mouseMove: {
      type: Boolean,
      required: true,
    },
    touchResize: {
      type: Boolean,
      required: true,
    },
    wheelResize: {
      type: [Boolean, Object],
      required: true,
    },
  },
  emits: ['resize', 'move'],
  render() {
    return <TransformableImage
      touchMove={this.touchMove}
      touchResize={this.touchResize}
      mouseMove={this.mouseMove}
      wheelResize={this.wheelResize}
      onMove={this.$emit('move', this.$event)}
      onResize={this.$emit('resize', this.$event)}
      v-slots={{
        default: this.$slots?.default()
      }}
    />
  }
});
