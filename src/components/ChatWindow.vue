<template>
  <div v-if="contact">
    <h2>Chat with {{ contact.name }}</h2>
    <div class="messages">
      <div v-for="(message, index) in contact.messages" :key="index" class="message">
        <strong>{{ message.from }}:</strong> {{ message.text }}
      </div>
    </div>
    <div class="input-container">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import contacts from '@/data/contacts.json'

const route = useRoute()
const contact = ref(null)
const newMessage = ref('')

const loadContact = () => {
  const contactId = parseInt(route.params.id as string)
  contact.value = contacts.find((c: { id: number }) => c.id === contactId)
}

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    contact.value.messages.push({
      from: 'You',
      text: newMessage.value,
    })
    newMessage.value = ''
  }
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

<style scoped>
.messages {
  margin-top: 1rem;
}

.message {
  margin-bottom: 0.5rem;
}

.input-container {
  margin-top: 1rem;
  display: flex;
}

input {
  flex: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
}
</style>
