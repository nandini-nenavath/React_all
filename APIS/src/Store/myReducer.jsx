const initialMyReducer = {
    value: [],
  };
  
  const myReducer = (state = initialMyReducer, action) => {
    switch (action.type) {
      case "ADD_PHOTO":
        return { ...state, value: [...state.value, action.payload] };
      case "REMOVE_PHOTO":
        return { ...state, value: state.value.filter((photo) => photo.id !== action.payload.id) };
      default:
        return state;
    }
  };
  
  export default myReducer;
  