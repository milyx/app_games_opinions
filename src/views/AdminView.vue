<template>
  <div class="">
    <h2 class="display-4 m-4 p-4 text-center">
      Administrando la Lista de opiniones
    </h2>
    <div v-if="opinions.length === 0" class="m-4">
      <div class="alert alert-danger m-4" role="alert">
        No existen opiniones por administrar.
      </div>
    </div>
    <div v-else><OpinionList :opinions="opinions" /></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OpinionList from "../components/OpinionList.vue";
export default {
  computed: {
    ...mapState(["opinions"]),
  },
  components: {
    OpinionList,
  },
};
</script>
