<template>
  <div>
    <h1 class="text-center">
      Editando la opinión de: {{ getTextoIdentifier }}
    </h1>
    <div class="m-4 p-4">
      <div class="mb-3">
        <div>
          <h4>Nombre:</h4>
        </div>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="newName"
        />
      </div>
      <div class="mb-3">
        <div>
          <h4>Opiniones:</h4>
        </div>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="newOpinion"
        ></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary me-3">
          <router-link class="text-white text-decoration-none" to="/admin"
            >Regresar</router-link
          >
        </button>
        <button @click="click" class="btn btn-info">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "OpinionView",
  data() {
    return {
      nombre: "",
      opinion: "",
    };
  },
  methods: {
    ...mapMutations(["EDIT_OPINION"]),
    click() {
      this.EDIT_OPINION({
        identifier: this.$route.params.identifier,
        name: this.nombre,
        opinion: this.opinion,
      });
      alert("Opinión modificada con éxito");
      this.$router.push("/admin");
    },
  },
  computed: {
    ...mapState(["opinions"]),
    getIdentifier() {
      return this.$route.params.identifier;
    },
    getTextoIdentifier() {
      return this.opinions[this.$route.params.identifier].game;
    },
    newName: {
      get() {
        return this.opinions[this.getIdentifier].name;
      },
      set(value) {
        this.nombre = value;
      },
    },
    newOpinion: {
      get() {
        return this.opinions[this.getIdentifier].opinion;
      },
      set(value) {
        this.opinion = value;
      },
    },
  },
};
</script>
