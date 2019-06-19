<template>
  <v-card class="ingredient" nuxt :to="'/ingredients/' + name">
    <v-card-title class="ingredient__title">
      {{ name }}
    </v-card-title>
  </v-card>
</template>

<style lang="stylus" scoped>
.ingredient
  margin 3% 0

  &__title
    font-weight bold

  &__detail
    padding 0
    list-style none
</style>

<script>
export default {
  props: {
    uuid: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
