<template>
  <v-layout column justify-start align-space-around>
    <template v-if="recipes.length === 0">
      <RecipeDetailUI :title="name" />
    </template>
    <template v-if="recipes.length > 0">
      <RecipeDetailUI
        v-for="recipe in recipes"
        :id="recipe.id"
        :key="recipe.id"
        :title="recipe.title"
        :description="recipe.description"
        :food="recipe.food"
      />
    </template>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import firebase from '~/plugins/firebase'
import RecipeDetailUI from '~/components/ui/RecipeDetail.vue'

@Component({
  components: {
    RecipeDetailUI
  }
})
export default class IngredientsDetailPage extends Vue {
  name: string = ''
  recipes: any[] = []

  created() {
    this.name = this.$route.params.name
  }

  mounted() {
    firebase
      .firestore()
      .collection('users')
      .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
      .collection('recipes')
      .where('title', '==', this.name)
      .get()
      .then(querySnapshot => {
        this.recipes = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            title: data.title,
            description: data.description,
            food: data.foods ? data.foods[0] : ''
          }
        })
      })
  }
}
</script>
