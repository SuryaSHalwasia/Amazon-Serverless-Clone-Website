import React, { useEffect, useState } from 'react';
import { callAPI } from '../utils/CallAPI';
import { useNavigate, createSearchParams } from 'react-router-dom'
const SearchBar = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("All")
  const navigate = useNavigate()
  const onHandleSubmit = (ev) => { 
    ev.preventDefault()
    navigate({
      pathname:"search",
      search:`${
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`
        })
      }`

    })
      
    setSearchTerm("")
    setCategory("All")
   }
  const getSuggestions = async () => {
    try {
      const suggestionsResults = await callAPI('data/suggestions.json');
      setSuggestions(suggestionsResults);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  const filterSuggestions = () => {
    return suggestions.filter((suggestion) => {
      const currentSearchTerm = searchTerm.toLowerCase();
      const title = suggestion.title.toLowerCase();
      return title.startsWith(currentSearchTerm);
    });
  };

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazon-yellow rounded">
        <select onChange={(e)=> setCategory(e.target.value)} className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobile</option>
        </select>
        <input
          className="flex items-center grow h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-[27px] m-auto stroke-slate-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {searchTerm && (
        <div className="bg-white text-black w-full z-40 absolute">
          {filterSuggestions().slice(0,10).map((suggestion) => (
            <div key={suggestion.id} onClick={() => setSearchTerm(suggestion.title)}>{suggestion.title} </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
