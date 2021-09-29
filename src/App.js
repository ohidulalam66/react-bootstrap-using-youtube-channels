import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import YoutubeChannels from './components/YoutubeChannels/YoutubeChannels';

function App() {
  return (
    <>
    <Header/>
    <YoutubeChannels/>
    <Footer/>
    </>
  );
}

export default App;
