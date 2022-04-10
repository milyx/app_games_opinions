<template>
  <div class="m-4 p-4">
    <table class="table">
      <thead>
        <tr>
          <td scope="col">#</td>
          <td scope="col">Persona</td>
          <td scope="col">Juego</td>
          <td scope="col">Opinión</td>
          <td scope="col">acciones</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, i) in opinions" :key="i">
          <td scope="row">{{ i + 1 }}</td>
          <td>{{ opinion.name }}</td>
          <td>{{ opinion.game }}</td>
          <td>{{ opinion.opinion }}</td>
          <td>
            <button class="btn btn-danger mx-5" @click="DELETE_OPINION(i)">
              Eliminar
            </button>
            <button class="btn btn-info" @click="editOpinion(i)">Editar</button>
          </td>
        </tr>
      </tbody>
      <router-view></router-view>
    </table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TableOpinions",
  methods: {
    ...mapMutations(["DELETE_OPINION"]),
    editOpinion(i) {
      if (i != null) {
        this.$router.push(`/edit-opinion/${i}`);
      } else {
        alert("Error en los datos");
      }
    },
  },
  props: {
    opinions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
