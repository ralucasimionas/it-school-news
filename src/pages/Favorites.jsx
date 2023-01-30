import { useEffect } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { FavoritesContext } from "../store/context";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

function Favorites() {
  const { favoriteState } = useContext(FavoritesContext);

  const { favorites } = favoriteState;

  //eslint-disable-next-line
  const [_, setLocalStorageState] = useLocalStorage("favorites", favoriteState);

  useEffect(() => {
    setLocalStorageState(favoriteState);
  }, [favoriteState, setLocalStorageState]);

  console.log("favNews", favorites);
  return (
    <Layout>
      <Container>
        <h1 className="mb-5 pt-3">Stirile tale favorite</h1>
        {favorites.length === 0 ? (
          <p>Momentan nu ai nici o știre favorită.</p>
        ) : (
          <NewsCardList newsList={favorites} />
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
