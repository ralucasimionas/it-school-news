import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import Favorites from "./pages/Favorites";
import { useReducer } from "react";
import { favoritesReducer, initialState } from "./store/reducer";
import { FavoritesContext } from "./store/context";
import { useLocalStorage } from "./utils/hooks/useLocalStorage";

function App() {
  const [initialLocalStorageState] = useLocalStorage("favorites", initialState);
  const [favoriteState, favoriteDispatch] = useReducer(
    favoritesReducer,
    initialLocalStorageState
  );

  return (
    <div className="App">
      <FavoritesContext.Provider value={{ favoriteState, favoriteDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
