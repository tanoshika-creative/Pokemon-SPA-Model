<template>
  <div id="encount-pokemon" :style="{backgroundImage: `url(${img})`}">
    <h2>{{ $store.state.HABITAT[this.name] }}</h2>
    <encount-pokemon v-if="pokemons" v-bind:pokemons="pokemons"></encount-pokemon>
    <button @click="reload">もっとさがしてみる</button>
    <router-link to="/adventure">ちがうばしょをさがしてみる</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import EncountPokemon from '@/components/EncountPokemon'

export default {
  data: function() {
    return {
      name: this.$route.params.name,
      pokemons: null,
      img: require(`@/assets/fields/background/${this.$route.params.name}.jpeg`)
    }
  },
  created() {
    this.getFieldPokemons()
  },
  methods: {
    getFieldPokemons: async function() {
      const url = `${this.$url}pal-park-area/${this.name}`
      const result = await axios.get(url)
      this.pokemons = result.data.pokemon_encounters
    },
    reload() {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  },
  components: {
    EncountPokemon
  }
}
</script>
<style>
#encount-pokemon {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
