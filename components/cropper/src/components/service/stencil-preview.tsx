
import { PropType, defineComponent } from 'vue';
import { Preview } from '../../components/helpers';

export default defineComponent({
  components: {
    Preview,
  },
  props: {
    coordinates: {
      type: Object as PropType<any> ,
    },
    transitions: {
      type: Object as PropType<any> ,
    },
    image: {
      type: Object as PropType<any> ,
      default() {
        return {} as any;
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
  },
  render() {
    const thePreviewProps: any = {
      image: this.image,
      coordinates: this.coordinates,
      width: this.width,
      height: this.height,
      transitions: this.transitions,
      fill: true,
    }
    return <Preview {...thePreviewProps} {...this.$attrs} />
  },
});
