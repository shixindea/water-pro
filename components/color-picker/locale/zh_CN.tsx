import type { ColorPickerLocale } from '../interface';

// Merge into a locale object
const locale: ColorPickerLocale = {
  'ui:dialog': 'color picker dialog',
  'btn:toggle': 'toggle color picker dialog',
  'btn:swatch': 'color swatch',
  'btn:last-color': 'use previous color',
  'btn:save': '保存',
  'btn:cancel': '取消',
  'btn:clear': '清除',

  // Strings used for aria-labels
  'aria:btn:save': 'save and close',
  'aria:btn:cancel': 'cancel and close',
  'aria:btn:clear': 'clear and close',
  'aria:input': 'color input field',
  'aria:palette': 'color selection area',
  'aria:hue': 'hue selection slider',
  'aria:opacity': 'selection slider',
};

export default locale;
