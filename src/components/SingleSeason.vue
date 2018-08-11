<template lang="html">
  <div>
    <div v-if="season==null">
      Loading...
    </div>
    <div v-else-if="season !=null && season[0] !=undefined" className="head">
      <div>Season {{ season[0].season }}</div>
      No. of episodes: {{ season.filter(e=>{if(e.number!==null) return e}).length }}
      <ul>
        <li class="singleepisode" v-for="(ep,index) in season" :key="index">
          <div class="image">
            <img v-if="ep.image != undefined && ep.image != null" :src="ep.image.medium" alt=""/>
              <img v-else-if="ep.image == null" :src='def' alt=""/>
            <h3 v-if="ep.number!=null">{{ ep.number }}. {{ ep.name }}</h3>
          </div>
          <div class="desc" v-html="ep.summary"></div>
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
      season:null
    }
  },
  props: ['id'],
  mounted (){
    const id = this.id;
    fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
      .then(response=>response.json())
      .then(json=> {
        this.season=json
        console.log(this.season);
      })
  }
}
</script>

<style lang="css">
  .singleepisode {
    display: flex;
    flex-direction: row;
    margin: 5px auto 5px auto;
    background-color: #bbb;
    border-radius: 5px;

  }
  ul{
    padding-left: 0;
  }
  .image{
    list-style-type: none;
    flex-grow: 1;
    width: 250px;
    height: auto;
    margin: auto;
  }
  .image img{
    width: inherit;
    height: inherit;
  }
  .image h3{
    margin: 0 auto 0 auto;
    background: #ddd;
    border-radius: 10px;
    width: 68%;
    padding: 2px 5px 2px 5px;
  }
  .desc{
    flex-grow: 3;
    width: 666.3px;
  }
  .singleepisode p{
    padding: 5px 20px 5px 20px;
    text-align: justify;
  }

</style>
