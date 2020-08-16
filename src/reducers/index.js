const initialState = {
  cards: [
    {
      id: 1,
      title: "Vinay",
      body: "This is Vinay",
    },
    {
      id: 2,
      title: "Kempa",
      body: "This is Kempa",
    },
    {
      id: 3,
      title: "Meghana",
      body: "This is Meghana",
    },
  ],
  users: [],
};

export const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_CARD": {
      return {
        ...state,
        cards: (state.cards || []).filter((card) => card.id != action.payload),
      };
    }
    case "FETCH_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};
