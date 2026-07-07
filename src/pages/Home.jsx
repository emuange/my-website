import MissionCard from "../components/home/MissionCard";
import FeaturedArticle from "../components/home/FeaturedArticle";
import FeatureStack from "../components/home/FeatureStack";
import StillCurious from "../components/home/StillCurious";
import ContentCard from "../components/content/ContentCard"

export default function Home() {
  return (
    <>
      <ContentCard />
      <MissionCard />
      <FeaturedArticle />
      <FeatureStack />
      <StillCurious />
    </>
  );
}