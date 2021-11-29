<template>
  <div>
    <a-modal-user
      :api="getSelectForOptions"
      v-model:value="value3"
      size="large"
    ></a-modal-user>
  </div>
</template> 
<script lang="ts">
import { defineComponent, ref } from 'vue';
const genData: any[] =  [
  {
    "id": 1,
    "name": "本地环境-段",
    "parentId": 0,
    "users": [
      {
        "id": 53,
        "userId": "ShangHaojia",
        "name": "上好佳",
        "alias": "Irresistible teacher",
        departmentId: [1],
        "position": "千禧部门",
        "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
        "roleName": "管理员",
      }
    ],
    "children": [
      {
          "id": 2,
          "name": "亚太地区",
          "users": [
              {
                  "id": 51,
                  "userId": "Meina",
                  "name": "美娜",
                  "alias": "out of body master",
                  departmentId: [1, 2],
                  "position": "鼓励部门",
                  "avatar": "https://ecdn.evente.cn/assets/image/b-favicon-1.ico",
                  "roleName": "超级管理员",
              }
          ],
          "children": [
              {
                  "id": 3,
                  "name": "中国",
                  "users": [],
                  "children": [
                    {
                          "id": 44,
                          "name": "大中华区",
                          "users": [],
                          "children": [
                              {
                                "id": 5,
                                "name": "西三旗部",
                                "users": [
                                  {
                                    "id": 51,
                                    "userId": "Cangjingkong",
                                    "name": "苍井空",
                                    "alias": "Irresistible teacher",
                                    departmentId: [1, 2, 3, 5,6, 7, 44],
                                    "position": "退休",
                                    "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                    "roleName": "超级管理员",
                                  },
                                  {
                                    "id": 151,
                                    "userId": "Cang",
                                    "name": "苍",
                                    departmentId: [1, 2, 3, 5],
                                    "alias": "Irresistible teacher",
                                    "position": "退休",
                                    "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                    "roleName": "超级管理员",
                                  }
                                ],
                                "children": []
                              }
                          ]
                      },
                  ]
              },
          ]
      }
    ]
  }
]

const getSelectForOptions = ({params, success}) => {
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
