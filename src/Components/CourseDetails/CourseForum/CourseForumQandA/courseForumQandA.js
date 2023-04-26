import React from "react";
import CourseForumDropDown from "../CourseForumDropDown/courseForumDropDown";
import ForumQandA from "../../../ForumPage/ForumQandA/forumQandA";

const CourseForumQandA = () => {
  return (
    <div id="courseForumQandA">
      <CourseForumDropDown />
      <ForumQandA />
    </div>
  );
};

export default CourseForumQandA;
