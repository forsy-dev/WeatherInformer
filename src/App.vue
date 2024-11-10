<!-- App.vue or MainLayout.vue -->
<template>
  <q-layout>
    <router-view />
  </q-layout>
</template>

<script setup>
/*
imports
*/

import { onMounted } from 'vue';
import { useStoreSettings } from './stores/storeSettings';

/*
stores
*/

const storeSettings = useStoreSettings()

onMounted(() => {
  storeSettings.loadSettings()
})
</script>
