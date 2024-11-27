const initialState = "";

const editingTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EDITING_TEXT":
      return action.payload;
    case "CLEAR_EDITING_TEXT":
      return "";
    default:
      return state;
  }
};

export default editingTextReducer;