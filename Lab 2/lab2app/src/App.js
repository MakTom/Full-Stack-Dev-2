import logo from './logo.svg';
import './App.css';
import Student from './component/student'
import College from './component/college'

function App() {
  return (
    <div>
      <Student name="Tango" number="99999" enrolled="1" />
      <Student name="Mike" number="5555555" enrolled="2" />
      <Student name="Delta" number="7777777" enrolled="3" />
      <College name="Bravo" location="Mumbai" />
    </div>
  );
}

export default App;