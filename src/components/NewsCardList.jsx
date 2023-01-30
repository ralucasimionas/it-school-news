import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const { newsList } = props;
  return (
    <Container>
      <Row>
        {newsList.map((news) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={news.id}>
            <NewsCard
              id={news.id}
              title={news.title}
              thumbnail={news.thumbnail}
              description={news.description}
              hasCloseButton={news.hasCloseButton}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsCardList;
