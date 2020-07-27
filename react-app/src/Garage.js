import React, { Component } from 'react';
import Vehicles from './Vehicles';
import 'whatwg-fetch';
import AddVehicleForm from './AddVehicleForm';
import { SERVER_URL } from "./config";
import headers from './headers';

class Garage extends Component {

  constructor() {
    super();

    this.state = {
      vehicles: [],
      makes: [],
      models: [],
      drivers: []
    }
  }

  componentDidMount() {
    fetch(`${SERVER_URL}/garage/vehicles`, {
        method: 'GET',
        headers: headers()
       })
      .then(r => r.json())
      .then(json => this.setState({vehicles: json}))
      .catch(error => console.error('Error retrieving vehicles: ' + error));

    fetch(`${SERVER_URL}/garage/makes`, {
        method: 'GET',
        headers: headers()
       })
      .then(r => r.json())
      .then(json => this.setState({makes: json}))
      .catch(error => console.error('Error retrieving makes: ' + error));

    fetch(`${SERVER_URL}/garage/models`, {
        method: 'GET',
        headers: headers()
       })
      .then(r => r.json())
      .then(json => this.setState({models: json}))
      .catch(error => console.error('Error retrieving models: ' + error));

    fetch(`${SERVER_URL}/garage/drivers`, {
        method: 'GET',
        headers: headers()
       })
      .then(r => r.json())
      .then(json => this.setState({drivers: json}))
      .catch(error => console.error('Error retrieving drivers: ' + error));
  }

  submitNewVehicle = (vehicle) => {
      fetch(`${SERVER_URL}/garage/vehicles/add`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(vehicle)
      }).then(r => r.json())
        .then(json => {
          let vehicles = this.state.vehicles;
          vehicles.push({id: json.id, name: json.name, make: json.make, model: json.model, driver: json.driver});
          this.setState({vehicles});
        })
        .catch(ex => console.error('Unable to save vehicle', ex));
    };

  render() {
    const {vehicles, makes, models, drivers} = this.state;

    return(
        <div align="center">
            <br/>
            <AddVehicleForm onSubmit={this.submitNewVehicle} makes={makes} models={models} drivers={drivers} />
            <br/>
            <Vehicles vehicles={vehicles} />
            <br/>
            <a href="/">Return</a>
        </div>
    )
  }
}

export default Garage;