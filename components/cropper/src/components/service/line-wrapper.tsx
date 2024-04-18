import { defineComponent } from 'vue';
import bem from 'easy-bem';
import DraggableElement from './draggable-element';

const cn = bem('vue-line-wrapper');

export default defineComponent({
  name: 'LineWrapper',
  components: {
    DraggableElement,
  },
  props: {
    position: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classname() {
      return cn({ [this.position]: true, disabled: this.disabled });
    },
  },
  emits: ['leave', 'enter', 'drag', 'drag-end'],
  render() {
    return  <DraggableElement
      class={this.classname}
      onDrag={(theEv) => this.$emit('drag', theEv)}
      onDrag-end={() => this.$emit('drag-end')}
      onLeave={() => this.$emit('leave')}
      onEnter={() => this.$emit('enter')}
      v-slots={this.$slots}
    />
  }
});
