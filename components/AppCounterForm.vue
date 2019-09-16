<template>
  <form @submit.prevent="setCount">
    <input v-model="inputCount" type="number" />
    <button>setCount</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as Vuex from 'vuex'

@Component
export default class extends Vue {
  $store!: Vuex.ExStore
  inputCount: string = ''

  setCount() {
    this.$store.dispatch('counter/asyncSetCount', {
      amount: Number(this.inputCount)
    })
  }
}
</script>
