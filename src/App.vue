<script setup lang="ts">
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import BaseSidebar from '@/components/BaseSidebar.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseModal from '@/components/BaseModal.vue'
const showModal = ref(false)
</script>

<template>
  <div class="wrapper flex">
    <BaseModal v-if="showModal" @close-modal="showModal = false"/>
    <BaseSidebar />
    <div class="flex flex-col w-full">
      <BaseHeader @openModal="showModal = true"/>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
