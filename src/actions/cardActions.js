import axios from "axios";

export const deleteCard = (id) => {
  return {
    type: "DELETE_CARD",
    payload: id,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch({ type: "FETCH_USERS", payload: data });
    });
  };
};
