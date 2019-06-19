<template>
  <v-layout column justify-start align-space-around>
    <template v-if="ingredients.length === 0">
      <IngredientDetailUI :name="name" />
    </template>
    <template v-if="ingredients.length > 0">
      <IngredientDetailUI
        v-for="ingredient in ingredients"
        :id="ingredient.id"
        :key="ingredient.id"
        :name="ingredient.name"
        :buy-date="ingredient.buyDate"
      />
    </template>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import firebase from '~/plugins/firebase'
import IngredientDetailUI from '~/components/ui/IngredientDetail.vue'

@Component({
  components: {
    IngredientDetailUI
  }
})
export default class IngredientsDetailPage extends Vue {
  name: string = ''
  ingredients: any[] = []

  created() {
    this.name = this.$route.params.name
  }

  mounted() {
    firebase
      .firestore()
      .collection('users')
      .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
      .collection('ingredients')
      .where('name', '==', this.name)
      .get()
      .then(querySnapshot => {
        this.ingredients = querySnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            name: data.name,
            buyDate: data.buyDate
          }
        })
      })
  }
}
</script>
