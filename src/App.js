import Nav from './components/Nav';
import StartComponent from './components/StartComponent';
import TermsOfAction from './components/TermsOfAction';
import Prizes from './components/Prizes';
import SponsorsProducts from './components/SponsorsProducts';
import Map from './components/Map';
import Footer from './components/Footer';
import './style/main.scss';

function App() {
  return (
    <>
    <Nav />
    <div className="container">
    <StartComponent />
    <TermsOfAction />
    <Prizes />
    <SponsorsProducts />
    <Map />
    </div>
    <Footer />
</>
  );
}

export default App;
