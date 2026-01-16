import WelcomeMessage from './components/WelcomeMessage'; // Add this line
import Header from './Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Include the WelcomeMessage component here */}
      <WelcomeMessage />
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App;