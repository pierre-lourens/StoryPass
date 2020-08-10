import { STORE_TEXT } from "../actions/index";
import { GET_STORY } from "../actions/index";

/* this slice of state represents the story
 * each object within the state array contains
 * - an author property
 * - a 'text' property with their contribution to the story
 * The index within the array correlates to the order of the story
 */

export default function (state = [], action) {
  switch (action.type) {
    case STORE_TEXT:
      return [...state];
    case GET_STORY:
      if (action.payload.data) {
        return action.payload.data;
      } else {
        return state;
      }
    default:
      return state;
  }
}
