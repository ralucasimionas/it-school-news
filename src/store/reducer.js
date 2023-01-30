export const initialState = {
  favorites: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      const isInList = state.favorites.find((news) => {
        return news.id === action.payload.id;
      });

      if (isInList) {
        return state;
      } else {
        const newState = {
          favorites: [action.payload, ...state.favorites],
        };
        return newState;
      }
    }

    case "REMOVE_FROM_FAVORITES": {
      const filteredNews = state.favorites.filter((news) => {
        return news.id !== action.payload;
      });

      const newState = {
        favorites: filteredNews,
      };

      return newState;
    }

    default: {
      return state;
    }
  }
}
