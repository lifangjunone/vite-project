<template>
  <div class="login">
    <div class="content">
      <a-form
        :model="loginForm"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 18 }"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="账号"
          name="username"
          :rules="[{ required: true, message: '请输入账号!' }]"
        >
          <a-input v-model:value="loginForm.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="loginForm.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
          <a-checkbox v-model:checked="loginForm.remember"
            >记住密码</a-checkbox
          > 
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { LoginForm } from '../interfaces/login';
import {LoginAPI } from '../apis/login'
import router from '../routers/router';


const loginForm = reactive<LoginForm>({
  username: "",
  password: "",
  remember: false
})

const onFinish = async () => {
  const isSuccess = await LoginAPI(loginForm)
  if (isSuccess) {
    router.push("/dashboard")
  }
}

</script>

<style lang="scss" , scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgb(114, 114, 202),
    rgb(202, 202, 219)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    padding: 20px;
    padding-bottom: 0;
    width: 500px;
    border: 1px solid #fff;
    border-radius: 6px;
  }
}
</style>../requests/request
