import Header from ' ./Header';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage'; // Add this line
import MainContent from './MainContent';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import Footer from './Footer';

function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
  return (
    <>
      {/* Include the WelcomeMessage component here */}
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <WelcomeMessage />
      <MainContent />
      <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>
      <Footer />
    </>
  )
}

export default App;