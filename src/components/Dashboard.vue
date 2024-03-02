<template>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>
<script lang="ts" setup>
import type { Ref } from 'vue';
import { ref, onMounted } from 'vue';
import {GET} from '../requests/api'


const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'age',
    dataIndex: 'age',
  },
  {
    title: 'address',
    dataIndex: 'address',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
  },
];

interface UserItem {
    key: string;
    name: string;
    age: number;
    address: string;
}

const dataSource: Ref<UserItem[]> = ref([]);

onMounted(async () => {
    const user_api = GET("/users")
    user_api.then((data: any) => {
    console.log(data);
    dataSource.value = data
})
})
</script>


<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>


