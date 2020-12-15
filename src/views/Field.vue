<template>
  <div id="encount-pokemon" :style="{ backgroundImage: `url(${img})` }">
    <h2 class="place">{{ $store.state.HABITAT[this.name] }}</h2>
    <encount-pokemon
      v-if="pokemons"
      v-bind:pokemons="pokemons"
    ></encount-pokemon>
    <button class="find-more-btn" @click="reload">もっとさがしてみる</button>
    <router-link class="button-style" to="/adventure">ちがうばしょをさがしてみる</router-link>
  </div>
</template>

<script>
import axios from "axios";
import EncountPokemon from "@/components/EncountPokemon";

export default {
  data: function () {
    return {
      name: this.$route.params.name,
      pokemons: null,
      img: require(`@/assets/fields/background/${this.$route.params.name}.jpeg`),
    };
  },
  created() {
    this.getFieldPokemons();
  },
  methods: {
    getFieldPokemons: async function () {
      const url = `${this.$url}pal-park-area/${this.name}`;
      const result = await axios.get(url);
      this.pokemons = result.data.pokemon_encounters;
    },
    reload() {
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
    },
  },
  components: {
    EncountPokemon,
  },
};
</script>
<style>
#encount-pokemon {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.find-more-btn {
  /* 文字サイズを1.4emに指定 */
  font-size: 1.4em;

  /* 文字の太さをboldに指定 */
  font-weight: bold;

  /* 縦方向に10px、
    * 横方向に30pxの余白を指定 */
  padding: 10px 30px;

  /* 文字色を白色に指定 */
  color: #fff;

  /* ボーダーをなくす */
  border-style: none;

  /* ボタンの影の指定
    * 影の横幅を2px
    * 縦長を2px
    * ぼかしを3px
    * 広がりを1px
    * 色を#666（グレー）に指定 */
  box-shadow: 2px 2px 3px 1px #666;
  -moz-box-shadow: 2px 2px 3px 1px #666;
  -webkit-box-shadow: 2px 2px 3px 1px #666;

  /* テキストの影の指定
    * 影の横幅を1px
    * 縦長を1px
    * ぼかしを2px
    * 色を#000（黒）に指定 */
  text-shadow: 1px 1px 2px #000;

  /* グラデーションの指定 */
  background: -moz-linear-gradient(bottom, #36d, #248 50%, #36d);
  background: -webkit-gradient(linear, left bottom, left top, from(#36d), color-stop(0.5, #248), to(#36d));

  /* 角丸の指定 */
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;

  /* 透明度を40%に指定 */
  opacity: 0.6;
}

.find-more-btn:hover {
  /* 透明度を10%に指定 */
  opacity: 0.9;
}

/*  */

.button-style {
  font-size: 18px;
  display: inline-block;
  /* padding: 0.4em 1em 0.2em; */
  padding: 0.6em 1.2em 0.4em;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  border: #ffffff dashed 1px;
  box-shadow: 0 0 0 0.2em rgb(17, 56, 148);
  border-radius: 2.5px;
  background-color: rgb(17, 56, 148);
  cursor: pointer;
}

.place {
  background-color: rgba(235, 235, 235, .45);
  padding: 1rem 1rem;
}
</style>
