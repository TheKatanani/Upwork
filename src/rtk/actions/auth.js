import axios from 'axios';
import { API } from '../../../API';
import { setUser, clearUser } from './usersSlice';

export const auth = (email, password) => async(dispatch) => {
  // Make an API call to authenticate the user
//   try {
//     await validationSchemaSignIn.validate({
//         email: formState.email,
//         password: formState.password,
//         isChecked: formState.isChecked
//     }, { abortEarly: false });
//     const res = await axios.post(`${API}/users/login`, {
//         email: formState.email,
//         password: formState.password
//     });
//     if (res.data) {
//         localStorage.setItem('token', res.data.token);
//         setIsAuthenticated(true)
//     }
// } catch (error) {
//     if (error.isAxiosError) {
//         dispatch({ type: ACTIONS.ERROR, errors: { isAxiosError: error.message } });
//     } else {
//         const errors = error.inner
//             ? error.inner.reduce((acc, { path, message }) => {
//                 acc[path] = message;
//                 return acc;
//             }, {})
//             : {};
//         dispatch({ type: ACTIONS.ERROR, errors });
//     }
// } finally {
//     dispatch({ type: ACTIONS.LOADING, isLoading: false });
// }
  // On success, set the user in the state
  dispatch(setUser({ email }));
};
