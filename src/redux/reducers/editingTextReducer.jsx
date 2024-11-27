const initialState = {
  editingText: "",
};

const editingTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EDITING_TEXT":
      return { ...state, editingText: action.payload };
    default:
      return state;
  }
};

export default editingTextReducer;
