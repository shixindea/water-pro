<template>
  <div>
    <a-radio-group :value="size" @change="handleSizeChange">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br><br>
    <a-button type="primary" :size="size">
      Primary
    </a-button>
    <a-button :size="size">
      Normal
    </a-button>
    <a-button type="dashed" :size="size">
      Dashed
    </a-button>
    <a-button type="danger" :size="size">
      Danger
    </a-button>
    <a-button type="link" :size="size">
      Link
    </a-button>
    <br>
    <a-button type="primary" :size="size">
        <template #icon><DownloadOutlined /></template>
    </a-button>
    <a-button type="primary" shape="circle" :size="size">
        <template #icon><DownloadOutlined /></template>
    </a-button>
    <a-button type="primary" shape="round" :size="size">
      <template #icon><DownloadOutlined /></template>Download</a-button>
    <a-button type="primary" shape="round" :size="size">
        <template #icon><DownloadOutlined /></template>
    </a-button>
    <a-button type="primary" :size="size">
      <template #icon><DownloadOutlined /></template>
      Download
    </a-button>
    <br>
    <a-button-group :size="size">
      <a-button type="primary">
        <template #icon><LeftOutlined /></template>
        Go back
      </a-button>
      <a-button type="primary"> Go forward<template #icon><RightOutlined /></template></a-button>
    </a-button-group>
  </div>
</template>
<script>
  import { default as Radio } from '@@radio';
  import { LeftOutlined, RightOutlined, DownloadOutlined } from '@ant-design/icons-vue';


  export default {
    components: {
      ARadioGroup: Radio.Group,
      ARadioButton: Radio.Button,
      LeftOutlined,
      RightOutlined,
      DownloadOutlined,
    },
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
</script>
