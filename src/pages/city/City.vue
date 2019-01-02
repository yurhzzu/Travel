<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
      <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
      // use XMLHttpRequest
      /* if (window.XMLHttpRequest) {
        console.log('support XMLHttpRequest')
        const xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function () {
          console.log(xmlhttp.response)
        }
        xmlhttp.open('GET', '/api/city.json', true)
        xmlhttp.send()
      } */
    },
    getCityInfoSucc: function (response) {
      response = response.data
      if (response.ret && response.data) {
        this.cities = response.data.cities
        this.hotCities = response.data.hotCities
      }
    },
    handleLetterChange: function (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
