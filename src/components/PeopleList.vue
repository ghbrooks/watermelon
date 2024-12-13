<template>
  <div>
    <ul>
      <li v-for="person in people" :key="person.id">
        <RouterLink :to="'/chat/' + person.id">{{ person.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import contacts from '@/data/contacts.json'

interface Person {
  id: number
  name: string
}

const people = ref<Person[]>([])

onMounted(() => {
  people.value = contacts
})
</script>
