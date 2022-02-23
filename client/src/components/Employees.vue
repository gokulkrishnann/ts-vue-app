<template>
  <div class="employeestable">
    <h2>Employees List</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Name</th>
          <th>Department</th>
          <th>Location</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in employees" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.salary }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Employees extends Vue {
  @Prop([]) employees;
}
</script>
