<template lang="html">
  <div>
    <ul class="series-list">
        <li v-for="(series,index) in list" :key="index">
          <router-link :to="'/series/'+series.show.id">
            <div class="searchlist">
                 <img v-if="series.show.image!==null && series.show.image!==undefined" :src="series.show.image.medium" alt="" />
                 <img v-else-if="series.show.image===null" style="width:71.18" src=require(../assets/default.jpg) alt="" />
              <p class="status" >{{series.show.status}}</p>
              <h5>{{series.show.name}}</h5>
            </div>
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="css">
  .series-list{
    list-style-type: none;
    padding-left: 0;
  }
  .series-list a{
    text-decoration: none;
  }
  .series-list li{
    margin: 3px auto 3px auto;
    width: 250px;
  }
  .searchlist{
    display: flex;
    background: #ccc;
    padding: 5px;
    border-radius: 3px;
  }

  .searchlist img{
    float: left;
    height: 100px;
    width: auto;
  }
  .searchlist h5{
    position: relative;
    float: left;
    margin: auto;
    vertical-align: middle;
    width: 150px;
    padding: 2px;
    left: -40px;
  }
  .status{
    position: relative;
    width: 80px;
    height: 23px;
    font-size: 9px;
    border-radius: 14px;
    padding: 3px;
    bottom: -62px;
    left: -31px;
    background: purple;
    color: #eee;
  }

</style>
