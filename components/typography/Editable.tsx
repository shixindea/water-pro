import type { ExtractPropTypes, PropType } from 'vue';
import { defineComponent, ref, reactive, watch, onMounted, computed } from 'vue';
import IconBytedCornerDownLeft from '@fe6/icon-vue/lib/icons/byted-corner-down-left';
import KeyCode from '../_util/KeyCode';
import TextArea from '../input/TextArea';
import type { Direction } from '../config-provider';
import type { ChangeEventHandler } from '../_util/EventInterface';
import type { AutoSizeType } from '../input/inputProps';

const editableProps = () => ({
  prefixCls: String,
  value: String,
  maxlength: Number,
  autoSize: { type: [Boolean, Object] as PropType<boolean | AutoSizeType> },
  onSave: Function as PropType<(val: string) => void>,
  onCancel: Function as PropType<() => void>,
  onEnd: Function as PropType<() => void>,
  onChange: Function as PropType<(val: string) => void>,
  originContent: String,
  direction: String as PropType<Direction>,
});
export type EditableProps = Partial<ExtractPropTypes<ReturnType<typeof editableProps>>>;
const Editable = defineComponent({
  name: 'Editable',
  props: editableProps(),
  // emits: ['save', 'cancel', 'end', 'change'],
  setup(props, { emit, slots }) {
    const state = reactive({
      current: props.value || '',
      lastKeyCode: undefined,
      inComposition: false,
      cancelFlag: false,
    });
    watch(
      () => props.value,
      (current) => {
        state.current = current;
      },
    );

    const textArea = ref();

    onMounted(() => {
      if (textArea.value) {
        const resizableTextArea = textArea.value?.resizableTextArea;
        const innerTextArea = resizableTextArea?.textArea;
        innerTextArea.focus();
        const { length } = innerTextArea.value;
        innerTextArea.setSelectionRange(length, length);
      }
    });

    function saveTextAreaRef(node: any) {
      textArea.value = node;
    }

    function onChange({ target: { value } }) {
      state.current = value.replace(/[\r\n]/g, '');
      emit('change', state.current);
    }

    function onCompositionStart() {
      state.inComposition = true;
    }

    function onCompositionEnd() {
      state.inComposition = false;
    }

    function onKeyDown(e: KeyboardEvent) {
      const { keyCode } = e;
      if (keyCode === KeyCode.ENTER) {
        e.preventDefault();
      }
      // We don't record keyCode when IME is using
      if (state.inComposition) return;

      state.lastKeyCode = keyCode;
    }

    function onKeyUp(e: KeyboardEvent) {
      const { keyCode, ctrlKey, altKey, metaKey, shiftKey } = e;

      // Check if it's a real key
      if (
        state.lastKeyCode === keyCode &&
        !state.inComposition &&
        !ctrlKey &&
        !altKey &&
        !metaKey &&
        !shiftKey
      ) {
        if (keyCode === KeyCode.ENTER) {
          confirmChange();
          emit('end');
        } else if (keyCode === KeyCode.ESC) {
          state.current = props.originContent;
          emit('cancel');
        }
      }
    }

    function onBlur() {
      confirmChange();
      emit('end');
    }

    function confirmChange() {
      emit('save', state.current.trim());
    }
    const textAreaClassName = computed(() => ({
      [`${props.prefixCls}`]: true,
      [`${props.prefixCls}-edit-content`]: true,
      [`${props.prefixCls}-rtl`]: props.direction === 'rtl',
    }));
    return () => (
      <div class={textAreaClassName.value}>
        <TextArea
          ref={saveTextAreaRef}
          maxlength={props.maxlength}
          value={state.current}
          onChange={onChange as ChangeEventHandler}
          onKeydown={onKeyDown}
          onKeyup={onKeyUp}
          onCompositionstart={onCompositionStart}
          onCompositionend={onCompositionEnd}
          onBlur={onBlur}
          rows={1}
          autoSize={props.autoSize === undefined || props.autoSize}
        />
        {slots.enterIcon ? (
          slots.enterIcon({ className: `${props.prefixCls}-edit-content-confirm` })
        ) : (
          <IconBytedCornerDownLeft
            colors={['currentColor']}
            class={`${props.prefixCls}-edit-content-confirm`}
          />
        )}
      </div>
    );
  },
});

export default Editable;
