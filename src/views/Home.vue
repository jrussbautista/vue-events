<template>
  <div class="container">
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></event-card>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      count: 0,
      events: []
    }
  },
  created() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      try {
        const results = await EventService.getEvents()
        this.events = results.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
