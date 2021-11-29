<template>
  <a-locale-provider :locale="zhCN">
    <a-pagination :default-current="1" :total="50" show-size-changer />
  </a-locale-provider>
</template>
<script>
import zhCN from '@fe6/water-pro/es/locale-provider/zh_CN';
export default {
  data() {
    return {
      zhCN,
    };
  },
};
</script>
