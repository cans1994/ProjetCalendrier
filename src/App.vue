<script setup>
import Header from "./components/Header.vue";
import EventCalendar from "./components/EventCalendar.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <EventCalendar />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
