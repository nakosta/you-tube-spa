const initialState = {
  newTask: "",
};

const newTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_TASK":
      return { ...state, newTask: action.payload };
    default:
      return state;
  }
};

export default newTaskReducer;
