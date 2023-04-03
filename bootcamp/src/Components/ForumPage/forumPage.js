import React from "react";
import ForumQandA from "./ForumQandA/forumQandA";
import ForumSearchDropDown from "./ForumSearchDropDown/forumSearchDropDown";
const ForumPage = () => {
  return (
    <div id="forumPage">
      <ForumSearchDropDown />
      <ForumQandA />
    </div>
  );
};

export default ForumPage;
