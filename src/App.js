import Header from './components/Header';
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
    <Header />
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
