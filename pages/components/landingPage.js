import React, { Component } from 'react'
import { Button } from '@mui/material'

export class landingPage extends Component {
  render() {
    return (
      <div>landingPage
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
    )
  }
}

export default landingPage