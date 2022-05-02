import './App.css';
import userData from './userInfo.json';
import logo from "./photo.jpg";


const Header = () => {
  return (
    <header>
       <h1>Short Introduction</h1>
    </header>
  );
}

const Logo = () => <img src={logo} alt="" className='App-logo'/>

const List = (props: UserData) => {
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Age: {props.age}</li>
      <li>Info: {props.shortBio}</li>
      <li>Email: {props.email}</li>
    </ul>
  );
}  

function App() {
  return (
    <div>
      <Header />
      <Logo />
      <List {...userData}/>
    </div>
  );
}

export default App;
