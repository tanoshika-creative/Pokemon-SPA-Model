<template>
  <div>
    <div
      id="box"
      v-for="(pokemon, index) in selectEncountPokemons"
      :pokemon="pokemon"
      :key="index"
    >
      <img
        class="pokeImg"
        :src="require(`@/assets/sprites/${pokemon.pokemon_species.name}.png`)"
        @click="startButtle(pokemon.pokemon_species.name)"
      />
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  props: {
    pokemons: Array,
  },
  computed: {
    selectEncountPokemons: function () {
      const totalRate = this.pokemons.reduce((previous, current) => {
        return { rate: previous.rate + current.rate };
      });
      const encountPokemons = (pokemons) => {
        const encountPokemons = [];
        // 出現数 11~3匹の範囲で出現
        const appearanceNum = Math.floor(Math.random() * (11 - 3) + 3);
        for (let i = appearanceNum; i > 0; i--) {
          const encount = Math.random() * totalRate.rate;
          let searchPosition = 0.0;
          for (const pokemon of pokemons) {
            searchPosition += pokemon.rate;
            if (encount < searchPosition) {
              encountPokemons.push(pokemon);
              break;
            }
          }
        }
        return encountPokemons;
      };
      return encountPokemons(this.pokemons);
    },
  },
  methods: {
    startButtle(name) {
      this.$router.push({ name: "buttle", params: { name: name } });
    },
  },
  mounted() {
    const x = document.getElementById("box").clientWidth / 4;
    const y = document.getElementById("box").clientHeight * 2;
    const pokeImgs = document.getElementsByClassName("pokeImg");

    Object.keys(pokeImgs).forEach(function (key) {
      const start_x = anime.random(-x, x);
      const end_x = anime.random(-x, x);
      const start_y = anime.random(-y, y);
      const end_y = anime.random(-y, y);
      anime({
        targets: pokeImgs[key],
        translateX: [start_x, end_x],
        translateY: [start_y, end_y],
        easing: "linear",
        loop: true,
        direction: "alternate",
        duration: function () {
          return anime.random(500, 5000);
        },
      });
    });
  },
};
</script>
<style>
#box {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
</style>
