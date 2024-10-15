<script setup lang="ts">
import userLoginAPI from '../api/userLoginAPI'

const trial = async () => {
  const result = await userLoginAPI()
  console.log('@@@login:', result)
}
</script>

<template>
  <button @click="trial">click me</button>
</template>

<style scoped>
</style>