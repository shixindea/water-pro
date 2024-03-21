<template>
  <demo-sort :cols="1">
    <Basic />
    <Action />
    <Origin />
    <Toolbar />
    <UseMethods />
    <CustomerCell />
    <Search />
    <Search2 />
    <Drag />
    <WHeader />
    <Empty />
    <EmptyDiy />
    <Card />
    <Ellipsis />
    <Num />
  </demo-sort>
</template>
<script lang="ts">
import Action from './action.vue';
import Basic from './basic.vue';
import Card from './card.vue';
import Ellipsis from './ellipsis.vue';
import Num from './num.vue';
import CustomerCell from './customer-cell.vue';
import Drag from './drag.vue';
import EmptyDiy from './empty-diy.vue';
import Empty from './empty.vue';
import WHeader from './header.vue';
import Origin from './origin.vue';
import Search from './search.vue';
import Search2 from './search2.vue';
import Toolbar from './toolbar.vue';
import UseMethods from './use-methods.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Action,
    Origin,
    Toolbar,
    UseMethods,
    CustomerCell,
    Search,
    Search2,
    Drag,
    Empty,
    EmptyDiy,
    WHeader,
    Card,
    Ellipsis,
    Num,
  },
  setup() {
    return {};
  },
});
</script>
