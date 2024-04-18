
import { defineComponent } from 'vue';
import bem from 'easy-bem';
import classnames from '../../../../_util/classNames';
import { HandlerWrapper } from '../service';

const block = bem('vue-simple-handler');
const wrapper = bem('vue-simple-handler-wrapper');

export default defineComponent({
  name: 'SimpleHandler',
  components: {
    HandlerWrapper,
  },
  props: {
    defaultClass: {
      type: String,
    },
    hoverClass: {
      type: String,
    },
    wrapperClass: {
      type: String,
    },
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
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    classes() {
      const options = {
        [this.horizontalPosition]: Boolean(this.horizontalPosition),
        [this.verticalPosition]: Boolean(this.verticalPosition),
        [`${this.horizontalPosition}-${this.verticalPosition}`]: Boolean(
          this.verticalPosition && this.horizontalPosition,
        ),
        hover: this.hover,
      };
      return {
        default: classnames(block(options), this.defaultClass, this.hover && this.hoverClass),
        wrapper: classnames(wrapper(options), this.wrapperClass),
      };
    },
  },
  methods: {
    onDrag(dragEvent) {
      this.$emit('drag', dragEvent);
    },
    onEnter() {
      this.hover = true;
    },
    onLeave() {
      this.hover = false;
    },
    onDragEnd() {
      this.$emit('drag-end');
    },
  },
  emits: ['drag', 'drag-end'],
  render() {
    return <HandlerWrapper
      class={this.classes.wrapper}
      verticalPosition={this.verticalPosition}
      horizontalPosition={this.horizontalPosition}
      disabled={this.disabled}
      onDrag={this.onDrag}
      onDrag-end={this.onDragEnd}
      onEnter={this.onEnter}
      onLeave={this.onLeave}
    >
      <div class={this.classes.default} />
    </HandlerWrapper>
  }
});
