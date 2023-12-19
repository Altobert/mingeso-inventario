import styled from "styled-components";
import * as React from 'react';
import axios from "axios";

class Home extends React.Component {

  state = {
    students: []
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080/estudiantes/getAllStudents')
      .then(response => {

        console.log(response.data);
        
        this.setState({ students: response.data });
      })
  }
  render(){
    return(
      <Container>
        <center>
          <h1>Situacion Actual</h1>
        </center>
        <select name="students" id="students" className="form-control">
          {this.state.students.map((student) => (
            <option value={student.id}>{student.rutStudentString}</option>
          ))} 
        </select>
      </Container>
    );  
  }}
export default Home;
const Container =styled.div`
   height:100vh; 
`