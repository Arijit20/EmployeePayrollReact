import React from "react";
import "./display.scss";
import deleteIcon from "../../assets/icons/delete-black-18dp.svg";
import editIcon from "../../assets/icons/create-black-18dp.svg";
import profile1 from "../../assets/profile-images/Ellipse -3.png";
import profile2 from "../../assets/profile-images/Ellipse -1.png";
import profile3 from "../../assets/profile-images/Ellipse -8.png";
import profile4 from "../../assets/profile-images/Ellipse -7.png";
import { withRouter } from "react-router-dom";
import EmployeeService from "../../services/employee-service";

const Display = (props) => {
  const employeeService = new EmployeeService();

  const update = (employeeId) => {
    props.history.push(`payroll-form/${employeeId}`);
  };

  const remove = (employeeId) => {
    if(window.confirm("Are you sure you want to delete?")){
    employeeService
      .deleteEmployee(employeeId)
      .then((data) => {
        console.log("data after delete", data);
        props.getAllEmployee();
      })
      .catch((err) => {
        console.log("error after delete", err);
      });
    }
  };

  return (
    <table id="display" className="display">
      <tbody>
        <tr key={-1}>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Actions</th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td><img className="profile" 
              src={
                element.profile ===
                "../../assets/profile-images/Ellipse -3.png"
                  ? profile1
                  : element.profile ===
                    "../../assets/profile-images/Ellipse -1.png"
                  ? profile2
                  : element.profile ===
                    "../../assets/profile-images/Ellipse -8.png"
                  ? profile3
                  : profile4
              }
              alt=""
            />
              </td>
              <td>{element.name}</td>
              <td className="gender">{element.gender}</td>
              <td>
                {element.department &&
                  element.department.map((dept) => (
                    <div className="dept-label">{dept}</div>
                  ))}
              </td>
              <td> ₹ {element.salary}</td>
              <td>{element.startDate}</td>
              <td>
                <img
                  onClick={() => remove(element.id)}
                  src={deleteIcon}
                  alt="delete"
                />
                <img
                  onClick={() => update(element.id)}
                  src={editIcon}
                  alt="edit"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default withRouter(Display);