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
      </a-col>
    </a-row>
  </header>
</template>

<script>
import { isZhCN } from '../utils/util';
import packageInfo from '../../package.json';
import logo from '../assets/img/logo.png?url';

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
};
</script>
