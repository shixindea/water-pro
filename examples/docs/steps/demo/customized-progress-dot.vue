<template>
  <div>
    <a-steps :current="1">
      <template #progressDot="{ index, status, prefixCls }">
        <a-popover>
          <template #content>
            <span>step {{ index }} status: {{ status }}</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`" />
        </a-popover>
      </template>
      <a-step title="Finished" description="You can hover on the dot." />
      <a-step title="In Progress" description="You can hover on the dot." />
      <a-step title="Waiting" description="You can hover on the dot." />
      <a-step title="Waiting" description="You can hover on the dot." />
    </a-steps>
  </div>
</template>
