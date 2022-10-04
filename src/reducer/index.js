
const initialstate = {
  isLoading: false,
  users: null,
  errorMessage: null,
};
const formInitial = {
  isLoading: false,
  users: [],
};
export const pageListReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'USERS_LOAD_START':
      return {
        ...state,
        isLoading: true,
        users: null,
        errorMessage: null,
      };
    case 'USER_LOAD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case 'USER_LOAD_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export const formData = (state = formInitial, action) => {
  switch (action.type) {
    case 'FORM_DATA':
      return {
        ...state,
        isLoading: false,
        users: [...state.users,action.payload],
      };
      case "DELETE_DATA":
        return{
          ...state,
          isLoading:false,
          users:state.users.filter((item,i)=>i!=action.payload)
        }
     
      default:
        return state;
    }
  }

