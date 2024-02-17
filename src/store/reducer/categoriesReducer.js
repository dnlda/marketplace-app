const initialState = {
    categories: [],
    activeCategory: null
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORIES':
        return { ...state, categories: action.payload };
      case 'SET_ACTIVE_CATEGORY':
        return { ...state, activeCategory: action.payload };
      default:
        return state;
    }
  };
  
  export default categoriesReducer;