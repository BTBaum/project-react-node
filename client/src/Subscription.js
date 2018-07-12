import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "15vh 25vw"
  }
}

class Subscription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      dateOfBirth: "",
      subscriptionLength: "",
      selectedVehicle: "",
      vehicleList: [],
      vehicleDatails: null
    }
  }

  componentWillMount() {
    axios.get("http://localhost:9000/vehicles")
      .then(({ data }) => this.setState({ vehicleList: data }))
      .catch(err => console.log("Error getting vehicle list", err))
  }

  handleChange = name => event => {
    this.setState({ [ name ]: event.target.value })
    let arr = []
    if(name === "selectedVehicle") {
      arr.push(this.state.vehicleList[event.target.value])
      this.setState({ vehicleDatails: arr })
    }
  }

  renderVehicleSelect() {
    if(this.state.vehicleList.length >= 1) {
      return (
        <div>
          <Select 
            value={this.state.selectedVehicle}
            onChange={this.handleChange('selectedVehicle')}
          >
            <MenuItem value="">
              <em>Please Select One</em>
            </MenuItem>
            { this.state.vehicleList.map(({ id, make, model }) => {
                return (
                  <MenuItem key={id} value={id}>{make} - {model}</MenuItem>
                )
              })
            }
          </Select>
        </div>
      )
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    // Not currently working - running into CORS issues 
    // looking into micro-cors
    console.log("Form submitted but not yet fully working")
    // axios.post("http://localhost:9000/subscription", this.state)
    //   .then(res => console.log(res))
    //   .catch(err => console.log("Error posting subscription", err))
  }

  render() {
    return (
      // Form fields need to be validated to ensure all fields are completed and 
      // that they are the correct type - (ex. email)
      <form 
        style={styles.layout}
        onSubmit={this.handleSubmit}
      >
        <TextField 
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <TextField 
          label="Email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <TextField
          id="date"
          label="Date of Birth"
          type="date"
          onChange={this.handleChange('date')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel>Subscription Length</InputLabel>
          <Select
            value={this.state.subscriptionLength}
            onChange={this.handleChange('subscriptionLength')}
          >
            <MenuItem value="">
              <em>Please Select One</em>
            </MenuItem>
            <MenuItem value={7}>7 Days</MenuItem>
            <MenuItem value={28}>28 Days</MenuItem>
          </Select>
        <InputLabel>Choose Vehicle</InputLabel>
        
        { this.renderVehicleSelect() }
        
        <h2>Vehicle Details</h2>

        {/* 
          Need to get price data from price-service micro service. Add a call to the price micro service on
          Subscription selection (7 or 28 days) to display the price.
        */}
        { this.state.vehicleDatails ? this.state.vehicleDatails.map(({ odometer, description }) => {
            return (
              <div key={odometer}>
                <p>Odometer: {odometer}</p>
                <p>Description: {description}</p>
              </div>
            )
          }) : <p>Please select a vehicle</p>
        }

        <Link to="/success">
          <Button type="submit" color="primary" variant="raised">
            Subscribe
          </Button>
        </Link>
      </form>
    )
  }
}

export default Subscription