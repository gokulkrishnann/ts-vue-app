<template>
  <div>
    <Header />
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-4">
          <EmployeeBoard
            :numberOfEmployees="numberOfEmployees"
            @getAllEmployees="getAllEmployees()"
          />
        </div>
        <div class="col-md-8">
          <AddEmployee @addEmployee="addEmployee($event)" />
        </div>
      </div>
      <div class="row">
        <Employees
          v-if="employees && employees.length > 0"
          :employees="employees"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import Header from "./Header.vue";
import AddEmployee from "./AddEmployee.vue";
import EmployeeBoard from "./EmployeeBoard.vue";
import Employees from "./Employees.vue";
import { EmployeeService } from "../services/employee.service";
@Component({
  components: {
    Header,
    AddEmployee,
    EmployeeBoard,
    Employees,
  },
})
export default class Dashboard extends Vue {
  data() {
    return {
      employees: [],
      numberOfEmployees: 0,
    };
  }

  getAllEmployees() {
    const employeeService = new EmployeeService();
    employeeService.getAllEmployees().then((response) => {
      console.log("response", response);
      this.employees = response;
      this.numberOfEmployees = response.length;
    });
  }

  addEmployee(data) {
    const employeeService = new EmployeeService();
    employeeService.addEmployee(data).then((response) => {
      this.getAllEmployees();
    });
  }
  mounted() {
    this.getAllEmployees();
  }
}
</script>
