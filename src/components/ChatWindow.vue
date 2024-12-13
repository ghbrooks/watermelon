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

let botMessageId = 1

const getBotResponse = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${botMessageId}`)
    const data = await response.json()
    contact.value.messages.push({
      from: contact.value.name,
      text: data.title,
    })
    botMessageId++
  } catch (error) {
    console.error('Error fetching bot response:', error)
  }
}

const sendMessage = async () => {
  if (newMessage.value.trim() !== '') {
    contact.value.messages.push({
      from: 'You',
      text: newMessage.value,
    })
    newMessage.value = ''
    await getBotResponse()
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
