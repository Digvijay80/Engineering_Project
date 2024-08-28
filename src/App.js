import Midlevel from './components/Midlevel';
import Header from './components/Header';
import Menubar from './components/Menubar';
import Home from './components/Home';
import Card from './components/Card';
import Footer from './components/Footer';
import Getintouch from './components/Getintouch';
import Lastfooter from './components/Lastfooter';
import Endfooter from './components/Endfooter';

function App() {
  return (
    <>
    <Header/>
    <Menubar/>
      <Home/>
      <Midlevel/>
     <Card/>
    <Footer/>
    <Getintouch/>
    <Lastfooter/>
    <Endfooter/>
    </>
  );
}

export default App;
