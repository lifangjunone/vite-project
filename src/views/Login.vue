<template>
  <div class="login">
    <div class="content">
      <a-form
        :model="loginForm"
        name="basic"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="Username:"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="loginForm.username" />
        </a-form-item>
 
        <a-form-item
          label="Password:"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="loginForm.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
          <a-checkbox v-model:checked="loginForm.remember"
            >remember password</a-checkbox
          > 
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" html-type="submit">Login</a-button>
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
    router.push("/layout")
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
    rgb(241, 241, 245)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    padding: 12px 0px 8px 24px;
    padding-bottom: 0;
    width: 540px;
    border: 1px solid #fff;
    border-radius: 6px;
  }
}
</style>
