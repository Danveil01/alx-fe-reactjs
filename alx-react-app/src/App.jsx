import Header from './Header';
import WelcomeMessage from './components/WelcomeMessage'; // Add this line
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Include the WelcomeMessage component here */}
      <Header/>
      <WelcomeMessage />
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App;