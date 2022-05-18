import type { ExtractPropTypes, PropType } from 'vue';
import PropTypes from '../_util/vue-types';

export type SwipeDirection = 'left' | 'down' | 'right' | 'up' | string;

export type LazyLoadTypes = 'ondemand' | 'progressive';

export type CarouselEffect = 'scrollx' | 'fade';
export type DotPosition = 'top' | 'bottom' | 'left' | 'right';

export interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
  autoplay: (palyType?: 'update' | 'leave' | 'blur') => void;
  innerSlider: any;
}

// Carousel
export const carouselProps = {
  effect: String as PropType<CarouselEffect>,
  dots: { type: Boolean, default: true },
  vertical: { type: Boolean, default: undefined },
  autoplay: { type: Boolean, default: undefined },
  easing: String,
  beforeChange: Function as PropType<(currentSlide: number, nextSlide: number) => void>,
  afterChange: Function as PropType<(currentSlide: number) => void>,
  // style: PropTypes.React.CSSProperties,
  prefixCls: String,
  accessibility: { type: Boolean, default: undefined },
  nextArrow: PropTypes.any,
  prevArrow: PropTypes.any,
  pauseOnHover: { type: Boolean, default: undefined },
  // className: String,
  adaptiveHeight: { type: Boolean, default: undefined },
  arrows: { type: Boolean, default: false },
  autoplaySpeed: Number,
  centerMode: { type: Boolean, default: undefined },
  centerPadding: String,
  cssEase: String,
  dotsClass: String,
  draggable: { type: Boolean, default: false },
  fade: { type: Boolean, default: undefined },
  focusOnSelect: { type: Boolean, default: undefined },
  infinite: { type: Boolean, default: undefined },
  initialSlide: Number,
  lazyLoad: String as PropType<LazyLoadTypes>,
  rtl: { type: Boolean, default: undefined },
  slide: String,
  slidesToShow: Number,
  slidesToScroll: Number,
  speed: Number,
  swipe: { type: Boolean, default: undefined },
  swipeToSlide: { type: Boolean, default: undefined },
  swipeEvent: Function as PropType<(swipeDirection: SwipeDirection) => void>,
  touchMove: { type: Boolean, default: undefined },
  touchThreshold: Number,
  variableWidth: { type: Boolean, default: undefined },
  useCSS: { type: Boolean, default: undefined },
  slickGoTo: Number,
  responsive: Array,
  dotPosition: { type: String as PropType<DotPosition>, default: undefined },
  verticalSwiping: { type: Boolean, default: false },
  imgList: Array,
  preivewPageable: { type: Boolean, default: false },
  preivewable: { type: Boolean, default: true },
};
export type CarouselProps = Partial<ExtractPropTypes<typeof carouselProps>>;
