<template>
  <div class="home">
    <CardsGames :dataGames="dataGames" />
  </div>
</template>

<script>
import CardsGames from "@/components/CardsGames.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["dataGames"]),
  },
  components: {
    CardsGames,
  },
};
</script>
