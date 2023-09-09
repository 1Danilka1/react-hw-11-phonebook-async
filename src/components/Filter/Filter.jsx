export default function SearchFilter({ onFilterChange }) {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" id="filter" onChange={onFilterChange} />
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const Filter = ({ onFilterChange }) => {
//   const contacts = useSelector((state) => state.contacts.items);

//   const [searchTerm, setSearchTerm] = useState('');


//   useEffect(() => {
//     onFilterChange(searchTerm); 
//   }, [searchTerm, onFilterChange]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search contacts..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Filter;