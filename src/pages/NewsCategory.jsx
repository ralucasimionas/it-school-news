import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptors";

import NewsCardList from "../components/NewsCardList";
import { Pagination } from "../components/Pagination";

function NewsCategory() {
  const { categoryId } = useParams();
  const [queryParams] = useSearchParams();
  let currentPage = queryParams.get("page");

  if (!currentPage) {
    currentPage = 1;
  }

  const newsCategoryEndpoint = getNewsCategoryEndpoint(categoryId, currentPage);
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  let title = "";

  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "football":
      title = "Fotbal";
      break;
    case "fashion":
      title = "Fashion";
      break;
    case "film":
      title = "Film";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="mb-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
        <Pagination active={currentPage} pageUrl={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
