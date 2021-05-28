<script lang="jsx">
import { SearchOutlined } from '@ant-design/icons-vue'
import { isZhCN } from '../utils/util';
import packageInfo from '../../package.json';
// import logo from 'https://center-dev.emplusys.com/assets/header.e96cde6f.svg';
// import antDesignVue from 'https://center-dev.emplusys.com/assets/header.e96cde6f.svg';
// <img alt="logo" height="32" src={logo} />
// <img alt="logo" height="16" src={antDesignVue} />

export default {
  inject: {
    demoContext: { default: {} },
  },
  components: {
    SearchOutlined
  },
  props: {
    name: String,
    searchData: Array,
  },
  data() {
    return {
      visibleAdblockBanner: !!this.demoContext.blocked,
      value: null,
    };
  },
  watch: {
    'demoContex.blocked': function blocked(val) {
      this.visibleAdblockBanner = !!val;
    },
  },
  methods: {
    handleClick() {
      const name = this.name;
      const path = this.$route.path;
      const newName = isZhCN(name) ? name.replace(/-cn\/?$/, '') : `${name}-cn`;
      this.$router.push({
        path: path.replace(name, newName),
      });
      this.$i18n.locale = isZhCN(name) ? 'en-US' : 'zh-CN';
    },
    onSelect(val) {
      this.$router.push(val);
      this.value = val;
    },
    closeTopBanner() {},
  },
  render() {
    const name = this.name;
    const visibleAdblockBanner = false; // this.visibleAdblockBanner;
    const isCN = isZhCN(name);
    const path = this.$route.path;
    const selectedKeys = ['components'];
    return (
      <header id="header">
        {visibleAdblockBanner && (
          <div class="adblock-banner">
            {isZhCN
              ? '我们检测到你可能使用了 AdBlock 或 Adblock Plus，它会影响到正常功能的使用（如复制、展开代码等）。'
              : 'We have detected that you may use AdBlock or Adblock Plus, which will affect the use of normal functions (such as copying, expanding code, etc.)'}
            <br />
            {isZhCN
              ? '你可以将 Ant Design Vue 加入白名单，以便我们更好地提供服务。'
              : 'You can add Ant Design Vue to the whitelist so that we can provide better services.'}

            <CloseOutlined class="close-icon" onClick={() => (this.visibleAdblockBanner = false)} />
          </div>
        )}
        <a-row>
          <a-col class="header-left" xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <router-link to={{ path: '/' }} id="logo">
              water pro-{packageInfo.version}
            </router-link>
            <a-button
              ghost
              size="small"
              onClick={this.handleClick}
              class="header-lang-button"
              key="lang-button"
            >
              {isCN ? 'English' : '中文'}
            </a-button>
          </a-col>
          <a-col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            <div id="search-box">
              <SearchOutlined />
              <a-input
                placeholder={isCN ? '搜索组件...' : 'input search text'}
                style="width: 200px"
              />
            </div>
            <span id="github-btn" class="github-btn">
              <a class="gh-btn" href="//github.com/fe6/water-pro/" target="_blank">
                <span class="gh-ico" aria-hidden="true"></span>
                <span class="gh-text">Star</span>
              </a>
            </span>
            <a-button
              ghost
              size="small"
              onClick={this.handleClick}
              class="header-lang-button"
              key="lang-button"
            >
              {isCN ? 'English' : '中文'}
            </a-button>
            <a-menu selectedKeys={selectedKeys} mode="horizontal" class="menu-site" id="nav">
              <a-menu-item key="components">
                <router-link to="/docs/vue/introduce">{isCN ? '组件' : 'Components'}</router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </header>
    );
  },
};
</script>

<style scope>
.adblock-banner {
  position: relative;
  z-index: 100;
  min-width: 1000px;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
