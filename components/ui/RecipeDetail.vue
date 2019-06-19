<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-card class="recipe-detail">
    <v-card-title v-if="title.length > 0">
      {{ title }}
    </v-card-title>
    <v-card-text class="recipe-detail__content">
      <v-form>
        <v-text-field
          v-model="newTitle"
          label="レシピ名"
          require
        ></v-text-field>
        <v-text-field
          v-model="description"
          label="レシピ説明"
          require
        ></v-text-field>
        <v-text-field v-model="food" label="材料" require></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-flex row>
        <v-btn v-if="id.length === 0" color="primary" @click="add"
          >追加する</v-btn
        >
        <v-spacer></v-spacer>
        <v-dialog v-if="id.length > 0" v-model="dialog" max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn color="error" dark v-on="on">削除する</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">レシピを削除しますか？</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false"
                >キャンセル</v-btn
              >
              <v-btn color="green darken-1" flat @click="remove"
                >削除する</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn v-if="id.length > 0" color="primary" @click="update"
          >更新する</v-btn
        >
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<style lang="stylus" scoped>
.recipe-detail
  margin 3% 0
  padding 3%

  &__title
    font-weight bold

  &__detail
    padding 0
    list-style none
</style>

<script>
import firebase from '~/plugins/firebase'
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
    },
    food: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialog: {
        type: Boolean,
        default: false
      },
      newTitle: {
        type: String,
        default: ''
      },
      newDescription: {
        type: String,
        default: ''
      },
      newFood: {
        type: String,
        default: ''
      }
    }
  },
  created() {
    this.dialog = false
  },
  mounted() {
    this.newTitle = this.title
    this.newDescription = this.description
    this.newFood = this.food
  },
  methods: {
    add() {
      firebase
        .firestore()
        .collection('users')
        .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
        .collection('recipes')
        .add({
          title: this.newTitle,
          description: this.description,
          foods: [this.food]
        })
        .then(() => {
          this.$router.push({ path: '/recipes' })
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error)
        })
    },
    update() {
      firebase
        .firestore()
        .collection('users')
        .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
        .collection('recipes')
        .doc(this.id)
        .set(
          {
            title: this.newTitle,
            description: this.description,
            foods: [this.food]
          },
          { merge: true }
        )
        .then(() => {
          this.dialog = false
          this.$router.push({ path: '/recipes' })
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error)
        })
    },
    remove() {
      firebase
        .firestore()
        .collection('users')
        .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
        .collection('recipes')
        .doc(this.id)
        .delete()
        .then(() => {
          this.$router.push({ path: '/recipes' })
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error)
        })
    }
  }
}
</script>
