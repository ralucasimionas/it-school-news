import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getNewsDetails } from "../api/adaptors";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import { addToFavorites } from "../store/action";
import { FavoritesContext } from "../store/context";
import { getFormattedDate } from "../utils/date";
import { useFetch } from "../utils/hooks/useFetch";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";
import styles from "./NewsDetails.module.css";

function NewsDetails() {
  let { newsId } = useParams();
  newsId = decodeURIComponent(newsId);

  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  const newsDetails = useFetch(newsDetailsEndpoint);
  const adaptedNewsDetails = getNewsDetails(newsDetails);

  const { title, description, image, thumbnail, date, author, content } =
    adaptedNewsDetails;

  console.log(adaptedNewsDetails);

  console.log(newsId);

  const [alertDisplay, setAlertDisplay] = useState(false);

  const { favoriteDispatch, favoriteState } = useContext(FavoritesContext);

  //eslint-disable-next-line
  const [_, setLocalStorageState] = useLocalStorage("favorites", favoriteState);

  useEffect(() => {
    setLocalStorageState(favoriteState);
  }, [favoriteState, setLocalStorageState]);

  function handleAddToFavorites(news) {
    const actionResult = addToFavorites(news);

    favoriteDispatch(actionResult);

    setAlertDisplay(true);

    setTimeout(() => {
      setAlertDisplay(false);
    }, 2000);
  }

  return (
    <Layout>
      {alertDisplay && (
        <Alert variant="success" id={styles.alert}>
          Succes! Poți vedea știrea accesând secțiunea Favorite.
        </Alert>
      )}
      <Container className={`${styles.newsDetails} my-5`}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: image }}
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{getFormattedDate(date)}</p>
              </div>
              <Button
                variant="success"
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    title: title,
                    description: description,
                    thumbnail: thumbnail,
                    hasCloseButton: true,
                  });
                }}
              >
                Adaugă la favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
