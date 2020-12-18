<template>
  <div id="select-field">
    <h1 class="title">フィールドをクリックしよう!</h1>
    <ul>
      <li>
        <router-link to="/field/forest">
          <img
            :src="require(`@/assets/fields/icon/forest.png`)"
            width="200"
            height="200"
          />
        </router-link>
      </li>
      <li>
        <router-link to="/field/field">
          <img
            :src="require(`@/assets/fields/icon/field.png`)"
            width="200"
            height="200"
          />
        </router-link>
      </li>
      <li>
        <router-link to="/field/mountain">
          <img
            :src="require(`@/assets/fields/icon/mountain.png`)"
            width="200"
            height="200"
          />
        </router-link>
      </li>
      <li>
        <router-link to="/field/pond">
          <img
            :src="require(`@/assets/fields/icon/pond.png`)"
            width="200"
            height="200"
          />
        </router-link>
      </li>
      <li>
        <router-link to="/field/sea">
          <img
            :src="require(`@/assets/fields/icon/sea.png`)"
            width="200"
            height="200"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
#select-field {
  /* background: skyblue; */
  background-image: url("~@/assets/fields/background/wall_select.png");
  padding: 0;
  margin: 0;
}
img {
  border-radius: 50%;
  /* background: #333; */
  padding: 1.4em 0 0 0;
}

ul {
  display: flex;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  text-decoration: none;
  flex-wrap: wrap;
}

/* li {
  background-color: rgba(255, 255, 255, 0.1);
} */
@media screen and (max-width: 480px) {
  li {
    display: inline;
    width: 90%;
    height: 32%;
    /* background: #FFFFFF; */
    background-color: rgba(255, 255, 255, 0.1);
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
    /* background: #FFFFFF; */
    background-color: rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    margin-right: 0.5%;
    margin-top: 5px;
    border-radius: 10px;
  }
  li:nth-child(3n) {
    margin-right: 0.2%;
  }
  img:hover {
    /* transform: scale(1.5); */
    transform: scale(1.2);
    /* transition-duration: 0.3s; */
    transition-duration: 0.8s;
  }
  .title{
    margin-top: 0;
    padding: 1.6rem 1rem 1rem;
    color: #fff;
  }
}
</style>
