<template>
  <a-layout 
    class="layout"  
  >
    <!-- 左侧 -->
    <a-layout-sider 
      v-model:collapsed="collapsed1" 
      :trigger="null" 
      collapsible
      :class="{ totalTheme: isActive, totalThemeDefault: !isActive }"
      >
      <div 
        class="logo"
        :class="{ totalTheme: isActive, totalThemeDefault: !isActive }">
        <span class="icon iconfont" v-if="collapsed1">&#xe618;</span>
        <span v-else>
          RPM System
        </span>
      </div>
      <div>
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          :theme="theme"
          :inline-collapsed="state.collapsed"
          :items="itemsVertical"
        ></a-menu>
      </div>
    </a-layout-sider>
    <!-- 右侧 -->
    <a-layout>
      <!-- 顶部 -->
      <a-layout-header 
        class="loyoutHeader"
        :class="{ totalTheme: isActive, totalThemeDefault: !isActive }"
        >
        <div class="headerLeft">
          <menu-unfold-outlined
            v-if="collapsed1"
            class="trigger"
            :class="{ buttonColor: !isActive}"
            @click="() => (collapsed1 = !collapsed1)"
          />
          <menu-fold-outlined 
            v-else class="trigger" 
            :class="{ buttonColor: !isActive}"
            @click="() => (collapsed1 = !collapsed1)" 
          />
        </div>
        <div class="headerMiddle">
          <a-switch
            class="switchTheme"
            :checked="theme === 'dark'"
            checked-children="Dark"
            un-checked-children="Light"
            @change="changeTheme"
          />
          <a-menu 
            class="menuHoritontal"
            v-model:selectedKeys="current" 
            mode="horizontal" 
            :items="itemsHorizontal" 
            :theme="theme"
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
import { h, reactive, ref } from 'vue';
import type { MenuTheme } from 'ant-design-vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  MessageOutlined,
} from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';


// 垂直导航栏配置 
const collapsed1 = ref<boolean>(false);
const theme = ref<MenuTheme>('light');
const isActive = ref<boolean>(false)
const changeTheme = (checked: boolean) => {
  theme.value = checked ? 'dark' : 'light';
  isActive.value = !isActive.value
  
};
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
});
const itemsVertical = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Dashboard',
    title: 'Dashboard',
  },
  {
    key: '2',
    icon: () => h(MailOutlined),
    label: 'Authrization',
    title: 'Authrization',
    children: [
      {
        key: '3',
        label: 'User',
        title: 'User',
      },
      {
        key: '4',
        label: 'Role',
        title: 'Role',
      },
      {
        key: '5',
        label: 'Permissions',
        title: 'Permissions',
      },
    ],
  },
  {
    key: '6',
    icon: () => h(MessageOutlined),
    label: 'System',
    title: 'System',
    children: [
      {
        key: '7',
        label: 'View Management',
        title: 'View Management',
      },
      {
        key: '8',
        label: 'API Management',
        title: 'API Management',
      },
    ],
  },
  {
    key: '9',
    icon: () => h(MessageOutlined),
    label: 'Logging',
    title: 'Logging',
    children: [
      {
        key: '10',
        label: 'Login Log',
        title: 'Login Log',
      },
      {
        key: '11',
        label: 'Operate Log',
        title: 'Operate Log',
      },
    ],
  },
]);

// 水平导航栏配置
const current = ref<string[]>(['Email']);
const userAvatar = ref<string>("src/assets/images/avatar.jpg")
const itemsHorizontal = ref<MenuProps['items']>([
  {
    key: 'Manual',
    label: h('a', { href: 'http://www.baidu.com', target: '_blank' }, 'Manual'),
    title: 'Manual',
  },
  {
    key: 'Email',
    icon: () => h(MailOutlined),
    label: 'Email',
    title: 'Email',
  },
  {
    key: 'Message',
    icon: () => h(MessageOutlined),
    label: 'Message',
    title: 'Message',
  },
  {
    key: 'User',
    // icon: () => h(SettingOutlined),
    // Icon was replaced by an user avatar, which is an image returned from the backend API
    icon: () => h('img', { src: userAvatar.value, alt: '', class: 'myAvatar' }), 
    label: 'User',
    title: 'User',
    children: [
      {
        key: 'Your profile',
        title: 'Your profile',
        label: 'Your profile',
      },
      {
        key: 'Modify password',
        title: 'Modify password',
        label: 'Modify password',
      },
      {
        key: 'Setting',
        title: 'Setting',
        label: 'Setting',
      },
      {
        key: "Sign out",
        title: 'Sign out',
        label: 'Sign out',
      },
    ],
  },
]);

</script>

<style scoped lang="scss"> 
.totalTheme {
  background-color: rgb(4, 21, 39);
}
.totalThemeDefault {
  background-color: white;
}
.layout{

  width: 100vw;
  height: 100vh;
  .logo {
    height: 40px;
    margin: 16px 4px 16px 4px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: rgb(56, 117, 246);
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
    .buttonColor {
      color: rgb(72, 116, 238);
    }
    .headerMiddle {
      justify-content: space-between;
      display: flex;
      align-items: center;
      .switchTheme {
        margin-right: 20px;
      } :deep(.myAvatar) {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        height: 42px;
        width: 42px;
        border-radius: 50%; 
      }
    }
  }
  .trigger {
    font-size: 24px;
    line-height: 64px;
    color: #ffffffA6;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>