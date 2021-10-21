<template>
  <div>
    <b-navbar type="dark" variant="dark" class="height">
      <b-navbar-nav>
        <b-nav-item router-link to="/profile">Profile</b-nav-item>
        <b-nav-item router-link to="/gallery">Gallery</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Topbar"
};
</script>

<style scoped>
.height {
  height: 70px;
}
.navbar-nav {
  padding-left: 2em;
}
.nav-item {
  padding-left: 2em;
}
.active-header {
  color: orange;
}
</style>
