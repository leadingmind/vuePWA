<template lang="html">
  <div>
    <div v-if="show ==null">
      Loading....
    </div>
    <div class="head" v-else-if="show !=null && detail != null">
      <div class="single">
        <img :src="show.image.medium" alt="Show"/>
        <div>
          <h3>{{ show.name }}</h3>
          <div class="detail">
            <p>Premiered: {{ show.premiered }}</p>
            <p>Rating: {{ show.rating.average }}</p>
            <p>Seasons: {{ detail.length }}</p>
            <p>Episodes: {{ show._embedded.episodes.length }}</p>
          </div>
          <div class="summary" v-html="show.summary"></div>
        </div>
      </div>
      <ul class="series-item" v-if="detail != null">
        <li v-for="(props,index) in detail" :key="index">
          <router-link :to="'/season/'+props.id">
            <img v-if="props.image != undefined && props.image != null" :src="props.image.medium" alt=""/>
            <img v-else :style="{width: width + 'px', height: height + 'px'}" :src='def' alt="Not available"/>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Def from '../assets/default.jpg'
export default {
  data () {
    return {
      def: Def,
      show: null,
      detail: null,
      width: 210,
      height: 295

    }
  },
  props: ['id'],
  mounted () {
    fetch(`https://api.tvmaze.com/shows/${this.id}?embed=episodes`)
      .then(response => response.json())
      .then(json => {
        this.show = json
        console.log(this.show)
      })
    fetch(`https://api.tvmaze.com/shows/${this.id}/seasons`)
      .then(response => response.json())
      .then(json => {
        this.detail = json
        console.log(this.detail)
      })
  }
}
</script>

<style lang="css">
  .single{
    margin:0px 50px 0px 50px;
    display:flex;
    background-color:#eee;
    justify-content: space-around;
  }
  .head{
    display:flex;
     flex-direction: column;
  }
  .series-item{
    list-style-type: none;
    margin: auto;
  }
  .series-item li{
    float: left;
    margin: 5px;
  }
  .single img{
    flex-grow: 2;
    height: auto;
  }
  .single p{
    float:left;
    margin:10px;
  }
  .single div{
    flex-grow: 2;
  }
  .detail{
    display:flex;
    justify-content: space-around;
    background-color: #777;
  }
  .summary p{
    text-indent: 40px;
    text-align: justify;
  }

</style>
