import api from "../API/api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL"
};

export const fetchAll = () => async dispatch => {
  try {
    const res = await api.dCandidate().fetchAll();
    dispatch({
      type: ACTION_TYPES.FETCH_ALL,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
