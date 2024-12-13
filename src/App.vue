<script setup lang="ts">
import PeopleList from './components/PeopleList.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <div class="left-pane">
      <PeopleList />
    </div>
    <div class="right-pane">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  height: 100vh;
}

.left-pane {
  width: 30%;
  border-right: 1px solid #ccc;
  padding: 1rem;
}

.right-pane {
  width: 70%;
  padding: 1rem;
}
</style>
