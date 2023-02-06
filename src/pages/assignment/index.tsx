import { useQuery } from "@apollo/client";
import { GET_LEADS } from "./queries";
// import TableComp from "../../components/Table";
import Table from "react-bootstrap/Table";
import kebabMenu from "../../assets/kebab.svg";
import Dropdown from "react-bootstrap/Dropdown";
import UpdateLead from "../../components/assignment/UpdateLead";
import DeleteLead from "../../components/assignment/DeleteLead";
function Assingment() {
  const { loading, error, data } = useQuery(GET_LEADS);

  console.log(data);
  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;
  return (
    <>
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
          {data.leads?.data.map((val) => {
            return (
              <tr>
                <td>{val.attributes.Name}</td>
                <td>{val.attributes.Source}</td>
                <td>{val.attributes.Status}</td>
                <td>{val.attributes.Time}</td>
                <td>{val.attributes.email}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary">
                      {<img src={kebabMenu} alt="" width="20px" />}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <DeleteLead id={val.id} />
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <UpdateLead id={val.id} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
