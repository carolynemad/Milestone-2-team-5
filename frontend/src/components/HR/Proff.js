import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      birthDate: "",
      salary: "",
      daysOff: "",
      annual: "",
      request: "",
      id: "",
      memberType: "",
      email: "",
      location: "",
    };
  }

  componentDidMount() {
    axios
      .get("/account/viewProfile")
      .then((res) => {
        console.log("here");
        this.setState({
          firstname: res.data.firstName,
          lastname: res.data.lastName,
          birthDate: res.data.birthDate,
          salary: res.data.salary,
          daysOff: res.data.daysOff,
          annual: res.data.annualLeaveBalance,
          request: res.data.requestLog,
          id: res.data.memberId,
          memberType: res.data.staffMemberType,
          email: res.data.email,
          location: res.data.location,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Missings </h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>MemberID</th>
              <th>Missing Days</th>
              <th>Remaining Days</th>
              <th>Extra Hours</th>
              <th>Missing Hours</th>
              <th>Remaining Hours</th>
            </tr>
          </thead>
          <tbody>
            <td>
              {this.state.firstname.map((firstName) => (
                <div>{firstName}</div>
              ))}
            </td>
            <td>
              {this.state.missings.map((missing) => (
                <div>{missing.missingDays}</div>
              ))}
            </td>
            <td>
              {this.state.missings.map((missing) => (
                <div>{missing.remainingDays}</div>
              ))}
            </td>
            <td>
              {this.state.missings.map((missing) => (
                <div>{missing.ExtraHours}</div>
              ))}
            </td>
            <td>
              {this.state.missings.map((missing) => (
                <div>{missing.missingHours}</div>
              ))}
            </td>
            <td>
              {this.state.missings.map((missing) => (
                <div>{missing.remainingHours}</div>
              ))}
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewMissing;
