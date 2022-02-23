import { Employee } from "@/types";

export class EmployeeService {
  async getAllEmployees() {
    const response = await fetch("/api/employees");
    return response.json();
  }
  async addEmployee(data: Employee) {
    const response = await fetch("/api/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employee: data }),
    });
    return response.json();
  }
}
