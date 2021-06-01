<template>
  <a-select v-model:value="province" style="width: 120px">
    <a-select-option v-for="pro in provinceData" :key="pro">
      {{ pro }}
    </a-select-option>
  </a-select>
  <a-select v-model:value="secondCity" style="width: 120px">
    <a-select-option v-for="city in cities" :key="city">
      {{ city }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData: Record<string, string[]> = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
import { defineComponent, reactive, toRefs, computed, watch } from 'vue';
export default defineComponent({
  setup() {
    const province = provinceData[0];
    const state = reactive({
      province,
      provinceData,
      cityData,
      secondCity: cityData[province][0],
    });
    const cities = computed(() => {
      return cityData[state.province];
    });

    watch(
      () => state.province,
      val => {
        state.secondCity = state.cityData[val][0];
      },
    );

    return {
      ...toRefs(state),
      cities,
    };
  },
});
</script>
