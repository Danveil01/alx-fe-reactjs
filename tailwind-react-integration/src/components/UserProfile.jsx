function UserProfile() {
  return (
    /* Card Hover: Lifting effect with shadow-xl */
    <div className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* Image Hover: Scale up slightly and transition smoothly */}
      <img 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto transform transition-transform duration-300 ease-in-out hover:scale-110" 
        src="https://via.placeholder.com/150" 
        alt="User" 
      />
      
      {/* Heading Hover: Color change indication */}
      <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h1>
      
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;