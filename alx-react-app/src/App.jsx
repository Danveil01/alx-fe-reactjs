import Header from './components/Header';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'; // Add this line
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Include the WelcomeMessage component here */}
      <Header/>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <WelcomeMessage />
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App;