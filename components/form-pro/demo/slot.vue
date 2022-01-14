<docs>
---
order: 0
title:
  zh-CN: 插槽
  en-US: Slot
---

## zh-CN

插槽

## en-US

Slot.
</docs>

<template>
  <a-form-pro :schemas="schemas" :labelWidth="200">
    <template #sfield4="{ model, field }">
      <span>这是 sfield4 的 slot 。 {{ model }}-{{ field }} 是数据</span>
    </template>
  </a-form-pro>
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import type {
  FormProSchema,
  RenderCallbackParams,
  FormProComponentPropsParams,
} from '@fe6/water-pro';

import { defineComponent, h } from 'vue';
import { Input, Tooltip, Typography } from '@fe6/water-pro';

import { IconBytedLinkFour } from '@fe6/icon-vue';

const schemas: FormProSchema[] = [
  {
    field: 'sfield1',
    component: 'Input',
    label: '首尾自定义',
    componentProps: (params: FormProComponentPropsParams) => {
      return {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          const { schema, formModel } = params;
          console.log(schema, formModel, e);
        },
      };
    },
    componentSlots: {
      prefix: () => 'pSlot',
      suffix: () => 'sSlot',
    },
  },
  {
    field: 'sfield2',
    component: 'Checkbox',
    label: '选项自定义',
    suffix: () => h('span', 'Check'),
  },
  {
    field: 'sfield3',
    component: 'Input',
    label: 'render 方式',
    render: (rParams: ComputedRef<RenderCallbackParams>) => {
      const { model, field } = rParams.value;
      return h(Input, {
        placeholder: 'change 方法修改提交数据',
        value: model[field],
        onChange: (e: any) => {
          model[field] = e.target.value;
        },
      });
    },
  },
  {
    field: 'sfield4',
    component: 'Slot',
    label: '自定义Slot',
    slot: 'sfield4',
  },
  {
    field: 'sfield5',
    component: 'Input',
    label: '自定义组件',
    defaultValue: 'water pro',
    componentProps: () => {
      return {
        placeholder: '自定义placeholder',
      };
    },
    componentSlots: {
      prefix: () => 'pSlot',
      suffix: () => 'sSlot',
    },
  },
  {
    field: 'sfield6',
    component: 'Input',
    label: '带后缀',
    defaultValue: 'water',
    wrapperWidth: '70%',
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
    suffix: () =>
      h(
        Tooltip,
        {
          title: 'water is best!',
        },
        () => h(IconBytedLinkFour),
      ),
  },
  {
    field: 'posters',
    component: 'UploadCard',
    label: '房型图片',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [
        {
          required: true,
          validator: () => {
            const { posters } = ruleParams.value.values;
            if (!posters || !posters.length) {
              return Promise.reject(new Error('请上传房型图片'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: {
      action: 'https://api.dev.mosh.cn/public/upload/image/binary',
    },
    endStyle: {
      paddingTop: '20px',
    },
    end: (): any =>
      h('div', [
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '1.最多可添加6张',
        ),
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '2.图片建议尺寸为800*800px以上',
        ),
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '3.支持PNG、JPG和JPEG格式，大小不超过5MB',
        ),
      ]),
  },
  {
    field: 'roomPosters',
    component: 'UploadCard',
    label: '房型图片2',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [
        {
          required: true,
          validator: () => {
            const { posters } = ruleParams.value.values;
            if (!posters || !posters.length) {
              return Promise.reject(new Error('请上传房型图片'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: {
      action: 'https://api.dev.mosh.cn/public/upload/image/binary',
    },
    suffixStyle: () => ({
      display: 'flex',
      'align-items': 'end',
    }),
    suffix: (): any =>
      h('div', [
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '1.自定义样式',
        ),
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '2.设置 suffixStyle 字段即可',
        ),
      ]),
  },
  {
    field: 'roomPosters3',
    component: 'UploadCard',
    label: '房型图片3',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [
        {
          required: true,
          validator: () => {
            const { posters } = ruleParams.value.values;
            if (!posters || !posters.length) {
              return Promise.reject(new Error('请上传房型图片'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: {
      action: 'https://api.dev.mosh.cn/public/upload/image/binary',
    },
    suffix: (): any =>
      h('div', [
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '1.最多可添加6张',
        ),
        h(
          Typography.Text,
          {
            type: 'secondary',
            blockable: true,
            size: 'small',
            style: {
              lineHeight: '22px',
            },
          },
          () => '2.图片建议尺寸为800*800px以上',
        ),
      ]),
  },
];

export default defineComponent({
  setup() {
    return {
      schemas,
    };
  },
});
</script>
