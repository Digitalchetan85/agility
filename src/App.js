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
import SafeFlipbook from './Components/CapabilityBuildingPrograms/SafeFlipbook';
import DasaFlipbook from './Components/CapabilityBuildingPrograms/DasaFlipbook';
import ExecutiveCoaching from './Components/Coaching/ExecutiveCoaching';
import TeamCoaching from './Components/Coaching/TeamCoaching';
import Mentoring from './Components/Mentoring/Mentoring';
import YoutubeVideos from './Components/Resources/YoutubeVideos';
import Blogs from './Components/Blogs/Blog';
import ReusableTemplates from './Components/Resources/ReusableTemplates';
import Workbook from './Components/Resources/Workbook';
import CustomSlider from './Components/Includes/CustomSlider';
import IcAgileIcpAcc from './Components/CapabilityBuildingPrograms/IcAgileIcpAcc';
import IcAgileIcpCat from './Components/CapabilityBuildingPrograms/IcAgileIcpCat';
import IcAgileIcpEnt from './Components/CapabilityBuildingPrograms/IcAgileIcpEnt';
import IcAgileIcpOrg from './Components/CapabilityBuildingPrograms/IcAgileIcpOrg';
import IcAgileIcpPdv from './Components/CapabilityBuildingPrograms/IcAgileIcpPdv';
import IcAgileIcpAtf from './Components/CapabilityBuildingPrograms/IcAgileIcpAtf';
import SafeSsm from './Components/CapabilityBuildingPrograms/SafeSsm';
import SafeSasm from './Components/CapabilityBuildingPrograms/SafeSasm';
import SafePopm from './Components/CapabilityBuildingPrograms/SafePopm';
import SafeLpm from './Components/CapabilityBuildingPrograms/SafeLpm';
import ExperientialLeraningPrograms from './Components/ExperimentalLearningPrograms/ExperientialLeraningPrograms';
import DaiDal from './Components/ExperimentalLearningPrograms/DaiDal';
import DaiEsm from './Components/ExperimentalLearningPrograms/DaiEsm';
import DaiEac from './Components/ExperimentalLearningPrograms/DaiEac';

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
          <Route path="/ic-agile/icp-acc/" component={IcAgileIcpAcc}></Route>
          <Route path="/ic-agile/icp-cat/" component={IcAgileIcpCat}></Route>
          <Route path="/ic-agile/icp-ent/" component={IcAgileIcpEnt}></Route>
          <Route path="/ic-agile/icp-org/" component={IcAgileIcpOrg}></Route>
          <Route path="/ic-agile/icp-pdv/" component={IcAgileIcpPdv}></Route>
          <Route path="/ic-agile/icp-atf/" component={IcAgileIcpAtf}></Route>
          <Route path="/capability-building-programs/safe" component={Safe}></Route>
          <Route path="/safe5-sa" component={SafeFlipbook}></Route>
          <Route path="/safe5-ssm" component={SafeSsm}></Route>
          <Route path="/safe5-sasm" component={SafeSasm}></Route>
          <Route path="/safe5-popm" component={SafePopm}></Route>
          <Route path="/safe5-lpm" component={SafeLpm}></Route>
          <Route path="/capability-building-programs/dasa" component={Dasa}></Route>
          <Route path="/assessments" component={Assessments}></Route>
          <Route path="/dasa-flipbook" component={DasaFlipbook}></Route>
          <Route path="/experiential-learning-programs" component={ExperientialLeraningPrograms}></Route>
          <Route path="/dai-dal" component={DaiDal}></Route>
          <Route path="/dai-esm" component={DaiEsm}></Route>
          <Route path="/dai-eac" component={DaiEac}></Route>
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
