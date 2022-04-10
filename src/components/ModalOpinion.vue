<template>
  <div
    class="modal"
    :id="'opinion_add' + id"
    tabindex="-1"
    aria-labelledby="modal_opinion"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title" id="modal_opinion">
            Escribe tu opinión para el juego: {{ game.name }}
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Nombre:</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Evan You"
              v-model="nombre"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Opiniones</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Tu opinión debe ir aquí"
              rows="3"
              v-model="opinion"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="clear()"
          >
            Cerrar
          </button>

          <button
            type="button"
            class="btn btn-primary"
            @click="save(game.name)"
            data-bs-dismiss="modal"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },
  props: {
    game: {
      type: Object,
      default: () => {},
    },
    id: {
      type: Number,
      default: null,
    },
  },

  methods: {
    ...mapMutations(["SET_OPINION"]),
    save(game) {
      if (this.nombre != "" && this.opinion != "") {
        const newOpinion = {
          name: this.nombre,
          game: game,
          opinion: this.opinion,
        };

        this.SET_OPINION(newOpinion);
        this.clear();
        alert("Su opinión fue creada con éxito!");
        this.$router.push("/opinions");
      } else {
        alert("Ingrese sus datos completos!");
      }
    },
    clear() {
      this.nombre = "";
      this.opinion = "";
    },
  },
};
</script>
