import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/action";
import { FavoritesContext } from "../store/context";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
  const { id, title, thumbnail, description, hasCloseButton } = props;
  const { favoriteDispatch } = useContext(FavoritesContext);

  function handleRemoveFromFavorites(newsId) {
    const actionResult = removeFromFavorites(newsId);

    favoriteDispatch(actionResult);
  }

  return (
    <Card
      className={`${styles.newsCard} h-100 d-flex flex-column justify-content-between align-items-center`}
    >
      <Link to={`/news/${encodeURIComponent(id)}`}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasCloseButton && (
        <Button
          variant="light"
          onClick={() => {
            handleRemoveFromFavorites(id);
          }}
        >
          {" "}
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}

export default NewsCard;
