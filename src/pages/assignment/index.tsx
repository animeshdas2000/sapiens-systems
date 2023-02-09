import { useQuery } from "@apollo/client";
import { GET_LEADS } from "./queries";
import React from "react";
// import TableComp from "../../components/Table";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import UpdateLead from "../../components/assignment/UpdateLead";
import DeleteLead from "../../components/assignment/DeleteLead";
import CreateLead from "../../components/assignment/CreateLead";
import kebab from "../../assets/kebab.svg";
import ViewLead from "../../components/assignment/ViewLead";
import { Col } from "react-bootstrap";
function Assingment() {
  const { loading, error, data } = useQuery(GET_LEADS);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;
  return (
    <>
      <div>
        <h2>Create New lead</h2> <CreateLead />
        <Table bordered hover>
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
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        id="dropdown-basic">
                        <img src={kebab} alt="" height={20} width={20} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <ViewLead id={val.id} />
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <UpdateLead id={val.id} />
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <DeleteLead id={val.id} />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Assingment;
