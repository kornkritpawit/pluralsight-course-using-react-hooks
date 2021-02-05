const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.map((item, index) => {
      if (item.id === action.sessionId) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }
  switch (action.type) {
    case 'setSpeakerList': {
      console.log(action.data);
      return action.data;
    }
    case 'favorite': {
      console.log(action);
      return updateFavorite(true);
    }
    case 'unfavorite': {
      console.log(action.sessionId);
      return updateFavorite(false);
    }
    default:
      return state;
  }
};
export default speakersReducer;
