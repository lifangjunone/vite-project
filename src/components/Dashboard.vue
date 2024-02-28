<template>
    <ul v-for="user in users.data">
        <li>{{ user.name }}</li>
        <li>{{ user.email }}</li>
    </ul>
</template>

<script setup lang="ts">
import {GET} from '../requests/api'
import { reactive, onMounted } from 'vue';

interface User {
    name: string;
    email: string;
}

interface UserList {
    data: Array<User>
}

const users = reactive<UserList>({
    data: []
})
onMounted(async () => {
    const users = GET("/users")
    users.then((data: any) => {
    console.log(data);
    
})
})

</script>