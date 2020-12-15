<template>
  <div>
    <h2>さいきんつかまえたポケモン</h2>
    <div id="count">きょう：{{ todayCount }}</div>
    <div id="toDaycount">ごうけい：{{ count }}</div>
    <ul v-for="(pokemon, index) in limitedRecentryGet" :key="index">
      <get-pokemon-list :pokemon="pokemon"></get-pokemon-list>
    </ul>
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
</style>
