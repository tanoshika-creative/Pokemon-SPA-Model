<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class='flex'>
            <div class="b">
              <div>
                {{ pokemon.id }}. {{ pokemon.name }}
                <font-awesome-icon 
                  icon="heart" 
                  v-bind:class="{ like: like, dislike: !like }" 
                  @click="toggleLike" 
                />
                <font-awesome-icon 
                  icon="star" 
                  v-bind:class="{ shiny: shiny, dislike: !shiny }" 
                  @click="toggleShiny" 
                  v-if="$store.getters.isGetedShiny(englishName)"
                />
              </div>
                <img v-bind:src="getSprites"/>
              </div>
            <div class="c">
              <div>{{ pokemon.type }}</div>
              <div>{{ pokemon.genera }}</div>
              <div>たかさ: {{ pokemon.height / 10 }}m</div>
              <div>おもさ: {{ pokemon.weight / 10 }}Kg</div>
            </div>
            <div class="d">
              <div>せいそくち: {{ $store.state.HABITAT[pokemon.habitat] }}</div>
              <div>つかまえたかず: {{ $store.getters.getCountByName(pokemon.englishName) }}</div>
            </div>
          </div>
          <div class="flavor_text">
            {{ pokemon.flavorText }}
          </div>
          <div>
            <a class="close" @click.self="$emit('close')">閉じる</a>
          </div>
        </div>
     </div>
    </div>
  </transition>
</template>

<script>
import mixin from '@/mixin'
export default {
  props: {
    pokemon: Object,
  },

  data: function() {
    return {
      like: this.$store.getters.isLike(this.pokemon.id),
      englishName: this.pokemon.englishName,
      shiny: false
    }
  },

  mixins: [mixin],

  methods: {
    toggleLike: function() {
      this.$store.commit('toggleLike', this.pokemon.id)
      this.like = !this.like
    },
    toggleShiny: function() {
      this.shiny = !this.shiny
    },
  },
}
</script>

<style lang="stylus">
.modal {
  font-weight: bold;
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 769px) {
    &-window {
      background: #fff;
      overflow: hidden;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 768px) and (max-width: 480px) {
    &-window {
      width: 80%;
      height: 70%;
      background: #fff;
      overflow-y: auto;
      border-radius: 5px;
    }
  }

  &-content {
    background-color: #D9E5FF;
    padding: 10px 20px;
  }

  &-footer {
    background: #ccc;
    padding: 10px;
    text-align: right;
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

@media screen and (min-width: 769px) {
  .flex{
    display:flex
  }

  .b{
    width: 30%
    background-color: #f2f2f2
    margin: 5px
    border-radius: 50%
  }

  .c {
    width: 40%
    background-color: #f2f2f2
    margin: 5px
    border-radius: 50%
  }

  .d {
    background-color: #f2f2f2
    margin: 5px
    width: 30%
    border-radius: 50%
  }
}
@media screen and (max-width: 768px) and (max-width: 480px) {

  .b{
    display: inline-block
    text-align: center
    width: 80%
    height: 50%
    background-color: #f2f2f2
    margin: 5px
    border-radius: 50%
  }
  .c, .d {
    margin-top: 5px
    margin-bottom: 5px
    width: 100%
    background-color: #f2f2f2
    border-radius: 50%
  }
}

.flavor_text {
  content: "\A";
  border: groove;
  background-color: #C0C0C0;
}

.close {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #FFF;
  background-image: linear-gradient(45deg, #d6d6d6 0%, #636363 100%);
  transition: .4s;
  border-bottom: solid 4px #627295;
}

.like {
  color: #E0245E;
}

.dislike {
  color: #808080;
}

.shiny {
  color: #1199FF
}

</style>