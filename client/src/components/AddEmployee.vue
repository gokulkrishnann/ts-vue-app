<template>
  <div class="add-container">
    <div class="row">
      <div class="col-md-8 mrgnbtm mrgnleft">
        <h2>Add Employee</h2>
        <form>
          <div class="custom-column">
            <div class="form-group col-md-6 mrgnbtm">
              <label htmlFor="exampleInputName1">ID</label>
              <input
                type="text"
                class="form-control"
                v-model="id"
                name="id"
                id="empId"
                aria-describedby="idHelp"
                placeholder="ID"
              />
            </div>
            <div class="form-group col-md-6 mrgnbtm">
              <label htmlFor="exampleInputName1">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                name="name"
                id="empName"
                aria-describedby="nameHelp"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="custom-column">
            <div class="form-group col-md-6 mrgnbtm">
              <label htmlFor="exampleInputLocation1">Department</label>
              <select v-model="department" class="form-control">
                <option disabled value="">Please select one</option>
                <option>Engineering</option>
                <option>HR</option>
                <option>Sales</option>
                <option>Marketing</option>
              </select>
            </div>
            <div class="form-group col-md-6 mrgnbtm">
              <label htmlFor="exampleInputLocation1">Location</label>
              <input
                type="text"
                class="form-control"
                v-model="location"
                name="location"
                id="empLocation"
                aria-describedby="locationHelp"
                placeholder="Location"
              />
            </div>
          </div>
          <div class="custom-column">
            <div class="form-group col-md-6 mrgnbtm">
              <label htmlFor="exampleInputSalary1">Salary</label>
              <input
                type="number"
                class="form-control"
                v-model="salary"
                name="salary"
                id="empSalary"
                placeholder="Salary"
              />
            </div>
          </div>
          <button
            type="button"
            @click="addEmployee()"
            class="btn btn-danger mrgnbtm"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue } from "vue-property-decorator";
export default class AddEmployee extends Vue {
  data() {
    return {
      name: "",
      id: 0,
      department: "Engineering",
      location: "",
      salary: 0,
    };
  }

  addEmployee() {
    const payload = {
      name: this.name,
      id: this.id,
      department: this.department,
      location: this.location,
      salary: this.salary,
    };

    this.$emit("addEmployee", payload);
    this.clearForm();
  }
  clearForm() {
    this.name = "";
    this.department = "Engineering";
    this.location = "";
    this.salary = "";
  }
}
</script>
