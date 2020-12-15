const mixin = {
  computed: {
    getSprites() {
      if (this.shiny) {
        return require(`@/assets/shiny/${this.englishName}.png`);
      } else {
        return require(`@/assets/images/${this.englishName}.png`);
      }
    },
  },
};

export default mixin;
