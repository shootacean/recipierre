<template>
  <v-card class="recipe">
    <v-card-title class="ingredient__title">
      <h3>{{ title }}</h3>
    </v-card-title>
    <v-card-text>
      <p class="recipe__description">
        {{ description }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" flat nuxt :to="'/recipes/' + title">
        詳しく見る
      </v-btn>
      <v-spacer />
      <v-btn color="primary" nuxt to="/today">今日作る</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="stylus" scoped>
.recipe
  margin 3% 2%

  &__title
    font-weight bold

  &__detail
    text-wrap normal

  &__detail
    padding 0
    list-style none
</style>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
