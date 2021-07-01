<template>
  <div style="padding: 200px;">
    <!-- <a-input-group compact>
      <a-input style="width: 20%" v-model:value="value1">
        <template #prefix>
          <div>
            12
          </div>
        </template>
      </a-input>
      <a-button>验证码</a-button>
    </a-input-group> -->
    <!-- <ABasicTitle :level="5" title="safd" helpMessage="sasss" />
    <ABasicTitle :level="5">
      <template #default>
        <div>
          dddd
        </div>
      </template>
    </ABasicTitle> -->
    <AContainerCollapse title="sdf" expanable @expand="ddd">
      <template #default>
        <div>
          dddd
        </div>
      </template>
    </AContainerCollapse>
    <!-- 滚动的时候颜色选择器有问题 -->
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="ts">
// TODO
// - 指令
// - use
import { defineComponent, ref } from 'vue';
import { LogoutOutlined } from '@ant-design/icons-vue';
// import AInput from '@fe6/water-pro/es/input';
// import '@fe6/water-pro/es/input/style';
// import AButton from '@fe6/water-pro/es/button';
// import '@fe6/water-pro/es/button/style';
import AContainerCollapse from '@fe6/water-pro/es/container-collapse';
import '@fe6/water-pro/es/container-collapse/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

const getCascaderApi = () => {
  return new Promise((solve) => {
    setTimeout(() => {
      solve([]);
    }, 1000);
  })
}
export default defineComponent({
  components: {
    LogoutOutlined,
    // ASmsCode: AInput.SmsCode,
    AContainerCollapse,
    // AColorPicker: ColorPicker,
  },
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    return {
      value1,
      value2,
      getCascaderApi,
      ddd: () => {
        console.log(9)
      }
    };
  },
});
</script>
