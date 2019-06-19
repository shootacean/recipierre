<template>
  <v-layout
    v-if="ingredients.length > 0"
    row
    wrap
    justify-space-around
    align-center
  >
    <IngredientUI
      v-for="(ingredient, index) in ingredients"
      :key="index"
      :name="ingredient.name"
    />
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import firebase from '~/plugins/firebase'
import IngredientUI from '~/components/ui/Ingredient.vue'

@Component({
  components: {
    IngredientUI
  }
})
export default class IngredientsPage extends Vue {
  ingredients: any[] = []

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
