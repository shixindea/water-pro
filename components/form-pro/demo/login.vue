<docs>
---
order: 0
title:
  zh-CN: 登录
  en-US: Basic Usage
---

## zh-CN

登录。暂时不支持回车自动发送。自带图形验证码，所以使用的时候在 [html](https://github.com/fe6/water-pro/blob/master/index.html#L11) 文件中引入 [TCaptcha](https://ssl.captcha.qq.com/TCaptcha.js)。

## en-US

Login
</docs>

<template>
  <a-form-pro @register="loginFormPro" @submit="handleSubmit" />
</template>
<script lang="ts">
import type { FormProSchema, FormProComponentPropsParams, AjaxApi } from '@fe6/water-pro';

import { defineComponent, h } from 'vue';
import { rePhone } from '@fe6/shared';

import { LogoutOutlined } from '@ant-design/icons-vue';
import { useForm } from '@fe6/water-pro';

const getSmsCodeApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([]);
  }, 1000);
};

const schemas: FormProSchema[] = [
  {
    field: 'phone',
    component: 'Input',
    componentProps: () => {
      return {
        placeholder: '手机号',
        maxlength: 11,
      };
    },
    componentSlots: {
      prefix: () => h(LogoutOutlined),
    },
    rules: [
      {
        required: true,
        trigger: 'blur',
        message: '请输入手机号',
      },
      {
        validator: async (rule, value) => {
          if (value && !rePhone.test(value)) {
            return Promise.reject(new Error('请填写正确手机号'));
          }
          return Promise.resolve();
        },
        trigger: 'blur',
      },
    ],
  },
  {
    field: 'smscode',
    component: 'InputSmsCode',
    componentProps: ({ formModel }: FormProComponentPropsParams) => {
      let ticket = '';
      let randstr = '';
      return {
        api: getSmsCodeApi,
        maxlength: 6,
        ajaxParams: () => {
          return {
            phone: formModel.phone,
            ticket,
            randstr,
          };
        },
        before(fn) {
          const captcha1 = new (window as any).TencentCaptcha('2086745153', (res) => {
            if (res.ret === 0) {
              ticket = res.ticket;
              randstr = res.randstr;
              fn();
            }
          });
          captcha1.show(); // 显示验证码
        },
      };
    },
    componentSlots: {
      prefix: () => h(LogoutOutlined),
    },
  },
  {
    field: 'useCookie',
    component: 'Checkbox',
    suffix: () => h('span', '七天内登录'),
  },
];

export default defineComponent({
  setup() {
    const [loginFormPro] = useForm({
      schemas,
      showResetButton: false,
      labelCol: {
        span: 24,
      },
      wrapperCol: {
        span: 24,
      },
      actionColOptions: {
        span: 24,
        push: 0,
      },
      layout: 'vertical',
      submitButtonOptions: {
        block: true,
      },
    });
    return {
      loginFormPro,
    };
  },
  methods: {
    handleSubmit(values: any) {
      const myValues = JSON.stringify(values);
      (this as any).$message.info(myValues === '{}' ? '操作点数据吧' : myValues);
      console.log('提交的数据:' + JSON.stringify(values));
    },
  },
});
</script>
