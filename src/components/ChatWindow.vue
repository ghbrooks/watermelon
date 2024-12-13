<template>
  <div v-if="contact">
    <h2>Chat with {{ contact.name }}</h2>
    <div class="messages">
      <div v-for="(message, index) in contact.messages" :key="index" class="message">
        <strong>{{ message.from }}:</strong> {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import contacts from '@/data/contacts.json'

const route = useRoute()
const contact = ref(null)

const loadContact = () => {
  const contactId = parseInt(route.params.id)
  contact.value = contacts.find((c) => c.id === contactId)
}

onMounted(loadContact)
watch(route, loadContact)
</script>

<style scoped>
.messages {
  margin-top: 1rem;
}

.message {
  margin-bottom: 0.5rem;
}
</style>
