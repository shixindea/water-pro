<!-- @format -->

<template>
  <ContainerScroll ref="wrapperRef" :style="bodyStyle">
    <a-spin :spinning="loading" :tip="loadingTip">
      <div
        ref="spinRef"
        :style="spinStyle"
      >
        <slot></slot>
      </div>
    </a-spin>
  </ContainerScroll>
</template>
<script lang="ts" src="./modal-wrapper.ts"></script>
