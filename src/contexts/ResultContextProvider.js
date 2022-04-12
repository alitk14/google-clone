import React, { useContext, createContext, useState, useEffect } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('elon musk');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(` ${baseUrl}${type} `, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "0ada4cb2c5msh4efe4d7c72f55a0p1b03a5jsnd66a0ee0ea24",
      },
    });
    
    const data = await response.json();
    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    console.log(data);
    setIsLoading(false);
};
  return (
      <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
      >
      {children}
    </ResultContext.Provider>
  );
};
  
export const useResultContext = () => useContext(ResultContext);
