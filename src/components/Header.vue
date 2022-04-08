<script>
export default {
  data() {
    return {
      title: 'Lernumerique :',
      subtitle: 'agenda',
      blog: 'Blog',
      contact: 'Contact'
    }
  },
}
</script>

<template>
  <div class="container-header">
    <div class="left-part">
      <h1 class="main-title">
        {{ title }} <span class="subtitle"> {{ subtitle }}</span>
      </h1>
    </div>
    <div class="right-part">
      <h2 class="menu"> {{ blog }} • {{ contact }}</h2>
    </div>
  </div>

  <hr />
</template>

<style>
.container-header{
  display: flex;
  justify-content: space-between;
}
.main-title {
  font-family: 'Roboto', Courier, monospace;
  padding-left: 1.25rem;
  font-weight: 800;
}
.subtitle {
  color: #ae2012;
  text-transform: uppercase;
  font-weight: 800;
}
.menu {
  text-transform: uppercase;
  font-weight: 800;
}
</style>