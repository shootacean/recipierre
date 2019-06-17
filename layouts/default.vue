<template>
  <v-app>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <v-btn absolute dark fab top right color="pink">
        <v-icon>add</v-icon>
      </v-btn>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Home',
          to: '/home'
        },
        {
          icon: 'kitchen',
          title: 'Ingredients',
          to: '/ingredients'
        },
        {
          icon: 'fastfood',
          title: 'Recipes',
          to: '/recipes'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Recipierre'
    }
  }
}
</script>
