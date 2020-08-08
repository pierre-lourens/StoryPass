import { STORE_TEXT } from "../actions/index";

/* this slice of redux state is used to trigger updates
 * doing this means that functions like STORE_TEXT can remain pure
 * and not have to return the story on the back end. Instead, this
 * reducer can help us know when to trigger another API call for GET_STORY
 */

export default function (state = [], action) {
  switch (action.type) {
    case STORE_TEXT:
      console.log("updates reducer firing because of STORE_TEXT");
      console.log("updates state is now ", [...state, action.payload.data]);
      return [...state, action.payload.data];
    default:
      return state;
  }
}
