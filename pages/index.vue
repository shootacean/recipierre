<template>
  <v-layout justify-center align-center>
    <LandingPage />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {
    LandingPage: () => import('~/components/pages/LandingPage.vue')
  }
})
export default class IndexPage extends Vue {}
</script>
