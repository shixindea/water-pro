
import { PropType, defineComponent } from 'vue';
import bem from 'easy-bem';
import classnames from '../../../../_util/classNames';
import { directionNames } from '../../core/utils';
import { ResizeEvent } from '../../core/events';
import { SimpleHandler } from '../handlers';
import { SimpleLine } from '../lines';

const cn = bem('vue-bounding-box');

const HORIZONTAL_DIRECTIONS = ['east', 'west', null];
const VERTICAL_DIRECTIONS = ['south', 'north', null];

export default defineComponent({
  name: 'BoundingBox',
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    transitions: {
      type: Object,
    },
    handlers: {
      type: Object as PropType<any>,
      default() {
        return {
          eastNorth: true,
          north: true,
          westNorth: true,
          west: true,
          westSouth: true,
          south: true,
          eastSouth: true,
          east: true,
        };
      },
    },
    handlersClasses: {
      type: Object as PropType<any>,
      default() {
        return {};
      },
    },
    handlersWrappersClasses: {
      type: Object as PropType<any>,
      default() {
        return {};
      },
    },
    lines: {
      type: Object as PropType<any>,
      default() {
        return {
          west: true,
          north: true,
          east: true,
          south: true,
        };
      },
    },
    linesClasses: {
      type: Object as PropType<any>,
      default() {
        return {};
      },
    },
    linesWrappersClasses: {
      type: Object as PropType<any>,
      default() {
        return {};
      },
    },
    resizable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const points: any = [];
    HORIZONTAL_DIRECTIONS.forEach((hDirection) => {
      VERTICAL_DIRECTIONS.forEach((vDirection) => {
        if (hDirection !== vDirection) {
          let { name, classname } = directionNames(hDirection, vDirection);
          points.push({
            name,
            classname,
            verticalDirection: vDirection,
            horizontalDirection: hDirection,
          });
        }
      });
    });
    return {
      points,
    };
  },
  computed: {
    style() {
      const result: any = {};
      if (this.width && this.height) {
        result.width = `${this.width}px`;
        result.height = `${this.height}px`;

        if (this.transitions && this.transitions.enabled) {
          result.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
        }
      }
      return result;
    },
    classes() {
      const handlers = this.handlersClasses;
      const handlersWrappers = this.handlersWrappersClasses;
      const lines = this.linesClasses;
      const linesWrappers = this.linesWrappersClasses;

      return {
        root: cn(),
        handlers,
        handlersWrappers,
        lines,
        linesWrappers,
      };
    },
    lineNodes() {
      const lines: any = [];
      this.points.forEach((point: any) => {
        if ((!point.horizontalDirection || !point.verticalDirection) && this.lines[point.name]) {
          lines.push({
            name: point.name,
            class: classnames(
              this.classes.lines.default,
              this.classes.lines[point.name],
              !this.resizable && this.classes.lines.disabled,
            ),
            wrapperClass: classnames(
              this.classes.linesWrappers.default,
              this.classes.linesWrappers[point.name],
              !this.resizable && this.classes.linesWrappers.disabled,
            ),
            hoverClass: this.classes.lines.hover,
            verticalDirection: point.verticalDirection,
            horizontalDirection: point.horizontalDirection,
            disabled: !this.resizable,
          });
        }
      });
      return lines;
    },
    handlerNodes() {
      const handlers: any = [];
      const { width, height } = this;
      this.points.forEach((point: any) => {
        if (this.handlers[point.name]) {
          const result: any = {
            name: point.name,
            class: classnames(this.classes.handlers.default, this.classes.handlers[point.name]),
            wrapperClass: classnames(
              this.classes.handlersWrappers.default,
              this.classes.handlersWrappers[point.name],
            ),
            hoverClass: this.classes.handlers.hover,
            verticalDirection: point.verticalDirection,
            horizontalDirection: point.horizontalDirection,
            disabled: !this.resizable,
          };
          if (width && height) {
            const { horizontalDirection, verticalDirection } = point;
            const left =
              horizontalDirection === 'east' ? width : horizontalDirection === 'west' ? 0 : width / 2;
            const top =
              verticalDirection === 'south' ? height : verticalDirection === 'north' ? 0 : height / 2;
            result.wrapperClass = cn('handler');
            result.wrapperStyle = {
              transform: `translate(${left}px, ${top}px)`,
            };

            if (this.transitions && this.transitions.enabled) {
              result.wrapperStyle.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
            }
          } else {
            result.wrapperClass = cn('handler', { [point.classname]: true });
          }
          handlers.push(result);
        }
      });
      return handlers;
    },
  },
  beforeMount() {
    window.addEventListener('mouseup', this.onMouseUp, { passive: false });
    window.addEventListener('mousemove', this.onMouseMove, { passive: false });
    window.addEventListener('touchmove', this.onTouchMove, { passive: false });
    window.addEventListener('touchend', this.onTouchEnd, { passive: false });
  },
  beforeUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);
  },
  mounted() {
    this.touches = [];
  },
  methods: {
    onEnd() {
      this.$emit('resize-end');
    },
    onHandlerDrag(dragEvent: any, horizontalDirection: any, verticalDirection: any) {
      const { left, top } = dragEvent.shift();

      const directions = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      };

      if (horizontalDirection === 'west') {
        directions.left -= left;
      } else if (horizontalDirection === 'east') {
        directions.right += left;
      }
      if (verticalDirection === 'north') {
        directions.top -= top;
      } else if (verticalDirection === 'south') {
        directions.bottom += top;
      }

      let respectDirection;
      if (!verticalDirection && horizontalDirection) {
        respectDirection = 'width';
      } else if (verticalDirection && !horizontalDirection) {
        respectDirection = 'height';
      }

      if (this.resizable) {
        this.$emit(
          'resize',
          new ResizeEvent(directions, {
            allowedDirections: {
              left: horizontalDirection === 'west' || !horizontalDirection,
              right: horizontalDirection === 'east' || !horizontalDirection,
              bottom: verticalDirection === 'south' || !verticalDirection,
              top: verticalDirection === 'north' || !verticalDirection,
            },
            preserveAspectRatio: dragEvent.nativeEvent && dragEvent.nativeEvent.shiftKey,
            respectDirection,
          } as any),
        );
      }
    },
  },
  emits: ['resize', 'resize-end'],
  render() {
    const theLineNodes = this.lineNodes.map((line: any) => {
      return <SimpleLine
        key={line.name}
        defaultClass={line.class}
        hoverClass={line.hoverClass}
        wrapperClass={line.wrapperClass}
        position={line.name}
        disabled={line.disabled}
        onDrag={(theEv) => this.onHandlerDrag(theEv, line.horizontalDirection, line.verticalDirection)}
        onDrag-end={() => this.onEnd}
      />
    });
    

    const theHandlerNodes = this.handlerNodes.map((handler: any) => {
      return <div
        key={handler.name}
        style={handler.wrapperStyle}
        class={handler.wrapperClass}
      >
        <SimpleHandler
          defaultClass={handler.class}
          hoverClass={handler.hoverClass}
          wrapperClass={handler.wrapperClass}
          horizontalPosition={handler.horizontalDirection}
          verticalPosition={handler.verticalDirection}
          disabled={handler.disabled}
          onDrag={(theEv) => this.onHandlerDrag(theEv, handler.horizontalDirection, handler.verticalDirection)}
          onDrag-end={() => this.onEnd}
        />
      </div>
    });
    
    return <div
      ref="box"
      class={this.classes.root}
      style={this.style}
    >
      {this.$slots?.default?.()}
      <div>
        {theLineNodes}
      </div>
      {theHandlerNodes}
    </div>
  }
});
