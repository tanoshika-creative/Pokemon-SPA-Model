<template>
  <div id="app">
    <header>
      <div id="pc">
        <nav>
          <ul>
            <li><router-link to="/">Top</router-link></li>
            <li><router-link to="/adventure">ポケモンをさがしにいく</router-link></li>
            <li><router-link to="/pokedex">ポケモンずかんをみる</router-link></li>
            <li><router-link to="/recentry-get">さいきんつかまえたポケモン</router-link></li>
            <li><router-link to="/trophy">トロフィー</router-link></li>
          </ul>
        </nav>
      </div>

      <div id="smart-phone">
        <Slide right noOverlay>
          <nav>
            <ul>
              <li><router-link to="/">Top</router-link></li>
              <li><router-link to="/adventure">さがす</router-link></li>
              <li><router-link to="/pokedex">ポケモンずかん</router-link></li>
              <li><router-link to="/recentry-get">であったポケモン</router-link></li>
              <li><router-link to="/trophy">トロフィー</router-link></li>
            </ul>
          </nav>
        </Slide>
      </div>
    </header>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    Slide
  }
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  #pc {
    display: none;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 5px;
    white-space: nowrap
  }

  nav a {
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
}

@media screen and (min-width: 480px) {
  #smart-phone {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0
  }

  li {
    padding: 5px 20px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 70px;
  background: #f8f8f8;
  z-index: 100
}

#content {
  /* padding-top: 70px */
  padding-top: 43px;

  /* height: 1000px; */
}

</style>
