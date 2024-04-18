
import { defineComponent } from 'vue';
import bem from 'easy-bem';
import classnames from '../../../../_util/classNames';
import { LineWrapper } from '../service';

const block = bem('vue-simple-line');
const wrapper = bem('vue-simple-line-wrapper');

export default defineComponent({
  name: 'SimpleLine',
  components: {
    LineWrapper,
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
    position: {
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
      return {
        root: classnames(block({ [this.position]: true }), this.defaultClass, this.hover && this.hoverClass),
        wrapper: classnames(wrapper({ [this.position]: true }), this.wrapperClass),
      };
    },
  },
  methods: {
    onDrag(dragEvent: any) {
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
    return <LineWrapper
      class={this.classes.wrapper}
      position={this.position}
      disabled={this.disabled}
      onDrag={() => this.onDrag}
      onDrag-end={() => this.onDragEnd}
      onEnter={() => this.onEnter}
      onLeave={() => this.onLeave}
    >
      <div class={this.classes.root} />
    </LineWrapper>
  }
});

