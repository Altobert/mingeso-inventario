import styled from "styled-components";
import * as React from 'react';
<<<<<<< HEAD
//import TextField from '@mui/material/TextField';
//import Autocomplete from '@mui/material/Autocomplete';
//import axios from "axios";
=======
import axios from "axios";
>>>>>>> fe60c489bdd3ba11e5f48af862d7bdfa93d80bc4

class Home extends React.Component {

  state = {
    students: []
  }
  
  componentDidMount(){
    /*axios.get('http://localhost:8080/estudiantes/getAllStudents')
      .then(response => {

        console.log(response.data);
        
        this.setState({ students: response.data });
      })*/
  }
  render(){
    return(
      /*<Container>
        <center>
          <h1>Situacion Actual</h1>
        </center>
          
          <select name="students" id="students" className="form-control">
            {this.state.students.map((student) => (
              <option value={student.id}>{student.rutStudentString}</option>
            ))} 
          </select>
        
      </Container>*/
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