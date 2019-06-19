<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-footer app>
    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on }">
        <v-btn absolute dark fab top right color="pink" v-on="on">
          <v-icon>add</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <v-btn color="primary" flat dark nuxt to="/ingredients/新しい食材">
            食材を登録する
          </v-btn>
        </v-list-tile>
        <v-list-tile>
          <v-btn color="primary" flat dark nuxt to="/recipes/新しいレシピ">
            レシピを登録する
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
    <span>&copy; 2019</span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
