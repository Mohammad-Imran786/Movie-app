import { createContext, useContext, useState, useEffect } from 'react';

const MyListContext = createContext();

export const MyListProvider = ({ children }) => {

  const [myList, setMyList] = useState(() => {
    const storedList = localStorage.getItem('myList');
    return storedList ? JSON.parse(storedList) : [];
  })

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
  }, [myList])

  const addToMyList = (movie) => {
    if (!myList.some(item => item.id === movie.id)) {
      setMyList(prev => [...prev, movie]);
      alert("This movie is added into your list!")
    }
  }

  const removeFromMyList = (movieId) => {
    alert("Movie Removed!")
    setMyList(prev => prev.filter(movie => movie.id !== movieId));
  }

  return (
    <MyListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {children}
    </MyListContext.Provider>
  )
};

export const useMyList = () => useContext(MyListContext);
