<!-- @format -->

<template>
  <ContainerScroll ref="wrapperRef">
    <div
      ref="spinRef"
      v-loading="loading"
      :style="spinStyle"
      :loading-tip="loadingTip"
    >
      <slot></slot>
    </div>
  </ContainerScroll>
</template>
<script lang="ts" src="./modal-wrapper.ts"></script>
