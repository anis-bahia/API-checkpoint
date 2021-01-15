import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Container } from "react-bootstrap";

function UserList() {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const donner = res.data;
      setListOfUSer(donner);
      console.log(listOfUSer);
    });
  }, []);

  return (
    <Container>
      <div>
        {listOfUSer.map((item) => (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th> Name</th>
                <th>userName</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </Container>
  );
}

export default UserList;
