<template>
  <div id="search-box">
    <h3>Search</h3>
    <a id="close" @click="$emit('close')"
      ><img :src="require(`@/assets/icon/close.png`)" width="20" height="20"
    /></a>
    <div id="elements">
      <ul>
        <li>
          <label for="isRegisted">登録済み</label>
          <input type="checkbox" id="isRegisted" v-model="checkIsRegisted" />
        </li>
        <li>
          <label for="word">なまえ：</label>
          <input type="text" id="word" v-model="inputWord" />
        </li>
        <li>
          <label for="area">地方：</label>
          <select id="area" v-model="selectArea">
            <option value="">ぜんこく</option>
            <option value="kanto">カントー</option>
            <option value="johto">ジョウト</option>
            <option value="hohen">ホウエン</option>
            <option value="sinnoh">シンオウ</option>
          </select>
        </li>
        <li>
          <label for="type">タイプ：</label>
          <select id="type" v-model="selectType">
            <option value="">すべて</option>
            <option value="ノーマル">ノーマル</option>
            <option value="かくとう">かくとう</option>
            <option value="ひこう">ひこう</option>
            <option value="どく">どく</option>
            <option value="じめん">じめん</option>
            <option value="いわ">いわ</option>
            <option value="むし">むし</option>
            <option value="ゴースト">ゴースト</option>
            <option value="はがね">はがね</option>
            <option value="ほのお">ほのお</option>
            <option value="みず">みず</option>
            <option value="くさ">くさ</option>
            <option value="でんき">でんき</option>
            <option value="エスパー">エスパー</option>
            <option value="こおり">こおり</option>
            <option value="ドラゴン">ドラゴン</option>
            <option value="あく">あく</option>
            <option value="フェアリー">フェアリー</option>
          </select>
        </li>
        <li>
          <label for="habitat">せいそくち：</label>
          <select id="habitat" v-model="selectHabitat">
            <option value="">すべて</option>
            <option value="forest">もり</option>
            <option value="field">へいち</option>
            <option value="mountain">やま</option>
            <option value="pond">みずうみ</option>
            <option value="sea">うみ</option>
          </select>
        </li>
        <li>
          <label for="sort">ならびかえ</label>
          <select id="sort" v-model="selectSort">
            <option value="">ばんごうじゅん</option>
            <option value="1">五十音じゅん</option>
            <option value="2">ひくいじゅん</option>
            <option value="3">たかいじゅん</option>
            <option value="4">かるいじゅん</option>
            <option value="5">おもいじゅん</option>
          </select>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isRegisted: Boolean,
    word: String,
    area: String,
    type: String,
    sort: String,
  },
  computed: {
    checkIsRegisted: {
      get() {
        return this.isRegisted;
      },
      set(isRegisted) {
        this.$emit("update:isRegisted", isRegisted);
      },
    },
    inputWord: {
      get() {
        return this.word;
      },
      set(word) {
        this.$emit("update:word", word);
      },
    },
    selectArea: {
      get() {
        return this.area;
      },
      set(area) {
        this.$emit("update:area", area);
      },
    },
    selectLocal: {
      get() {
        return this.local;
      },
      set(local) {
        this.$emit("update:local", local);
      },
    },
    selectType: {
      get() {
        return this.type;
      },
      set(type) {
        this.$emit("update:type", type);
      },
    },
    selectHabitat: {
      get() {
        return this.habitat;
      },
      set(habitat) {
        this.$emit("update:habitat", habitat);
      },
    },
    selectSort: {
      get() {
        return this.sort;
      },
      set(sort) {
        this.$emit("update:sort", sort);
      },
    },
  },
};
</script>

<style scoped>
#search-box {
  position: fixed;
  background: #0e8fa1;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4);
  min-width: 270px;
  min-height: 270px;
  border-radius: 10px;
  font-weight: bold;
}

#close {
  position: fixed;
  top: 5%;
  right: 5%;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px;
}
</style>
