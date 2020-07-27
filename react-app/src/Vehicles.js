import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { array } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Vehicles extends Component {

    render() {

        function renderVehicleRow(vehicle) {

              return (<tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.name}</td>
                <td>{vehicle.make.name}</td>
                <td>{vehicle.model.name}</td>
                <td>{vehicle.driver.name}</td>
              </tr>);
            }

        return(
            <div>
                <Table striped bordered condensed hover>
                    <thead style={{backgroundColor: "skyblue" }}>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Make</th>
                      <th>Model</th>
                      <th>Driver</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.vehicles.map(renderVehicleRow)}

                    </tbody>
                 </Table>
            </div>
        )
    }
}

Vehicles.propTypes = {
  vehicles: array
};

export default Vehicles;