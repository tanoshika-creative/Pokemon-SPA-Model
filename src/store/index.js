import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const initialState = {
  pokedex: Array.from(new Array(493).fill({})),
  recentryGet: [],
  filterQuery: {},
  AREA: {
    kanto: { start: 0, end: 151 },
    johto: { start: 151, end: 250 },
    hohen: { start: 251, end: 385 },
    sinnoh: { start: 386, end: 492 },
  },
  HABITAT: {
    forest: "もり",
    field: "へいち",
    mountain: "やま",
    pond: "みずうみ",
    sea: "うみ",
  },
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    registPokedex(state, pokeData) {
      if (!state.pokedex[pokeData.id - 1].hasOwnProperty("id")) {
        state.pokedex[pokeData.id - 1] = pokeData;
      }
    },
    setFilterQuery(state, filterQuery) {
      state.filterQuery = { ...filterQuery };
    },
    registRecentryGet(state, pokeData) {
      state.recentryGet.unshift(pokeData);
    },
    toggleLike(state, id) {
      const found = state.pokedex.find((e) => e.id === id);
      state.pokedex[id - 1].like = !found.like;
    },
  },
  getters: {
    filteredPokedex(state) {
      let data = state.pokedex;
      // 地方で絞り込み
      if (state.filterQuery.area) {
        data = data.slice(
          state.AREA[state.filterQuery.area].start,
          state.AREA[state.filterQuery.area].end
        );
      }

      // 登録ずみのみ
      if (state.filterQuery.isRegisted) {
        data = data.filter((v) => v.id);
      }

      // 名前検索
      if (state.filterQuery.word) {
        const reg = new RegExp(state.filterQuery.word, "y");
        data = data.filter((v) => v.name && v.name.match(reg));
      }

      // タイプ検索
      if (state.filterQuery.type) {
        const reg = new RegExp(state.filterQuery.type);
        data = data.filter((v) => v.type && v.type.match(reg));
      }

      // 生息地検索
      if (state.filterQuery.habitat) {
        data = data.filter(
          (v) => v.habitat && v.habitat === state.filterQuery.habitat
        );
      }

      // 並び替え
      if (state.filterQuery.sort) {
        data = data.filter((v) => v.id);
        switch (state.filterQuery.sort) {
          case "1": // 五十音順
            data.sort((prev, next) => {
              if (prev.name < next.name) {
                return -1;
              }
              if (prev.name > next.name) {
                return 1;
              }
              return 0;
            });
            break;

          case "2": // ひくい
            data.sort((prev, next) => {
              return prev.height - next.height;
            });
            break;

          case "3": // たかい
            data.sort((prev, next) => {
              return next.height - prev.height;
            });
            break;

          case "4": // おもい
            data.sort((prev, next) => {
              return prev.weight - next.weight;
            });
            break;

          case "5": // 軽い順
            data.sort((prev, next) => {
              return next.weight - prev.weight;
            });
            break;

          default:
            break;
        }
      }

      return data;
    },
    registPokedexCount: (state, getters) =>
      getters.filteredPokedex.filter((v) => v.id).length,
    registPokedexCountAll: (state, getters) => getters.filteredPokedex.length,
    isLike: (state) => (id) => state.pokedex[id - 1].like,
    limitedRecentryGet: (state) => state.recentryGet.slice(0, 20),
    recentryGetCount: (state) => state.recentryGet.length,
    todayGetCount: (state) => {
      const today = moment().startOf("days");
      return state.recentryGet.filter((v) => moment(v.date).isAfter(today))
        .length;
    },
    getByName: (state) => (englishName) => {
      return state.recentryGet.filter((v) => v.englishName === englishName);
    },
    getCountByName: (state, getters) => (englishName) => {
      return getters.getByName(englishName).length;
    },
    isGetedShiny: (state, getters) => (englishName) => {
      return getters.getByName(englishName).some((v) => v.shiny === true);
    },
  },
  plugins: [createPersistedState()],
});
