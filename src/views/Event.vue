<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="event">
      <div class="event-header">
        <span class="eyebrow"
          >@{{ event.time }} on {{ event.date | date }}</span
        >
        <h1 class="title">{{ event.title }}</h1>
        <h5>Organized by {{ event.organizer ? event.organizer.name : '' }}</h5>
        <h5>Category: {{ event.category }}</h5>
      </div>
      <!-- <BaseIcon name="map">
        <h2>Location</h2>
      </BaseIcon> -->
      <address>{{ event.location }}</address>
      <h2>Event details</h2>
      <p>{{ event.description }}</p>
      <h2>
        Attendees
        <span class="badge -fill-gradient">{{
          event.attendees ? event.attendees.length : 0
        }}</span>
      </h2>
      <ul class="list-group">
        <li
          v-for="(attendee, index) in event.attendees"
          :key="index"
          class="list-item"
        >
          <strong>{{ attendee.name }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService'

export default {
  data() {
    return {
      event: null,
      isLoading: true
    }
  },
  created() {
    this.fetchEvent()
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    async fetchEvent() {
      try {
        this.isLoading = true
        const result = await EventService.getEventById(this.id)
        this.event = result.data
        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
