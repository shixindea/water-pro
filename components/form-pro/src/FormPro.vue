<!-- @format -->

<template>
  <Form
    v-bind="{ ...$attrs, ...$props }"
    ref="formElRef"
    :class="getFormClass"
    :model="formModel"
  >
    <Row :style="getRowWrapStyle">
      <slot name="formHeader"></slot>
      <template v-for="schema in getSchema" :key="schema.field">
        <a-card
          v-if="schema.children && schema.children.length > 0"
          :title="schema.label"
          style="width: 100%"
        >
          <template
            v-for="schemaChildItem in schema.children"
            :key="schemaChildItem.field"
          >
            <FormItem
              :table-action="tableAction"
              :form-action-type="formActionType"
              :schema="schemaChildItem"
              :form-props="getProps"
              :all-default-values="defaultValueRef"
              :form-model="formModel"
              :set-form-model="setFormModel"
            >
              <template v-for="item in Object.keys($slots)" #[item]="data">
                <slot :name="item" v-bind="data"></slot>
              </template>
            </FormItem>
          </template>
        </a-card>
        <FormItem
          v-else
          :table-action="tableAction"
          :form-action-type="formActionType"
          :schema="schema"
          :form-props="getProps"
          :all-default-values="defaultValueRef"
          :form-model="formModel"
          :set-form-model="setFormModel"
        >
          <template v-for="item in Object.keys($slots)" #[item]="data">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </FormItem>
      </template>
      <a-affix
        v-if="getProps.actionAffix"
        :offset-bottom="actionOffsetBottom"
        style="width: 100%;"
      >
        <FormAction
          v-bind="{ ...getProps, ...advanceState }"
          :schemas="getSchema"
          :form-props="getProps"
          @toggle-advanced="handleToggleAdvanced"
        >
          <template
            v-for="item in [
              'resetBefore',
              'submitBefore',
              'advanceBefore',
              'advanceAfter',
            ]"
            #[item]="data"
          >
            <slot :name="item" v-bind="data"></slot>
          </template>
        </FormAction>
      </a-affix>
      <FormAction
        v-else
        v-bind="{ ...getProps, ...advanceState }"
        :schemas="getSchema"
        :form-props="getProps"
        @toggle-advanced="handleToggleAdvanced"
      >
        <template
          v-for="item in [
            'resetBefore',
            'submitBefore',
            'advanceBefore',
            'advanceAfter',
          ]"
          #[item]="data"
        >
          <slot :name="item" v-bind="data"></slot>
        </template>
      </FormAction>
      <slot name="formFooter"></slot>
    </Row>
  </Form>
</template>

<script lang="ts" src="./form-pro.ts"></script>
