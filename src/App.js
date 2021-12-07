import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopMenubar from './Components/Includes/TopMenubar';
import Footer from './Components/Includes/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import IcAgile from './Components/CapabilityBuildingPrograms/IcAgile';
import Dasa from './Components/CapabilityBuildingPrograms/Dasa';
import Safe from './Components/CapabilityBuildingPrograms/Safe';
import Assessments from './Components/Assessments/Assessments';
import './App.scss';
import IcAgileFlipbook from './Components/CapabilityBuildingPrograms/IcAgileIcpAcc';
import SafeFlipbook from './Components/CapabilityBuildingPrograms/SafeFlipbook';
import DasaFlipbook from './Components/CapabilityBuildingPrograms/DasaFlipbook';
import DaiDal from './Components/ExperimentalLearningPrograms/DaiDal';
import DaiEac from './Components/ExperimentalLearningPrograms/DAiEac';
import DaiEsm from './Components/ExperimentalLearningPrograms/DaiEsm';
import DaiEacFlipbook from './Components/ExperimentalLearningPrograms/DaiEacFlipbook';
import DaiEsmFlipbook from './Components/ExperimentalLearningPrograms/DaiEsmFlipbook';
import DaiDalFlipbook from './Components/ExperimentalLearningPrograms/DaiDalFlipbook';
import ExecutiveCoaching from './Components/Coaching/ExecutiveCoaching';
import TeamCoaching from './Components/Coaching/TeamCoaching';
import Mentoring from './Components/Mentoring/Mentoring';
import YoutubeVideos from './Components/Resources/YoutubeVideos';
import Blogs from './Components/Blogs/Blog';
import ReusableTemplates from './Components/Resources/ReusableTemplates';
import Workbook from './Components/Resources/Workbook';
import CustomSlider from './Components/Includes/CustomSlider';
import IcAgileIcpAcc from './Components/CapabilityBuildingPrograms/IcAgileIcpAcc';

function App() {
  return (
    <div>
      <Router>
        <TopMenubar />
        <Switch>
          <Route path="/agility" exact component={Home}></Route>
          <Route path="/about-us" component={About}></Route>
          <Route path="/contact-us" component={Contact}></Route>
          <Route path="/capability-building-programs/ic-agile" component={IcAgile}></Route>
          <Route path="/capability-building-programs/dasa" component={Dasa}></Route>
          <Route path="/capability-building-programs/safe" component={Safe}></Route>
          <Route path="/assessments" component={Assessments}></Route>
          <Route path="/ic-aglie/icp-acc/" component={IcAgileIcpAcc}></Route>
          <Route path="/safe-flipbook" component={SafeFlipbook}></Route>
          <Route path="/dasa-flipbook" component={DasaFlipbook}></Route>
          <Route path="/experimental-learning-programs/dai-dal" component={DaiDal}></Route>
          <Route path="/experimental-learning-programs/dai-esm" component={DaiEsm}></Route>
          <Route path="/experimental-learning-programs/dai-eac" component={DaiEac}></Route>
          <Route path="/dai-dal-flipbook" component={DaiDalFlipbook}></Route>
          <Route path="/dai-eac-flipbook" component={DaiEsmFlipbook}></Route>
          <Route path="/dai-esm-flipbook" component={DaiEacFlipbook}></Route>
          <Route path="/executive-coaching" component={ExecutiveCoaching}></Route>
          <Route path="/team-coaching" component={TeamCoaching}></Route>
          <Route path="/mentoring" component={Mentoring}></Route>
          <Route path="/youtube-videos" component={YoutubeVideos}></Route>
          <Route path="/blogs" component={Blogs}></Route>
          <Route path="/reusable-templates" component={ReusableTemplates}></Route>
          <Route path="/assessments" component={Assessments}></Route>
          <Route path="/work-books" component={Workbook}></Route>
          <Route path="/custom-slider" component={CustomSlider}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
