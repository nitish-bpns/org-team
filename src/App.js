import { Route, Routes} from 'react-router-dom';
import "./App.css";
import Landing from './pages/Landing';
import Overall from './components/Overall';
import Logistics from './components/Logistics';
import Tech from './components/Tech';
import Spons from './components/Spons';
import Media from './components/Media';
import Outreach from './components/Outreach';
import Events from './components/Events';

function App() {
  return <>

  <Routes>
      <Route exact path="/" element={<Landing/>} /> 
      <Route path="/overall" element={<Overall/>} />
      <Route path="/logistics" element={<Logistics/>} /> 
      <Route path="/event" element={<Events/>} /> 
      <Route path="/tech" element={<Tech/>} /> 
      <Route path="/spons" element={<Spons/>} /> 
      <Route path="/media" element={<Media/>} /> 
      <Route path="/outreach" element={<Outreach/>} /> 
    </Routes>
  </>;
}

export default App;
