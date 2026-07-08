import WritingHeader from "../components/writing/WritingHeader";
import TopicFilter from "../components/writing/TopicFilter";
import ArticleFeed from "../components/writing/ArticleFeed";
import StillCurious from "../components/home/StillCurious";

import "./Writing.css";

export default function Writing() {
  return (
    <div className="writing-page">
      <WritingHeader />
      <TopicFilter />
      <ArticleFeed />
      <StillCurious />
    </div>
  );
}