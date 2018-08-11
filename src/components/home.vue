<template>
  <div class="hello">
    <p class="App-intro">Here you can find all of your most loved series.</p>
    <div><input v-model='seriesName' type="text" v-on:input="onSeriesInputChange"/></div>
    <p v-if="series.length===0 && seriesName.trim()===''">Please enter Series Name into the input.</p>
    <p v-else-if="!isFetching && series.length===0 && seriesName.trim()!==''">No TV Series have been found by this name.</p>
    <div v-else-if="isFetching">Loading...</div>
    <div v-else-if="!isFetching && series.length!==0">
      <SeriesList :list="series" />
    </div>
  </div>
</template>

<script>
import SeriesList from './SeriesList.vue'
export default {
  data () {
    return {
      series: [],
      seriesName: '',
      isFetching: false
    }
  },
  methods: {
    onSeriesInputChange (e) {
      this.isFetching = true
      fetch(`https://api.tvmaze.com/search/shows?q=${this.seriesName}`)
        .then(response => response.json())
        .then(json => {
          this.series = json
          this.isFetching = false
        })
    }
  },
  components: {
    SeriesList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
