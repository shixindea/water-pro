<template>
-{{value3}}-
<br/>
<a-modal-user
:api="getSelectForOptions"
v-model:value="value3"
></a-modal-user>
<a-container-collapse mode="simple" title="water">
  <template #action="ssss">
    <div>
      {{ssss}}_
    </div>
  </template>
  <template #icon="{status}">
    <div v-if="status">
      <UpCircleOutlined />
    </div>
    <div v-else>
      <DownCircleOutlined />
    </div>
  </template>
    这里面是个内容
</a-container-collapse>
</template>
<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons-vue';

import AModalUser from '@fe6/water-pro/es/modal-user';
import '@fe6/water-pro/es/modal-user/style';
import AContainerCollapse from '@fe6/water-pro/es/container-collapse';
import '@fe6/water-pro/es/container-collapse/style';

// 好
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
                      {
                          "id": 6,
                          "name": "华南区",
                          "users": [],
                          "children": [
                              {
                                  "id": 7,
                                  "name": "西部",
                                  "users": [
                                    {
                                        "id": 51,
                                        "userId": "Cangjingkong",
                                        "name": "苍井空",
                                        "alias": "Irresistible teacher",
                                        "position": "退休",
                                        departmentId: [1, 2, 3, 5,6, 7, 44],
                                        "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                        "roleName": "超级管理员",
                                    },
                                    {
                                        "id": 151,
                                        "userId": "DuanFuXing",
                                        "name": "苍井空1",
                                        departmentId: [1, 2, 3,6, 7],
                                        "alias": "Irresistible teacher",
                                        "position": "退休",
                                        "avatar": "http://water.chjgo.com/assets/logo.20db40aa.png",
                                        "roleName": "超级管理员",
                                    }
                                  ],
                                  "children": []
                              }
                          ]
                      }
                  ]
              },
          ]
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
  components: {
    UpCircleOutlined,
    DownCircleOutlined,
    AContainerCollapse,
    AModalUser,
  },
  setup() {
    return {
      value3: ref(['DuanFuXing']),
      getSelectForOptions,
    }
  }
});
</script>
