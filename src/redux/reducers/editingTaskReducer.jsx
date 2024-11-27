const initialState = null;

const editingTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EDITING_TASK":
      return action.payload;
    case "CLEAR_EDITING_TASK":
      return null;
    default:
      return state;
  }
};

export default editingTaskReducer;