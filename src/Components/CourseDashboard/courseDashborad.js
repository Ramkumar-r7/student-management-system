import CourseCards from "./CourseCards/CourseCards";
import CourseSelectorAndSearch from "./CourseSelectorAndSearch/courseSelectorAndSearch";
import "./courseDashboard.scss";
const CourseDashborad = () => {
  return (
    <div id="CourseDashboard">
      <CourseSelectorAndSearch />
      <p className="course-count m-0">23 Courses</p>
      <CourseCards />
    </div>
  );
};

export default CourseDashborad;
