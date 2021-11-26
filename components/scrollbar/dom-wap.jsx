import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import ResizeObserver from 'resize-observer-polyfill';
import { getSlot, findDOMNode } from '../_util/props-util';

const DOMWrap = defineComponent({
  name: 'DOMWrap',
  emits: ['update-dom'],
  setup(_, { emit }) {
    return {
      theUpdate() {
        emit('update-dom');
      },
    };
  },
  data() {
    this.resizeObserver = null;
    this.mutationObserver = null;

    return {
      lastVisibleIndex: undefined,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.theUpdate();
      const menuUl = findDOMNode(this);
      if (!menuUl) {
        return;
      }
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(this.theUpdate);
      });

      [].slice
        .call(menuUl.children)
        .concat(menuUl)
        .forEach((el) => {
          this.resizeObserver.observe(el);
        });

      if (typeof MutationObserver !== 'undefined') {
        this.mutationObserver = new MutationObserver(() => {
          this.resizeObserver.disconnect();
          [].slice
            .call(menuUl.children)
            .concat(menuUl)
            .forEach((el) => {
              this.resizeObserver.observe(el);
            });
          this.theUpdate();
        });
        this.mutationObserver.observe(menuUl, {
          attributes: false,
          childList: true,
          subTree: false,
        });
      }
    });
  },

  beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  },
  render() {
    return <div>{getSlot(this)}</div>;
  },
});

DOMWrap.props = {
  onUpdateDom: PropTypes.func.def(() => {}),
};

export default DOMWrap;
