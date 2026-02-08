export default function UserProfile() {
  return (
    /* Responsive Container: 
       p-4 on small, p-8 on medium+
       max-w-xs on small, max-w-sm on medium+ */
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* Responsive Image: 
          w-24/h-24 on small, w-36/h-36 on medium+ */}
      <img 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" 
        src="https://via.placeholder.com/150" 
        alt="User" 
      />
      
      {/* Responsive Heading: 
          text-lg on small, text-xl on medium+ */}
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      
      {/* Responsive Paragraph: 
          text-sm on small, text-base on medium+ */}
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}