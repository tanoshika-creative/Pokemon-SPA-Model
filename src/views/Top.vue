<template>
  <div class="home">

    <div class="box1">
      <h1>ようこそ</h1>
      <h3>ポケモンをつかまえてずかんをあつめるゲームです！</h3>
    </div>

    <div class="box2">
      <h1>ポケモンをつかまえるには?</h1>
      <h3>まずはいきたいばしょをえらびましょう！</h3>
    </div>

    <h3 class="description">5つのエリアからえらべます！</h3>
    <div>
      <img class="description-screen-1" :src="require(`@/assets/howTo/select_field.png`)" />
    </div>

    <h3 class="description">ポケモンたちがでてきたらつかまえたいポケモンをタッチ！</h3>
    <div>
      <img class="description-screen-1" :src="require(`@/assets/howTo/encount.png`)" />
    </div>

    <h3 class="description">ボールをなげてつかまえましょう！</h3>
    <div>
      <img class="description-screen-1" :src="require(`@/assets/howTo/get.png`)" />
    </div>
    
    <h1>
      <router-link class="getASAP" to="/adventure">いますぐポケモンをさがしにいく</router-link>
    </h1>
    
    <h3 class="description">ずかんのかんせいをめざそう！</h3>
    <div>
      <img class="description-screen-1" :src="require(`@/assets/howTo/pokedex.png`)" />
    </div>
   
    <footer>
      <a href="https://github.com/tanoshika-creative/Pokemon-SPA-Model">GitHub</a>
    </footer>
  </div>
</template>

<style scoped>
  .box1 {
    background-color: rgb(51, 125, 44);
    color: #FFFFFF;
    padding: 1rem 0;
    margin: 0.4rem 0;
  }
  .box2 {
    background-color: rgb(6, 38, 3);
    color: #FFFFFF;
    padding: 1rem 0;
    margin: 0.4rem 0;
  }

  .description-1 {
    padding: 5rem 0 0 0;
  }
  .description {
    padding: 10rem 0 0 0;
  }

  .description-screen-1 {
    width: 75%;
    height: auto;
    margin: 0 0 10rem 0;
  }

  .getASAP {
    background-color: green;
    color: #FFF;
    text-decoration: none;
    overflow: hidden;
    padding: 1.5rem 6rem;
  }
  .getASAP:hover {
    color: #333;
    /* opacity: 0.4; */
    background-color: rgb(160, 238, 160);
  }
</style>