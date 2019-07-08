import { 
  TASK_ONDRAGEND,
} from "./actionTypes";

export function taskOnDragEnd(payload) {
  return {
    type: TASK_ONDRAGEND,
    payload
  }
}
