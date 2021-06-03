<!-- @format -->

<template>
  <span :class="[prefixClsNew, { 'show-span': span && $slots.default }]">
    <slot></slot>
    <BasicHelp
      v-if="helpMessage"
      :class="`${prefixClsNew}-help`"
      :text="helpMessage"
    />
  </span>
</template>
<script lang="ts" src="./basic-title.ts"></script>
