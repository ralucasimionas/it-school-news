export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  const rawNewsList = apiResponse.response.results;
  const adaptedNews = rawNewsList.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });

  return adaptedNews;
}

export function getNewsDetails(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return {};
  }

  const rawNewsDetails = apiResponse.response.content;
  const adaptedNewsDetails = {
    title: rawNewsDetails.fields.headline,
    image: rawNewsDetails.fields.main,
    description: rawNewsDetails.fields.trailText,
    thumbnail: rawNewsDetails.fields.thumbnail,
    content: rawNewsDetails.fields.body,
    author: rawNewsDetails.fields.byline,
    date: rawNewsDetails.webPublicationDate,
  };

  return adaptedNewsDetails;
}
