<template>
  <div class="main-container">
    <h2>さいきんつかまえたポケモン</h2>
    <div id="count">きょう：{{ todayCount }}</div>
    <div id="toDaycount">ごうけい：{{ count }}</div>
    <div class="mini-container">
      <ul v-for="(pokemon, index) in limitedRecentryGet" :key="index">
        <get-pokemon-list :pokemon="pokemon"></get-pokemon-list>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import anime from "animejs";
import GetPokemonList from "@/components/GetPokemonList";

export default {
  data: function () {
    return {
      count: 0,
      todayCount: 0,
    };
  },
  mounted() {
    this.setCount(this.recentryGetCount);
    this.setTodayCount(this.todayGetCount);
  },
  methods: {
    setCount(val) {
      const obj = { n: this.count };
      anime({
        targets: obj,
        n: val,
        round: 1,
        duration: 500,
        easing: "linear",
        update: () => {
          this.count = obj.n;
        },
      });
    },
    setTodayCount(val) {
      const obj = { n: this.todayCount };
      anime({
        targets: obj,
        n: val,
        round: 1,
        duration: 500,
        easing: "linear",
        update: () => {
          this.todayCount = obj.n;
        },
      });
    },
  },
  computed: mapGetters([
    "limitedRecentryGet",
    "recentryGetCount",
    "todayGetCount",
  ]),
  components: {
    GetPokemonList,
  },
};
</script>

<style scoped>
ul {
  color: #fff;
  font-weight: bold;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}
.main-container {
  background-color: seagreen;
}
h2 {
  margin-top: 0;
  padding: 1rem;
  color: #FFF;
}
#count, #toDaycount {
  color: #FFF;
}
.mini-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-content:space-around; */
  padding: 1rem 0 0 0;
}
ul {
  min-width: 10rem;
  min-width: 20rem;
}
.mini-container ul li {
  min-width: 20rem;
}
</style>
