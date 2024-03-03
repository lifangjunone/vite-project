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
        <span class="icon iconfont" v-if="collapsed1">&#xeb68;</span>
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
import { reactive, ref } from 'vue';
import type { MenuTheme } from 'ant-design-vue';
import { MenuProps } from 'ant-design-vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { HandleHorizontalHook, HandleIconHook } from '../hooks/handle_icon';


// vertical menu config
const collapsed1 = ref<boolean>(false);
const theme = ref<MenuTheme>('light');
const isActive = ref<boolean>(false)
const changeTheme = (checked: boolean) => {
  theme.value = checked ? 'dark' : 'light';
  isActive.value = !isActive.value
  
};
const verticalMenu = HandleIconHook(sessionStorage.getItem('verticalMenu') || "[]")
console.log(verticalMenu);

const itemsVertical = reactive(verticalMenu);
const state = reactive({
  collapsed: false,
  selectedKeys: [verticalMenu[0]['key']],
  openKeys: [verticalMenu[1]['key']],
});

// horizontal menu config
const horizontalMenu = HandleHorizontalHook(sessionStorage.getItem('horizontalMenu') || "[]")
const current = ref<string[]>([horizontalMenu[1]['key']]);
const itemsHorizontal = ref<MenuProps['items']>(horizontalMenu);
  
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