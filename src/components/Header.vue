<template>
  <header class="header">
    <router-link to="/">Vue Events</router-link>
    <div class="spacer" />
    <nav class="nav">
      <router-link :to="{ name: 'home'}">List</router-link>
      <router-link :to="{ name: 'event-create'}">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  display: flex;
  align-items: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.spacer {
  flex: 1;
}
</style>
