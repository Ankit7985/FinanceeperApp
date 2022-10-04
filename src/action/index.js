import axios from 'axios';
const userLoad = () => ({
  type: 'USERS_LOAD_START',
});
const userLoadSuccess = users => ({
  type: 'USER_LOAD_SUCCESS',
  payload: users,
});
const userLoadError = errorMessage => ({
  type: 'USER_LOAD_ERROR',
  payload: errorMessage,
});
export {userLoad, userLoadSuccess, userLoadError};
export const getPageList = () => dispatch => {
  dispatch(userLoad());
  let url = 'https://fakestoreapi.com/products?limit=10';
  axios
    .get(url)
    .then(res => {
      dispatch(userLoadSuccess(res.data));
      console.log('ankitshukla----->', res.data);
    })
    .catch(err => {
      console.log(err);
      dispatch(userLoadError(err.message));
    });
};

export const formData=(payload)=>{
 return{
  type:"FORM_DATA",
  payload:payload
 } 
}
export const deleteFormData=(payload)=>{
  return{
    type:"DELETE_DATA",
    payload:payload
  }
}
