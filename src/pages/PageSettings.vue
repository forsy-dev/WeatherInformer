<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="q-pa-lg" style="width: 400px">
      <div class="text-h6 text-center q-mb-md">Settings</div>

      <!-- Temperature Unit Selection -->
      <q-select
        v-model="storeSettings.settings.temperature"
        label="Select Temperature Unit"
        :options="temperatureOptions"
        filled
      />

      <!-- Distance Unit Selection -->
      <q-select
        v-model="storeSettings.settings.distance"
        label="Select Distance Unit"
        :options="distanceOptions"
        filled
      />
    </q-card>
  </q-page>
</template>

<script setup>
/*
imports
*/

import { useStoreSettings } from 'src/stores/storeSettings';

/*
stores
*/

const storeSettings = useStoreSettings();

// Options for temperature units and distance units
const temperatureOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];
const distanceOptions = ['km', 'miles'];
</script>

<style scoped>
.q-card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
