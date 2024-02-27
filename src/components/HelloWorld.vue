<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router'

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const backendBaseUrl = 'http://localhost:5000';
axios.defaults.baseURL = backendBaseUrl
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const router = useRouter();
const onFinish = (values: any) => {
  console.log('Success:', values);
  axios.post('/login', values)
  .then(response => {
    console.log(response.data)
    const _data = response.data
    if (_data.code == 1000) {
      console.log(_data.data)
      router.push('/dashboard');
    }else {
      alert('Login failed. Please check your username and password.');
    }
  })
  .catch(error => {
    console.log(error)
  })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

