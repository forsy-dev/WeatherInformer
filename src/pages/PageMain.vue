<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card class="q-pa-lg" style="width: 400px">
      <div class="text-h6 text-center q-mb-md">Weather Query</div>
      
      <q-select
        v-model="selectedCity"
        label="Select City"
        :options="cities"
        option-label="name"
        option-value="name"
        filled
        clearable
      />
      
      <q-btn class="q-mt-md" label="Get Weather" @click="getWeather" color="primary" 
      :disable="!selectedCity"/>
      
      <q-spinner v-if="loading" color="primary" />

      <div v-if="weatherData" class="q-mt-md text-center">
        <div class="text-h6">{{ weatherData.name }}, {{ weatherData.sys.country }}</div>
        <div>{{ weatherData.weather[0].description }}</div>

        <!-- Temperature section -->
        <div class="q-mt-md">
          <div>Temperature: {{ formatTemperature(weatherData.main.temp) }}</div>
          <div>Feels Like: {{ formatTemperature(weatherData.main.feels_like) }}</div>
          <div>Min Temperature: {{ formatTemperature(weatherData.main.temp_min) }}</div>
          <div>Max Temperature: {{ formatTemperature(weatherData.main.temp_max) }}</div>
        </div>

        <!-- Weather data -->
        <div class="q-mt-md">
          <div>Pressure: {{ weatherData.main.pressure }} hPa</div>
          <div>Humidity: {{ weatherData.main.humidity }}%</div>
          <div>Visibility: {{ formatDistance(weatherData.visibility) }}</div>
          <div>Wind Speed: {{ weatherData.wind.speed }} m/s</div>
          <div>Wind Direction: {{ weatherData.wind.deg }}°</div>
          <div>Cloud Coverage: {{ weatherData.clouds.all }}%</div>
        </div>
      </div>


      <q-banner v-if="errorMessage" class="q-mt-md" type="negative">{{ errorMessage }}</q-banner>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, inject } from 'vue';
import axios from 'axios';

const cities = ref(['London', 'Paris', 'New York', 'Tokyo']);
const selectedCity = ref('');
const weatherData = ref(null);
const errorMessage = ref('');
const loading = ref(false);

const settings = inject('settings');

const getWeather = () => {
  if (!selectedCity.value) {
    errorMessage.value = "Please select a city";
    return;
  }

  loading.value = true;
  errorMessage.value = '';

  const apiKey = '28703904d21af168f710521fc040cbde';
  const cityName = selectedCity.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  axios.get(url)
    .then((response) => {
      weatherData.value = response.data;
      errorMessage.value = '';
    })
    .catch((error) => {
      errorMessage.value = "Could not retrieve data. Check the city name.";
      weatherData.value = null;
    })
    .finally(() => {
      loading.value = false;
    });
};

const formatTemperature = (temp) => {
  switch (settings.temperature) {
    case 'Celsius':
      return `${Math.round(temp - 273.15)}°C`;
    case 'Fahrenheit':
      return `${Math.round((temp - 273.15) * 9/5 + 32)}°F`;
    case 'Kelvin':
      return `${Math.round(temp)}K`;
  }
};

const formatDistance = (distance) => {
  if (settings.distance === 'miles') {
    return `${(distance / 1609.34).toFixed(2)} miles`;
  }
  return `${(distance / 1000).toFixed(2)} km`;
};

</script>

<style scoped>
.q-card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
