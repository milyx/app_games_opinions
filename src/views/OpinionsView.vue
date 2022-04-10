<template>
  <div class="">
    <h2 class="display-4 m-4 p-4">Lista de opiniones</h2>
    <div v-if="opinions.length === 0" class="m-4">
      <div class="alert alert-danger m-4 text-start" role="alert">
        No existen opiniones por administrar.
      </div>
    </div>
    <div v-else>
      <OpinionSection :opinions="opinions" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import OpinionSection from "../components/OpinionSection.vue";
export default {
  name: "OpinionesView",
  computed: {
    ...mapState(["opinions"]),
  },
  components: { OpinionSection },
};
</script>
