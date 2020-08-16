import axios from "axios";

export const STORE_TEXT = "STORE_TEXT";
export const GET_STORY = "GET_STORY";

export function storeText(inputState) {
  const url = `http://localhost:5000/api/users`;

  const { userName, text } = inputState;

  const request = axios({
    method: "post",
    url: url,
    data: {
      userName,
      text,
    },
  });

  return {
    type: STORE_TEXT,
    payload: request,
  };
}

export function getStory(user) {
  const url = `http://localhost:5000/api/users`;

  const request = axios({
    method: "get",
    url: url,
  });

  return {
    type: GET_STORY,
    payload: request,
  };
}
