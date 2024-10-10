<!-- App.vue or MainLayout.vue -->
<template>
  <q-layout>
    <router-view />
  </q-layout>
</template>

<script setup>
import { reactive, watch, provide } from 'vue';

// Load settings from localStorage if available, otherwise use defaults
const savedSettings = localStorage.getItem('settings');
const settings = reactive(savedSettings ? JSON.parse(savedSettings) : {
  temperature: 'Celsius', // default value for temperature
  distance: 'km',         // default value for distance
});

// Provide the settings object to all child components
provide('settings', settings);

// Watch for changes in settings and update localStorage
watch(settings, (newSettings) => {
  localStorage.setItem('settings', JSON.stringify(newSettings));
}, { deep: true });
</script>
