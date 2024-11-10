import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import { LocalStorage } from "quasar";

export const useStoreSettings = defineStore('settings', () => {
  /*
  state
  */

  const settings = reactive({
    temperature: 'Celsius',
    distance: 'km'
  })

  /*
  watch settings
  */

  watch(settings, () => {
    saveSettings()
  })

  /*
  actions
  */

  const saveSettings = () => {
    LocalStorage.set('settings', settings)
  }

  const loadSettings = () => {
    const savedSettings = LocalStorage.getItem('settings');

    if (saveSettings) Object.assign(settings, savedSettings)
  }

  /*
  return
  */

  return {

    // state
    settings,

    // getters
    
    // actions
    loadSettings
  }
})
