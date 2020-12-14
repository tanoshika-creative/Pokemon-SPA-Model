<template>
  <li>
    <div>
      <h2>
        <font-awesome-icon v-if="shiny" icon='star' :style="{ color: '#1199FF' }" size="xs"/>
        {{ pokemon.name }}
      </h2>
    </div>
    <div><img :src="getSprites"/></div>
    <div>つかまえたひ：{{ pokemon.date }}</div>
    <div>つかまえたばしょ：{{ $store.state.HABITAT[pokemon.habitat] }}</div>
  </li>
</template>

<script>
import mixin from '@/mixin'
export default {
  props: {
    pokemon: Object,
  },

  data: function() {
    return {
      shiny: this.pokemon.shiny,
      englishName: this.pokemon.englishName
    }
  },
  
  mixins:[mixin]
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  li{
    display: inline;
    width:90%;
    height:32%;
    background: #333;
    box-sizing: border-box;
    margin-right:0.5%;
    margin-top:5px;
    border-radius: 10px
  }
}
@media screen and (min-width: 481px){
  li{
    display: inline;
    width:32%;
    min-height: 260px;
    background: #333;
    box-sizing: border-box;
    margin-right:0.5%;
    margin-top:5px;
    border-radius: 10px
  }
  li:nth-child(3n){
    margin-right: 0.2%;
  }
}
</style>