<template>
  <v-card class="ingredient">
    <v-card-title class="ingredient__title">
      {{ title }}
    </v-card-title>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" flat nuxt to="/recipes">レシピを見る</v-btn>
    </v-card-actions>
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
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
