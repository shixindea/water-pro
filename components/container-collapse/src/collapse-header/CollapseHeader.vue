<!-- @format -->

<template>
  <div :class="`${prefixClsNew}-header`">
    <basic-title :help-message="helpMessage">
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        <slot name="title"></slot>
      </template>
    </basic-title>

    <div :class="`${prefixClsNew}-action`">
      <slot name="action"></slot>
      <basic-arrow
        v-if="canExpan"
        top
        :expand="show"
        @click="$emit('expand')"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./collapse-header.ts"></script>
