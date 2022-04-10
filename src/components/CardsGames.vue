<template>
  <div class="container">
    <div class="row m-4">
      <div class="col-12">
        <h1 class="display-6 text-center my-4">Lista de Juegos Disponibles</h1>
      </div>
      <div
        class="col-12 col-md-6 col-lg-4 my-5"
        v-for="(game, i) in dataGames"
        :key="i"
      >
        <OpinionModal :game="game" :id="i" />

        <div class="card" style="width: 22rem">
          <img
            :src="game.background_image"
            :alt="game.nombre"
            class="img-card"
          />
          <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{ game.rating }}</li>
            <li class="list-group-item">Released: {{ game.released }}</li>
            <li class="list-group-item">Update: {{ game.updated }}</li>
          </ul>
          <div class="card-body">
            <button
              type="button"
              class="btn btn-primary boton"
              data-bs-toggle="modal"
              :data-bs-target="'#opinion_add' + i"
            >
              Opinar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OpinionModal from "./ModalOpinion.vue";
export default {
  name: "GridCards",
  components: {
    OpinionModal,
  },
  props: {
    dataGames: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.card-body {
  margin: auto;
}
.img-card {
  width: 100%;
  height: 250px;
  margin: auto;
}
</style>
