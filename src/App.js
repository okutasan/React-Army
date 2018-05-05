import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import './App.css';
import Kartuku from './kartuku';
import Form from './form'

// {this.state.Pengguna.map(item => {
//   return (<Kartuku namaSaya={item.nama} umurSaya={item.umur}/>)
// })}
class App extends Component {

  state = {
    Pengguna: [
      { nama: 'Dani', umur: '22' },
      { nama: 'Danu', umur: '21' }
    ],
    Alamat: [
      { alamat: 'Semarang' },
      { alamat: 'Kudus' }
    ]
  }
  render() {
    return (
      <div>
        <Container>
          <Grid>
            <Grid.Row>

              {this.state.Alamat.map(item => {
                return (
                  <Grid.Column width={4}>
                    <Kartuku alamatSaya={item.alamat} />
                  </Grid.Column>
                )
              })}

            </Grid.Row>
          </Grid>
          <Form />
        </Container>
      </div>
    );
  }
}

export default App;
