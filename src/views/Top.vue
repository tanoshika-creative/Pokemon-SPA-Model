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

    <h3>5つのエリアからえらべます！</h3>

    <div>
      <img class="description-screen-1" :src="require(`@/assets/howTo/select_field.png`)" />
    </div>
    <h3>ポケモンたちがでてきたらつかまえたいポケモンをタッチ！</h3>
    <div><img :src="require(`@/assets/howTo/encount.png`)" /></div>
    <h3>ボールをなげてつかまえましょう！</h3>
    <div><img :src="require(`@/assets/howTo/get.png`)" /></div>
    
    <h1>
      <router-link to="/adventure">いますぐポケモンをさがしにいく</router-link>
    </h1>
    <h1>ずかんのかんせいをめざそう！</h1>
    <div><img :src="require(`@/assets/howTo/pokedex.png`)" /></div>
    <footer>
      <a href="https://github.com/azukiazusa1/Pokomeon-get-Adventure">GitHub</a>
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
    background-color: rgb(51, 125, 44);
    color: #FFFFFF;
    padding: 1rem 0;
    margin: 0.4rem 0;
  }

  .description-screen-1 {
    width: 75%;
    height: auto;
  }
</style>