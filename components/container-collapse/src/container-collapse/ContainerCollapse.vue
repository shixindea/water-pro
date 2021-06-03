<!-- @format -->

<template>
  <div :class="[prefixClsNew]">
    <CollapseHeader
      v-bind="getBindValues"
      :prefix-cls="prefixClsNew"
      :show="show"
      @expand="handleExpand"
    >
      <template #title>
        <slot name="title"></slot>
      </template>
    </CollapseHeader>

    <CollapseTransition :enable="canExpan">
      <Skeleton v-if="loading" />
      <div v-else v-show="show" :class="`${prefixClsNew}-body`">
        <LazyContainer v-if="lazy" :timeout="lazyTime">
          <slot></slot>
          <template #skeleton>
            <slot name="lazySkeleton"></slot>
          </template>
        </LazyContainer>
        <slot v-else></slot>
      </div>
    </CollapseTransition>
  </div>
</template>
<script lang="ts" src="./container-collapse.ts"></script>
