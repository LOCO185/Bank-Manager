import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Components/Users/Users';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={Users} />
      {/* <Route path="/:id" exact component={SingleUser} /> */}
      </>
      </BrowserRouter>
    </div>
  );
}

export default App;
