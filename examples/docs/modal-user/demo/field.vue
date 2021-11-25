<template>
  <a-modal-user
    :api="getSelectForOptions"
    :replaceFields="{children: 'items',title: 'title',value: 'needId',users: 'users', unionid: 'needId',}"
    v-model:value="value3"
    :showAlias="false"
  ></a-modal-user>
</template> 
<script lang="ts">
import { defineComponent, ref } from 'vue';
const genData: any[] =  [
    {
        "id": 22,
        "title": "本地环境-段",
        "users": [
            {
                "id": 53,
                "needId": "ShangHaojia",
                "title": "上好佳",
                "position": "千禧部门",
                "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                "roleName": "管理员",
            },
            {
                "id": 51,
                "needId": "TongXinCui",
                "title": "同心脆",
                "position": "千禧部门",
                "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                "roleName": "管理员",
            },
            {
                "id": 51,
                "needId": "AoLiAo",
                "title": "奥利奥",
                "position": "千禧部门",
                "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                "roleName": "管理员",
            }
        ],
        "items": [
            {
                "id": 90,
                "title": "亚太地区",
                "users": [
                    {
                        "id": 51,
                        "needId": "Meina",
                        "title": "美娜",
                        "position": "鼓励部门",
                        "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                        "roleName": "超级管理员",
                    }
                ],
                "items": []
            }
        ]
    }
]

const getSelectForOptions = ({params, success}) => {
  console.log('下拉配置初始化');
  
  setTimeout(() => {
    success(genData);
  }, 100);
};

export default defineComponent({
  setup() {
    return {
      value3: ref(['Meina']),
      getSelectForOptions,
    };
  },
});
</script>
