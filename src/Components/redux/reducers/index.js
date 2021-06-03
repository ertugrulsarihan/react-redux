import { combineReducers } from "redux";
import courses from "./CourseReducers";

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;
