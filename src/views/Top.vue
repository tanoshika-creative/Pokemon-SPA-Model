<template>
  <div class="home">
    <h1>これはなに?</h1>
    <h3>ポケモンをつかまえてずかんをあつめるゲームです！</h3>
    <h1>ポケモンをつかまえるには?</h1>
    <h3>まずはいきたいばしょをえらびましょう！</h3>
    <h3>5つのエリアからえらべます！</h3>
    <div><img :src="require(`@/assets/howTo/select_field.png`)" /></div>
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
