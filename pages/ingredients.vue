<template>
  <v-layout
    v-if="ingredients.length > 0"
    row
    wrap
    justify-space-around
    align-center
  >
    <Ingredient
      v-for="(ingredient, index) in ingredients"
      :key="index"
      :title="ingredient.name"
    />
  </v-layout>
</template>

<script lang="js">
import firebase from '~/plugins/firebase'

import Ingredient from '~/components/ui/Ingredient.vue'

export default {
  components: {
    Ingredient
  },
  data() {
    return {
      ingredients: {
        type: Array,
        default: []
      }
    }
  },
  mounted() {
    firebase
      .firestore()
      .collection('users')
      .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
      .collection('ingredients')
      .get()
      .then(querySnapshot => {
        this.ingredients = querySnapshot.docs.map(doc => {
          return doc.data()
        })
      })
  }
}
</script>
