import { useQuery } from "@apollo/client";
import { GET_LEADS } from "./queries";
import React from "react";
// import TableComp from "../../components/Table";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import UpdateLead from "../../components/assignment/UpdateLead";
import DeleteLead from "../../components/assignment/DeleteLead";
import CreateLead from "../../components/assignment/CreateLead";

function Assingment() {
  const { loading, error, data } = useQuery(GET_LEADS);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;
  return (
    <>
      <div className="p-4 m-auto center">
        <h2>Create New lead</h2> <CreateLead />
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Source</th>
            <th>Status</th>
            <th>Time</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.leads?.data.map((val: any) => {
            return (
              <tr key={val.id}>
                <td>{val.attributes.Name}</td>
                <td>{val.attributes.Source}</td>
                <td>{val.attributes.Status}</td>
                <td>{val.attributes.Time}</td>
                <td>{val.attributes.email}</td>
                <td>
                  <UpdateLead id={val.id} />
                  <DeleteLead id={val.id} />
                  {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <UpdateLead id={val.id} />
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <DeleteLead id={val.id} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Assingment;
