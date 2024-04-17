
import { defineComponent } from 'vue';
import bem from 'easy-bem';
import { directionNames } from '../../core/utils';
import DraggableElement from './draggable-element';

const cn = bem('vue-handler-wrapper');

export default defineComponent({
  name: 'HandlerWrapper',
  components: {
    DraggableElement,
  },
  props: {
    horizontalPosition: {
      type: String,
    },
    verticalPosition: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let rootClass;
      if (this.horizontalPosition || this.verticalPosition) {
        const position = directionNames(this.horizontalPosition, this.verticalPosition);
        rootClass = cn({ [position.classname]: true, disabled: this.disabled });
      } else {
        rootClass = cn({ disabled: this.disabled });
      }
      return {
        root: rootClass,
        draggable: cn('draggable'),
      };
    },
  },
  emits: ['leave', 'enter', 'drag', 'drag-end'],
  render() {
    return <div class={this.classes.root}>
      <DraggableElement
        class={this.classes.draggable}
        onDrag={(theEv) => this.$emit('drag', theEv)}
        onDrag-end={() => this.$emit('drag-end')}
        onLeave={() => this.$emit('leave')}
        onEnter={() => this.$emit('enter')}
        v-slots={{
          default: this.$slots?.default?.()
        }}
      />
    </div>
  },
});
