<template>
  <v-card class="ingredient-detail">
    <v-card-title v-if="name.length > 0">
      {{ name }}
    </v-card-title>
    <v-card-text class="ingredient-detail__content">
      <v-form>
        <v-text-field v-model="newName" label="食材名" require></v-text-field>
        <v-text-field v-model="buyDate" label="購入日" require></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-flex row align-end>
        <v-btn v-if="id.length === 0" color="primary" @click="add"
          >追加する</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn v-if="id.length > 0" color="error" @click="remove">
          削除する
        </v-btn>
        <v-btn v-if="id.length > 0" color="primary" @click="update"
          >更新する</v-btn
        >
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<style lang="stylus" scoped>
.ingredient-detail
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
    name: {
      type: String,
      default: ''
    },
    buyDate: {
      type: Date,
      default: null
    }
  },
  data() {
    return {
      newName: {
        type: String,
        default: ''
      }
    }
  },
  mounted() {
    this.newName = this.name
  },
  methods: {
    add() {
      firebase
        .firestore()
        .collection('users')
        .doc('ZzgUrmEE1SUH9BQXe2YyAGhaD1A2')
        .collection('ingredients')
        .add({
          name: this.newName,
          buyDate: this.buyDate
        })
        .then(() => {
          this.$router.push({ path: '/ingredients' })
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
        .collection('ingredients')
        .doc(this.id)
        .set(
          {
            name: this.newName,
            buyDate: this.buyDate
          },
          { merge: true }
        )
        .then(() => {
          this.$router.push({ path: '/ingredients' })
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
        .collection('ingredients')
        .doc(this.id)
        .delete()
        .then(() => {
          this.$router.push({ path: '/ingredients' })
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error)
        })
    }
  }
}
</script>
