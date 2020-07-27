import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { array, func } from 'prop-types';

class AddVehicleForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      make: {id: '', name: ''},
      model: {id: '', name: ''},
      driver: {id: '', name: ''},
      errorMsg: ''
      };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {name, make, model, driver} = this.state;

    if (!name || !make.id || !model.id || !driver.id) {
      this.setState({ errorMsg: 'Missing required field name' });
      return;
    }
    this.props.onSubmit( {name, make, model, driver} );
    this.setState({ name: '', make: {id: '', name: ''}, model: {id: '', name: ''}, driver: {id: '', name: ''}, errorMsg: ''});
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleMakeChange = (event) => {
    var eventVal = event.target.value;
    var id = eventVal.substring(0, 1)
    var name = eventVal.substring(2, eventVal.length)
    this.setState({ make: {id: id, name: name} });
  };

  handleModelChange = (event) => {
    var eventVal = event.target.value;
    var id = eventVal.substring(0, 1)
    var name = eventVal.substring(2, eventVal.length)
    this.setState({ model: {id: id, name: name} });
  };

  handleDriverChange = (event) => {
    var eventVal = event.target.value;
    var id = eventVal.substring(0, 1)
    var name = eventVal.substring(2, eventVal.length)
    this.setState({ driver: {id: id, name: name} });
  };


  render() {

    function renderSelectList(item) {
      return <option key={item.id +"_"+ item.name} value={item.id +"_"+item.name}>{item.name}</option>
    }

    return(
      <div>
        <h3 align="left">Add a Vehicle</h3>
        <Col>
            <Row>
                { this.state.errorMsg ? <p className="alert alert-danger login-alert-danger">{this.state.errorMsg}</p> : null}
            </Row>
            <Row>
                <Form className="form form-inline" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label className="mr-1"><b>Name</b></label>
                        <FormControl
                             className="login-form-control mr-1"
                             type='text'
                             name='name'
                             placeholder='Vehicle Name'
                             value={ this.state.name }
                             onChange={ this.handleNameChange } />

                          <label className="mr-1"><b>Make</b></label>
                          <select className="form-control mr-1" name="make" value={this.state.make.id + "_" + this.state.make.name}
                            onChange={this.handleMakeChange}>
                            <option value={null}>Select a Maker</option>
                            {this.props.makes.map(renderSelectList)}
                          </select>

                          <label className="mr-1"><b>Model</b></label>
                          <select className="form-control mr-1" name="model" value={this.state.model.id + "_" + this.state.model.name}
                            onChange={this.handleModelChange}>
                            <option value={null}>Select a Model</option>
                            {this.props.models.map(renderSelectList)}
                          </select>

                          <label className="mr-1"><b>Driver</b></label>
                          <select className="form-control mr-1" name="driver" value={this.state.driver.id + "_" + this.state.driver.name}
                            onChange={this.handleDriverChange}>
                            <option value={null}>Select a Driver</option>
                            {this.props.drivers.map(renderSelectList)}
                          </select>

                        <Button className="btn btn-success mr-1 ml-1" type="submit">Add to Garage</Button>
                    </FormGroup>
                </Form>
            </Row>
        </Col>
      </div>
    );

  }
}

AddVehicleForm.propTypes = {
  makes: array,
  models: array,
  drivers: array,
  onSubmit: func
};

export default AddVehicleForm;