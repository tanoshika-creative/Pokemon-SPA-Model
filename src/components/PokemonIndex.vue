<template>
  <li class="pokemon-index" v-if="pokemon.hasOwnProperty('id')">
    <h3 id="poke-name" @click="openModal">
      {{ pokemon.id }}. {{ pokemon.name }}
    </h3>
    <span class="circle">
      <img
        id="poke-img"
        :src="require(`@/assets/images/${this.pokemon.englishName}.png`)"
      />
    </span>
    <div>{{ pokemon.type }}</div>
    <div>{{ pokemon.genera }}</div>
    <div>たかさ: {{ pokemon.height / 10 }}m</div>
    <div>おもさ: {{ pokemon.weight / 10 }}Kg</div>
    <div>
      <pokemon-details
        v-if="modal"
        @close="closeModal"
        v-bind:pokemon="pokemon"
        v-bind:sprites="
          require(`@/assets/images/${this.pokemon.englishName}.png`)
        "
      >
      </pokemon-details>
    </div>
  </li>
  <li v-else>
    <h3>{{ index + 1 }}. ????</h3>
    <span>
      <img :src="require(`@/assets/images/none.jpg`)" />
    </span>
    <div>《??》</div>
    <div>??ポケモン</div>
    <div>たかさ: ??m</div>
    <div>おもさ: ??Kg</div>
  </li>
</template>

<script>
import PokemonDetails from "@/components/PokemonDetails.vue";

export default {
  props: {
    pokemon: Object,
    index: Number,
  },
  data: function () {
    return {
      modal: false,
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
  components: {
    PokemonDetails,
  },
};
</script>

<style scoped>
@media screen and (max-width: 480px) {
  li {
    display: inline;
    width: 90%;
    height: 32%;
    background: #ffffff;
    box-sizing: border-box;
    margin-right: 0.5%;
    margin-top: 5px;
    border-radius: 10px;
  }
}
@media screen and (min-width: 481px) {
  li {
    display: inline;
    width: 32%;
    min-height: 260px;
    background: #ffffff;
    box-sizing: border-box;
    margin-right: 0.5%;
    margin-top: 5px;
    border-radius: 10px;
  }
  li:nth-child(3n) {
    margin-right: 0.2%;
  }
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
}
#poke-img,
#pokeName {
  cursor: pointer;
}

#poke-img:hover {
  transition-duration: 0.3s;
  transform: scale(1.5);
  transition-duration: 0.3s;
}
.pokemon-index {
  text-align: center;
}

#poke-name {
  text-decoration: underline;
}
</style>
