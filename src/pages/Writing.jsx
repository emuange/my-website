import WritingHeader from "../components/writing/Writingheader";
import TopicFilter from "../components/writing/TopicFilter";
import ArticleFeed from "../components/writing/ArticleFeed";
import StillCurious from "../components/home/StillCurious";

export default function Writing() {
  return (
    <>
      <WritingHeader />
      <TopicFilter />
      <ArticleFeed />
      <StillCurious />
    </>
  );
}