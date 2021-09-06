<template>
  <header id="header">
    <a-row>
      <a-col class="header-left" :xxl="4" :xl="5" :lg="5" :md="6" :sm="24" :xs="24">
        <router-link :to="{ path: '/' }" id="logo">
          <a-badge :offset="[0, 10]">
            <template #count>
              <span>pro</span>
            </template>
            <img :src="logo" class="header-logo" />
          </a-badge>
        </router-link>
      </a-col>
      <a-col :xxl="20" :xl="19" :lg="19" :md="18" :sm="0" :xs="0">
        <span id="github-btn" class="github-btn">
          <a class="gh-btn" href="//github.com/fe6/water-pro/" target="_blank">
            <span class="gh-ico" aria-hidden="true"></span>
            <span class="gh-text">Star</span>
          </a>
        </span>
        <a style="float:right;margin: 20px 0 0;" href="https://www.npmjs.org/package/@fe6/water-pro" target="_blank">
          <img src="https://img.shields.io/npm/v/@fe6/water-pro.svg?style=flat-square" />
        </a>
        <a-select
          style="float:right;margin: 15px 16px 0 0;width: 200px"
          placeholder="搜索组件..."
          v-model:value="searchValue"
          showSearch
          optionFilterProp="label"
          optionLabelProp="label"
          :options="filteredOptions"
          @change="filterChange"
        >
        </a-select>
      </a-col>
    </a-row>
  </header>
</template>

<script>
import { ref, computed } from 'vue';
import { hyphenate } from '@fe6/shared';
import router from '../routers';
import demoRouters from '../routers/demo';
import logo from '../assets/img/logo.png?url';

const options = () => {
  const newOpts = [];
  Object.keys(demoRouters).forEach((drKey) => {
    newOpts.push({
      value: drKey,
      label: demoRouters[drKey].subtitle,
    })
  });
  return newOpts;
}

export default {
  inject: {
    demoContext: { default: {} },
  },
  props: {
    name: String,
    searchData: Array,
  },
  data() {
    return {
      logo,
    };
  },
  setup() {
    const searchValue = ref(null);
    const selOpts = options();
    const filteredOptions = computed(() => selOpts.filter(o => {
      return searchValue.value ? !searchValue.value.includes(o.value) : o.value;
    }));
    return {
      searchValue,
      filteredOptions,
      filterChange: () => {
        if (searchValue.value) {
          const newPath = hyphenate(searchValue.value);
          router.push({
            path: `${newPath || searchValue.value}-cn`
          });
          searchValue.value = null;
        }
      }
    }
  }
};
</script>
