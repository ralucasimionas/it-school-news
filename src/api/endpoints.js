const API_KEY = "cef4cf41-55a6-4fd3-888f-836bd41a0fbd";

export function getNewsCategoryEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `api-key=${API_KEY}&section=${category}&page-size=${pageSize}&page=${pageNumber}&show-fields=all`;

  return `https://content.guardianapis.com/search?${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `${newsId}?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${queryParams}`;
}
