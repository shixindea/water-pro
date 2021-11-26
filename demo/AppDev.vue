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

const genData: any[] =  [
        {
            "id": 22,
            "wxDepartmentId": 1,
            "name": "本地环境-段",
            "nameEn": "",
            "parentId": 0,
            "users": [
                {
                    "id": 51,
                    "userid": "DuanFuXing",
                    "name": "段福兴",
                    "alias": "adfasdklfjasdklfjaklsdjfaklsdjfkladsjfkladsjfklads",
                    "position": "部门阿的说法是垮落法就是狂龙部门阿的说法是垮落法就是狂龙部门阿的说法是垮落法就是狂龙部门阿的说法是垮落法就是狂龙部门阿的说法是垮落法就是狂龙部门阿的说法是垮落法就是狂龙部门阿的说法是垮落法就是狂龙",
                    "email": "",
                    "mobile": "13249392000",
                    "avatar": "http://wework.qpic.cn/bizmail/MGqobFpHLQfWNKTrdiciaIR4JpInBetWPoGXLjUoXjHPwYbVB59kJZmA/0",
                    "roleName": "超级管理员",
                    "roleCode": "super_admin"
                },
                {
                    "id": 53,
                    "userid": "WangJia",
                    "name": "王佳",
                    "alias": "adfasdklfjasdklfjaklsdjfaklsdjfkladsjfkladsjfklads",
                    "position": "部门阿的说法是垮落法就是狂龙",
                    "email": "",
                    "mobile": "13466622785",
                    "avatar": "http://wework.qpic.cn/bizmail/FRuCFNdErQxQdRwibHGwxRQxwLz9UyGfNMm9cRtVrQ6Fm3MlkPV3icXQ/0",
                    "roleName": "管理员",
                    "roleCode": "admin"
                }
            ],
            "children": [
                {
                    "id": 90,
                    "wxDepartmentId": 2,
                    "name": "亚太地区",
                    "nameEn": "",
                    "users": [
                        {
                            "id": 51,
                            "userid": "DuanFuXing",
                            "name": "段福兴",
                            "alias": "adfasdklfjasdklfjaklsdjfaklsdjfkladsjfkladsjfklads",
                            "position": "部门阿的说法是垮落法就是狂龙",
                            "email": "",
                            "mobile": "13249392000",
                            "avatar": "http://wework.qpic.cn/bizmail/MGqobFpHLQfWNKTrdiciaIR4JpInBetWPoGXLjUoXjHPwYbVB59kJZmA/0",
                            "roleName": "超级管理员",
                            "roleCode": "super_admin"
                        }
                    ],
                    "children": [
                        {
                            "id": 91,
                            "wxDepartmentId": 3,
                            "name": "中国",
                            "nameEn": "",
                            "users": [],
                            "children": [
                                {
                                    "id": 94,
                                    "wxDepartmentId": 6,
                                    "name": "华北区",
                                    "nameEn": "",
                                    "users": [
                                        {
                                            "id": 51,
                                            "userid": "DuanFuXing",
                                            "name": "段福兴",
                                            "alias": "adfasdklfjasdklfjaklsdjfaklsdjfkladsjfkladsjfklads",
                                            "position": "部门阿的说法是垮落法就是狂龙",
                                            "email": "",
                                            "mobile": "13249392000",
                                            "avatar": "http://wework.qpic.cn/bizmail/MGqobFpHLQfWNKTrdiciaIR4JpInBetWPoGXLjUoXjHPwYbVB59kJZmA/0",
                                            "roleName": "超级管理员",
                                            "roleCode": "super_admin"
                                        }
                                    ],
                                    "children": [
                                        {
                                            "id": 98,
                                            "wxDepartmentId": 10,
                                            "name": "北京",
                                            "nameEn": "",
                                            "users": [],
                                            "children": [
                                                {
                                                    "id": 99,
                                                    "wxDepartmentId": 11,
                                                    "name": "天津",
                                                    "nameEn": "",
                                                    "users": [],
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": 95,
                                    "wxDepartmentId": 7,
                                    "name": "华南区",
                                    "nameEn": "",
                                    "users": [
                                        {
                                            "id": 51,
                                            "userid": "DuanFuXing",
                                            "name": "段福兴",
                                            "alias": "adfasdklfjasdklfjaklsdjfaklsdjfkladsjfkladsjfklads",
                                            "position": "部门阿的说法是垮落法就是狂龙",
                                            "email": "",
                                            "mobile": "13249392000",
                                            "avatar": "http://wework.qpic.cn/bizmail/MGqobFpHLQfWNKTrdiciaIR4JpInBetWPoGXLjUoXjHPwYbVB59kJZmA/0",
                                            "roleName": "超级管理员",
                                            "roleCode": "super_admin"
                                        }
                                    ],
                                    "children": [
                                        {
                                            "id": 96,
                                            "wxDepartmentId": 8,
                                            "name": "广州",
                                            "nameEn": "",
                                            "users": [],
                                            "children": [
                                                {
                                                    "id": 97,
                                                    "wxDepartmentId": 9,
                                                    "name": "香港",
                                                    "nameEn": "",
                                                    "users": [],
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 92,
                            "wxDepartmentId": 4,
                            "name": "韩国",
                            "nameEn": "",
                            "users": [],
                            "children": []
                        },
                        {
                            "id": 93,
                            "wxDepartmentId": 5,
                            "name": "新加坡",
                            "nameEn": "",
                            "users": [],
                            "children": []
                        }
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
