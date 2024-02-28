<template>
  <a-space direction="vertical" style="width: 100%">
    <a-alert 
    v-for="alert in filteredAlert"
    :key="alert.message" 
    :message="alert.message" 
    :description="alert.description" 
    :type="alert.type" 
    :show-icon="alert.showIcon"
    >
    <template #icon><smile-outlined /></template>
    </a-alert>
  </a-space>
</template>
<script lang="ts" setup>
import { SmileOutlined } from '@ant-design/icons-vue'
import { ref, computed, defineProps } from 'vue'

interface alterType {
  type: string;
}

interface AlertItem {
  message: string;
  description?: string;
  type: string;
  showIcon: boolean;
}

const props = defineProps<alterType>()

const alerts = ref<AlertItem[]>([
  { message: 'Success Tips', description: 'This is a successful .', type: 'success', showIcon: true },
  { message: 'Informational Notes', description: 'This is a informations', type: 'info', showIcon: true },
  { message: 'Warning', description: 'This is a warning notice', type: 'warning', showIcon: true },
  { message: 'Error', description: 'This is an error message', type: 'error', showIcon: true },
]);

const filteredAlert = computed(() => {
  return alerts.value.filter(alert => alert.type === props.type)
})

/*
useage example
<template>
  <div>
    <h1>Other Component</h1>
    <!-- 显示错误警报 -->
    <CommonAlert :type="'error'" />
  </div>
</template>
<script lang="ts" setup>
import CommonAlert from '@/components/CommonAlert.vue'
</script>
*/
</script>