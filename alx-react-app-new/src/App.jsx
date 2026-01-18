import Header from ' ./Header';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'; // Add this line
import MainContent from './MainContent';
import Counter from './components/Counter';
import Footer from './Footer';

function App() {
  return (
    <>
      {/* Include the WelcomeMessage component here */}
      <Header/>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <WelcomeMessage />
      <MainContent/>
      <Counter />
      <Footer/>
    </>
  )
}

export default App;