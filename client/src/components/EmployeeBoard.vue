<template>
  <div class="display-board">
    <h4>Total Employees</h4>
    <div class="number">
      {{ numberOfEmployees }}
    </div>
    <div class="btn">
      <button @click="getAllEmployees()" type="button" class="btn btn-warning">
        Get all Employees
      </button>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DisplayBoard extends Vue {
  @Prop(Number) numberOfEmployees;

  getAllEmployees() {
    this.$emit("getAllEmployees");
  }
}
</script>
