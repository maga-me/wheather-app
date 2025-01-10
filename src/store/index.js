import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    apiKey: "37ee29d638d15088dcc827648a067e55",
    weatherDB: null
  },
  getters: {
  },
  mutations: {
    setWeather(state, weatherInfo) {
      state.weatherDB = weatherInfo
    }
  },
  actions: {
    async getWeather({state, commit}, city) {
      try {
        let weather = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
        // console.log(weather.data[0]);
        const {lat, lon, local_names} = weather.data[0]
        // console.log(weather.data[0]);
        // if (local_names.ru.toLowerCase() == city.toLowerCase() || local_names.en.toLowerCase() == city.toLowerCase()) {
          let weatherInfo = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
          // console.log(weatherInfo.data, weather.data[0]);
          let allInfo = {...weatherInfo.data, name: city}
          commit('setWeather', allInfo)
          console.log(allInfo);
        // }
      } catch (error) {
        console.error(`Not information ${error}`);
      }
    }
  },
  modules: {
  }
})
