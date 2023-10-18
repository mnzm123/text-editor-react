
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Router>
      <Navbar title="TextUtils" />
      <div className='container my-3'>
        
          <Switch>
          <Route path="/about" component={About} />
            
            <Route path="/">
              <TextForm heading="Enter the text to analyze"/>
            </Route>
          </Switch>
      </div>
      
      </Router>
    </>
  );
}

export default App;
