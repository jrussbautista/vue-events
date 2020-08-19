<template>
  <div class="home">
    <h1>Home page</h1>
    <h1>
      <router-link :to="{ name: 'event', params: { eventId: 2 }}">Event 2</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
