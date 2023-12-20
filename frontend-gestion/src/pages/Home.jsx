import styled from "styled-components";
import * as React from 'react';
//import axios from "axios";

class Home extends React.Component {

  state = {
    students: []
  }
  
  componentDidMount(){
    
  }
  render(){
    return(
      
      <Container>
        <center>
          <h1>Situacion Actual</h1>
        </center>
      </Container>
    );  
  }}
export default Home;
const Container =styled.div`
   height:100vh; 
`