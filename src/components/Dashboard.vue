<template>
  <a-layout class="layout">
    <!-- 左侧 -->
    <a-layout-sider v-model:collapsed="collapsed1" :trigger="null" collapsible>
      <div class="logo">
            <span class="icon iconfont" v-if="collapsed1">&#xe618;</span>
            <span v-else>
              角色权限管理系统
            </span>
      </div>
      <div>
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          :theme="theme"
          :inline-collapsed="state.collapsed"
          :items="items"
        ></a-menu>
      </div>
    </a-layout-sider>
    <!-- 右侧 -->
    <a-layout>
      <!-- 顶部 -->
      <a-layout-header style="background: #fff;" class="loyoutHeader">
        <div class="headerLeft">
          <menu-unfold-outlined
          v-if="collapsed1"
          class="trigger"
          @click="() => (collapsed1 = !collapsed1)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed1 = !collapsed1)" />
        </div>
        <div class="headerRight"> 
          <a-switch
            :checked="theme === 'dark'"
            checked-children="Dark"
            un-checked-children="Light"
            @change="changeTheme"
          />
        </div>
      </a-layout-header>
      <!-- 主体 -->
      <a-layout-content
        :style="{ margin: '16px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { h, watch, reactive, ref } from 'vue';
import type { MenuTheme } from 'ant-design-vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';

const collapsed1 = ref<boolean>(false);

const theme = ref<MenuTheme>('light');
const changeTheme = (checked: boolean) => {
  theme.value = checked ? 'dark' : 'light';
};

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Option 1',
    title: 'Option 1',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3',
    title: 'Option 3',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);

</script>

<style scoped lang="scss"> 
.layout{
  width: 100vw;
  height: 100vh;
  .logo {
    height: 40px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px 4px 16px 4px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: white;
    overflow: hidden;  
    border-radius: 6px; 
    .icon {
      font-size: 18px;
    }
  }
  .loyoutHeader {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
  }
  .trigger {
    font-size: 24px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>