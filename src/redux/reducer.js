const SET_lOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export function login(email, password) {
  console.log("email>>>>>", email);
  return dispatch => {
    // dispatch(setLoginPending(true));
    // dispatch(setLoginSuccess(false));
    // dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      // dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

// function setLoginPending(isLoginPending) {
//   return {
//     type: SET_lOGIN_PENDING,
//     isLoginPending
//   };
// }

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(isLoginError) {
  return {
    type: SET_LOGIN_ERROR,
    isLoginError
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === "admin@example.com" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}

export default function reducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    isLoginError: null
  },
  action
) {
  switch (action.type) {
    case SET_lOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });
    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });
    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoginError: action.isLoginError
      });
    default:
      return state;
  }
}
