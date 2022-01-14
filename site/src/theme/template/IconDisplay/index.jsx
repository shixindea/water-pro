import { Radio } from '@fe6/water-pro';
import { IconKeg, DEFAULT_ICON_CONFIGS } from '@fe6/icon-vue';
import cubeIcons from '@fe6/icon-vue/icons.json';
import groupBy from 'lodash-es/groupBy';
import cloneDeep from 'lodash-es/cloneDeep';
import chunk from 'lodash-es/chunk';

import { defineComponent, ref, watchEffect, watch } from 'vue';

import { categories } from './fields';
import CopyableIcon from './CopyableIcon.vue';

const iconDatas = cubeIcons.slice().map((item) => {
  const { config } = item;
  return {
    ...item,
    config: config || cloneDeep(DEFAULT_ICON_CONFIGS),
  };
});

const IconDisplay = defineComponent({
  cagetories: categories,
  setup() {
    const searchValue = ref('');
    const filterIcons = (iconDatas, groupKey) => {
      let newIcons = searchValue.value
        ? iconDatas.filter(({ name, title }) => name.includes(searchValue.value))
        : iconDatas;
      return groupBy(newIcons, groupKey);
    };
    const iconCategoryGroup = ref({});
    const iconGroup = ref([]);

    const getIconGroup = () => {
      iconGroup.value = [];
      iconCategoryGroup.value = filterIcons(iconDatas, 'categoryCN');
      Object.keys(iconCategoryGroup.value).forEach((category) => {
        iconGroup.value.push({
          isTitle: true,
          id: category,
          category,
        });
        iconGroup.value = iconGroup.value.concat(chunk(iconCategoryGroup.value[category], 6));
      });
    };

    watchEffect(getIconGroup);
    watch(() => searchValue.value, getIconGroup);

    return {
      getIconGroup,
      iconGroup,
      justCopied: ref(),
      searchValue,
    };
  },
  methods: {
    onCopied(type, text) {
      this.$message.success(
        <span>
          <code class="copied-code">{text}</code> copied 🎉
        </span>,
      );
      this.justCopied = type;
      setTimeout(() => {
        this.justCopied = null;
      }, 2000);
    },
    searchChange(e) {
      console.log(e.target.value);
      this.searchValue = e.target.value;
    },
  },
  render() {
    const renderChildren = (group) => {
      return (
        <a-row>
          {group.map((item) => (
            <a-col span={4}>
              <CopyableIcon
                key={item.name}
                name={item.name}
                svg={item.svg}
                type={item.name}
                justCopied={this.justCopied}
                onCopied={this.onCopied}
              />
            </a-col>
          ))}
        </a-row>
      );
    };
    return (
      <div>
        <a-typography-title level={4}>所有图标</a-typography-title>
        <a-input
          value={this.searchValue}
          onChange={this.searchChange}
          placeholder="搜索想要的图标..."
          allow-clear
          style="margin: 8px 0 32px"
        />
        <a-container-list
          height={400}
          itemHeight={100}
          data={this.iconGroup}
          itemKey="id"
          children={(item) =>
            item.isTitle ? (
              <a-typography-title level={6}>{item.category}</a-typography-title>
            ) : (
              renderChildren(item)
            )
          }
        />
      </div>
    );
  },
});

export default IconDisplay;
