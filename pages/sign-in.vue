<template>
  <v-form ref="form">
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" label="Password" required></v-text-field>
    <v-btn color="success" @click="login">Sign-in</v-btn>
  </v-form>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // ログインしたら飛ぶページを指定
          this.$router.push('/recipe')
        })
        .catch(error => {
          alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
