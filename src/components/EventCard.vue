<template>
  <div>
    <h4>{{ event.title }}</h4>
    <div class="">{{ event.date }}</div>
    <div>{{ event.time }}</div>
    <div>{{ event.attendees.length }} attending</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Title',
        date: 'Date here',
        time: '6:00 PM',
        attendees: [
          { id: 1, name: 'Russty Cruz' },
          { id: 2, name: 'John Doe' }
        ]
      }
    }
  }
}
</script>

<style></style>
