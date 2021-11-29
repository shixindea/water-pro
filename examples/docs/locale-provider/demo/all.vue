<template>
  <div>
    <div class="change-locale">
      <span :style="{ marginRight: '16px' }">Change locale of components: </span>
      <a-radio-group :default-value="null" @change="changeLocale">
        <a-radio-button key="en" :value="null">
          English
        </a-radio-button>
        <a-radio-button key="cn" :value="zhCN">
          中文
        </a-radio-button>
      </a-radio-group>
    </div>
    <a-locale-provider :locale="locale">
      <div :key="(!!locale).toString()" class="locale-components">
        <!-- HACK: just refresh in production environment-->
        <div class="example">
          <a-pagination :default-current="1" :total="50" show-size-changer />
        </div>
        <div class="example">
          <a-select show-search style="width: 200px">
            <a-select-option value="jack">
              jack
            </a-select-option>
            <a-select-option value="lucy">
              lucy
            </a-select-option>
          </a-select>
          <a-date-picker />
          <a-time-picker />
          <a-range-picker style=" width: 200px " />
        </div>
        <div class="example">
          <a-button type="primary" @click="showModal">
            Show Modal
          </a-button>
          <a-button @click="info">
            Show info
          </a-button>
          <a-button @click="confirm">
            Show confirm
          </a-button>
          <a-popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </a-popconfirm>
        </div>
        <div className="example">
          <a-transfer
            :data-source="[]"
            show-search
            :target-keys="[]"
            :render="item => item.title"
          />
        </div>
        <div :style="{ width: '319px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <a-calendar :fullscreen="false" :value="moment()" />
        </div>
        <a-modal v-model="visible" title="Locale Modal">
          <p>Locale Modal</p>
        </a-modal>
      </div>
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from '@fe6/water-pro/es/locale-provider/zh_CN';
import { Modal } from '@fe6/water-pro';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

export default {
  data() {
    return {
      visible: false,
      locale: null,
      zhCN,
    };
  },
  methods: {
    moment,
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    info() {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    },
    confirm() {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    },
    changeLocale(e) {
      const localeValue = e.target.value;
      this.locale = localeValue;
      if (!localeValue) {
        moment.locale('en');
      } else {
        moment.locale('zh-cn');
      }
    },
  },
};
</script>

<style scoped>
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
</style>
