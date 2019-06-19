<template>
  <v-layout v-if="recipes.length > 0" row wrap justify-center align-center>
    <recipe
      v-for="(recipe, index) in recipes"
      :key="index"
      :title="recipe.title"
      :description="recipe.description"
    >
    </recipe>
  </v-layout>
</template>

<script>
import firebase from '~/plugins/firebase'
import Recipe from '~/components/ui/recipe.vue'

export default {
  components: {
    Recipe
  },
  data() {
    return {
      recipes: []
    }
  },
  mounted() {
    firebase
      .firestore()
      .collection('users')
      .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
      .collection('recipes')
      .get()
      .then(querySnapshot => {
        this.recipes = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            title: data.title,
            description: data.description
          }
        })
      })
  }
}
</script>
