import config from "../config/config";
import AxiosService from "../services/axios-service.js";
//const axiosService = new AxiosService();
export default class EmployeeService {
  baseUrl = config.baseUrl;
  tokenRequired = false;
  httpOptions = null;

  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}emp/create`, data);
  }
  updateEmployee(data) {
    return AxiosService.putService(`${this.baseUrl}emp/update`, data);
  }
  getAllEmployee() {
    return AxiosService.getService(`${this.baseUrl}emp/get`);
  }
  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}emp/get/${id}`);
  }
  deleteEmployee(id) {
    return AxiosService.deleteService(`${this.baseUrl}emp/delete/${id}`);
  }
}