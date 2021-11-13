import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopMenubar from './Components/Includes/TopMenubar';
import Footer from './Components/Includes/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import IcAgile from './Components/CapabilityBuildingPrograms/IcAgile';
import Dasa from './Components/CapabilityBuildingPrograms/Dasa';
import Safe from './Components/CapabilityBuildingPrograms/Safe';
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <TopMenubar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about-us" component={About}></Route>
          <Route path="/contact-us" component={Contact}></Route>
          <Route path="/capability-building-programs/ic-agile" component={IcAgile}></Route>
          <Route path="/capability-building-programs/dasa" component={Dasa}></Route>
          <Route path="/capability-building-programs/safe" component={Safe}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
