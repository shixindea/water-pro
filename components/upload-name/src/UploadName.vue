<!-- @format -->

<template>
  <div :class="prefixClsNew">
    <a-upload
      v-show="!imageName"
      :accept="accept"
      :class="`${prefixClsNew}-uploader`"
      :show-upload-list="false"
      :action="autoUpload ? action : ''"
      :headers="headers"
      :before-upload="beforeUploadFn"
      @change="handleChange"
    >
      <a-button
        :class="`${prefixClsNew}-btn`"
        type="link"
        v-bind="buttonProps"
        :loading="loading"
        :style="{ marginLeft: loading ? '14px' : 0 }"
      >{{ btnText }}</a-button>
    </a-upload>
    <div v-show="imageName" :class="`${prefixClsNew}-inner`">
      <span>
        <PictureOutlined
          v-show="isImage"
          :class="`${prefixClsNew}-img`"
        /><FileOutlined v-show="!isImage" :class="`${prefixClsNew}-img`" />
        {{ imageName }}
      </span>
      <DeleteOutlined :class="`${prefixClsNew}-del`" @click="removeImage" />
    </div>
  </div>
</template>

<script lang="ts" src="./upload-name.ts"></script>
