import { useContext } from 'react'; // Import hook
import UserContext from './UserContext'; // Import the specific context

function UserDetails() {
  // Use the useContext hook to access the data
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;