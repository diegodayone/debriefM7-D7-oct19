import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsNumber from './components/StudentsNumber';
import { connect } from "react-redux"

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addStudent: studentName => dispatch({ type:"ADD_STUDENT", payload: studentName})
 })

function App(props) {

  // 1) the name of the variable that will contain the information. Could be string, number, array, object...
  // 2) the setter, is a method to replace the content inside the variable
  // 3) the content into the useState() is simply the INITIAL VALUE for the variable
  // const [ container, setContainer] = useState("initialValue")
  const [ student, setStudent] = useState("Strive")
  const [ students, setStudents] = useState([])

  //this effect will be executed ONLY when the students.lenght changes
  useEffect( () => {
    console.log("hey, we have " + students.length + " in the list")
  }, [students.length])

  //this effect will be executed only when the string "student" changes
  useEffect(() => {
    console.log("hey you changed the string!" + student)
  }, [student])

  return (
    <div className="App">
      <header className="App-header">
        <StudentsNumber></StudentsNumber>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={student} onChange={e => setStudent(e.currentTarget.value)} />
        <input type="button" value="Add Student" onClick={e => props.addStudent(student) }/>
        <h2>Hey, you are adding  {student}</h2>

        <h2>Students:</h2>
        <ul>
          {props.students.map((stud, i) => <li key={i}>{stud}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
