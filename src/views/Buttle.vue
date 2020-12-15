<template>
  <div id="buttle">
    <flash-message></flash-message>
    <div id="anime-area">
      <div id="box-left"></div>
      <pokemon-details
        @close="$router.go(-1)"
        v-if="modal"
        v-bind:pokemon="$store.state.pokedex[pokemon.id - 1]"
        v-bind:sprites="getSprites"
      >
      </pokemon-details>
      <div v-else id="pokemon">
        <font-awesome-icon
          icon="check-circle"
          :style="{ color: '#32CD32' }"
          v-if="isGeted"
        />
        <font-awesome-icon
          icon="star"
          :style="{ color: '#1199FF' }"
          v-if="shiny"
        />
        <transition mode="in-out" v-on:enter="enter">
          <img :key="1" v-if="show" id="img" :src="getSprites" />
          <img
            :key="2"
            v-else
            id="ball"
            :src="require(`@/assets/icon/ball.png`)"
          />
        </transition>
        <button @click="throwBall" v-if="show">ボールをなげる</button>
        <button @click="$router.go(-1)" v-if="show">にげる</button>
      </div>
      <div id="box-right"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import anime from "animejs";
import moment from "moment";
import mixin from "@/mixin";
import PokemonDetails from "@/components/PokemonDetails";
export default {
  data: function () {
    return {
      pokemon: null,
      species: null,
      englishName: this.$route.params.name,
      show: true,
      rateModify: 0,
      modal: false,
      name: null,
      genera: null,
      type: null,
      flavorText: null,
      isGeted: false,
      shiny: false,
      local: "ja-Hrkt",
    };
  },
  created() {
    this.isGeted = this.$store.getters.getCountByName(this.englishName) > 0;
    this.getPokemon();
    this.isShiny();
  },
  mounted() {
    this.visitingAnime();
  },
  mixins: [mixin],

  methods: {
    getPokemon: async function () {
      try {
        const result1 = await axios.get(
          `${this.$url}pokemon-species/${this.englishName}`
        );
        this.species = result1.data;

        const result2 = await axios.get(result1.data.varieties[0].pokemon.url);
        this.pokemon = result2.data;
        this.getI18nName();
        this.getI18nGenera();
        this.getTypes();
        this.getI18nFlavorText();
        this.habitat = this.species.pal_park_encounters[0].area.name;
      } catch {
        alert("通信エラーが発生しました。");
      }
    },

    isShiny: function () {
      if (Math.random() < 0.01) {
        this.shiny = true;
      }
    },

    getI18nName: function () {
      const names = this.species.names;
      const result = names.find((v) => v.language.name === this.local);
      this.name = result.name;
    },

    getI18nGenera: function () {
      const genera = this.species.genera;
      const result = genera.find((v) => v.language.name === this.local);
      this.genera = result.genus;
    },

    getTypes: async function () {
      const urls = [];
      for (const type of this.pokemon.types) {
        urls.push(type.type.url);
      }
      const types = await Promise.all(urls.map(axios.get));
      this.getI18nType(types);
    },

    getI18nType: function (types) {
      let result_types = "";
      for (const type of types) {
        const type_name = type.data.names.find(
          (v) => v.language.name === this.local
        );
        result_types += `《${type_name.name}》`;
      }
      this.type = result_types;
    },

    getI18nFlavorText: function () {
      const flavor_text_entries = this.species.flavor_text_entries;
      const result = flavor_text_entries.find(
        (v) => v.language.name === this.local
      );
      this.flavorText = result.flavor_text;
    },

    visitingAnime: function () {
      const animaTime = 2500;
      anime({
        targets: document.getElementById("box-right"),
        translateX: "120%",
        duration: animaTime,
        easing: "easeInCubic",
      });
      anime({
        targets: document.getElementById("box-left"),
        translateX: "-120%",
        duration: animaTime,
        easing: "easeInCubic",
      });
    },
    enter: function (dom) {
      if (dom.id === "ball") {
        const tl = anime.timeline();
        tl.add({
          targets: dom,
          translateX: [-100, 0],
          translateY: [50, -50],
          easing: "easeInOutCirc",
        })
          .add({ targets: dom, translateY: 100, easing: "easeInBack" })
          .add({
            targets: dom,
            rotate: 50,
          })
          .add({
            targets: dom,
            rotate: -50,
          })
          .add({
            targets: dom,
            rotate: 50,
            complete: this.canGet,
          });
      }
    },

    canGet: function () {
      const caputureRate = this.species.capture_rate + this.rateModify;
      const random = Math.floor(Math.random() * 100);
      if (random < caputureRate) {
        this.registPokedex();
        this.registRecentryGet();
        this.flash(`やったー！${this.name}をつかまえた！`, "success", {
          important: true,
          timeout: 1000,
          beforeDestroy: () => {
            this.modal = true;
          },
        });
      } else {
        this.show = true;
        // 捕獲に失敗するたびに補正をかける
        this.rateModify += 10;
      }
    },
    registPokedex: function () {
      const pokeData = {
        id: this.pokemon.id,
        name: this.name,
        englishName: this.englishName,
        genera: this.genera,
        type: this.type,
        height: this.pokemon.height,
        weight: this.pokemon.weight,
        flavorText: this.flavorText,
        habitat: this.habitat,
        like: false,
      };
      this.pokeData = pokeData;
      this.$store.commit("registPokedex", pokeData);
    },
    registRecentryGet: function () {
      const m = moment().format("YYYY-MM-DD HH:mm");
      const pokeData = {
        id: this.pokemon.id,
        name: this.name,
        englishName: this.englishName,
        date: m,
        habitat: this.habitat,
        shiny: this.shiny,
      };
      this.$store.commit("registRecentryGet", pokeData);
    },
    throwBall: function () {
      this.show = !this.show;
    },
  },
  components: {
    PokemonDetails,
  },
};
</script>
<style scoped>
@media screen and (max-width: 480px) {
  #box-left {
    width: 100vw;
    height: 100vw;
    background-color: black;
    z-index: 1;
  }
}

@media screen and (min-width: 481px) {
  #box-left,
  #box-right {
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 1;
  }
}

#ball {
  width: 20px;
  height: 20px;
}

#anime-area {
  display: flex;
}

#pokemon,
#img,
#ball {
  left: 0;
  right: 0;
  margin: auto;
}

#pokemon {
  position: absolute;
  padding-top: 70px;
}

#ball {
  position: absolute;
}
#img {
  display: block;
}

.v-enter-active {
  transition: all 0.3s ease;
}
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-enter,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
