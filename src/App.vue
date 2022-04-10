<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid d-flex">
        <router-link class="navbar-brand" to="/"
          ><i class="fa-solid fa-headset"></i> Games Opinion</router-link
        >
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" to="/"
                  ><i class="fa-solid fa-house-chimney"></i
                  ><span></span> Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/opinions"
                  ><i class="fa-solid fa-comments"></i> Opiniones</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/admin"
                  ><i class="fa-solid fa-users-gear"></i>
                  Administración</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
