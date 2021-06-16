<!-- @format -->

<template>
  <div :class="prefixClsNew">
    <div v-show="!isEdit" :class="`${prefixClsNew}__normal`" @click="handleEdit">
      {{ getValues || '&nbsp;' }}
      <FormOutlined
        v-if="!column.editRow"
        :class="`${prefixClsNew}__normal-icon`"
      />
    </div>

    <div
      v-if="isEdit"
      v-click-outside="onClickOutside"
      :class="`${prefixClsNew}__wrapper`"
    >
      <CellComponent
        v-bind="getComponentProps"
        ref="elRef"
        :component="getComponent"
        :style="getWrapperStyle"
        :popover-visible="getRuleVisible"
        :rule="getRule"
        :rule-message="ruleMessage"
        allow-clear
        size="small"
        :prefix-cls="prefixCls"
        @change="handleChange"
        @options-change="handleOptionsChange"
        @pressEnter="handleEnter"
      />
      <div v-if="!getRowEditable" :class="`${prefixClsNew}__action`">
        <CheckOutlined
          :class="[`${prefixClsNew}__icon`, 'mx-2']"
          @click="handleSubmit"
        />
        <CloseOutlined :class="`${prefixClsNew}__icon `" @click="handleCancel" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./editable-cell.ts"></script>
