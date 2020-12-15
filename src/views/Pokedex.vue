<template>
  <div id="pokedex">
    <h2>
      つかまえたかず：{{ registPokedexCount }} / {{ registPokedexCountAll }}
    </h2>
    <search-box
      id="search-box"
      v-if="searchBox"
      v-bind:isRegisted.sync="filterQuery.isRegisted"
      v-bind:word.sync="filterQuery.word"
      v-bind:area.sync="filterQuery.area"
      v-bind:type.sync="filterQuery.type"
      v-bind:habitat.sync="filterQuery.habitat"
      v-bind:sort.sync="filterQuery.sort"
      @close="searchBox = false"
    ></search-box>
    <div @click="searchBox = false">
      <font-awesome-icon
        icon="search"
        id="search-btn"
        @click.stop.prevent="searchBox = !searchBox"
        size="4x"
      />
      <div id="main">
        <ul>
          <pokemon-index
            v-for="(pokemon, index) in filteredPokedex"
            v-bind:pokemon="pokemon"
            v-bind:index="
              index +
              (filterQuery.area ? $store.state.AREA[filterQuery.area].start : 0)
            "
            :key="index"
          ></pokemon-index>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PokemonIndex from "@/components/PokemonIndex.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "app",
  data: function () {
    return {
      searchBox: false,
      count: 0,
      word: null,
      type: null,
      filterQuery: {
        isRegisted: false,
        word: "",
        area: "",
        type: "",
        habitat: "",
        sort: "",
      },
    };
  },
  created() {
    this.$store.commit("setFilterQuery", this.filterQuery);
  },
  methods: {
    handleChangeQuery() {
      this.$store.commit("setFilterQuery", this.filterQuery);
    },
  },
  computed: {
    ...mapGetters([
      "filteredPokedex",
      "registPokedexCount",
      "registPokedexCountAll",
    ]),
  },
  watch: {
    filterQuery: {
      handler: function () {
        this.handleChangeQuery();
      },
      deep: true,
    },
  },
  components: {
    SearchBox,
    PokemonIndex,
  },
};
</script>

<style scoped>
h2 {
  color: #fff;
  padding: 1.5rem 0 0 0;
}
#pokedex {
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  clear: both;
  /* background: #F35F57; */
  background: #222584;
}

#pokedex ul {
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  text-decoration: none;
  flex-wrap: wrap;
}

#main {
  padding-top: 60px;
}

#next {
  cursor: pointer;
  text-align: center;
  font-size: 25px;
}
#empty {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
}

#search-btn {
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
}

p {
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
</style>
