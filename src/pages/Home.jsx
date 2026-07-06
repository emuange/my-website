import PageShell from "../components/Pageshell/PageShell";
import MissionCard from "../components/home/MissionCard";
import FeaturedArticle from "../components/home/FeaturedArticle";
import FeatureStack from "../components/home/FeatureStack";
import StillCurious from "../components/home/StillCurious";

export default function Home() {
  return (
    <PageShell>
      <MissionCard />
      <FeaturedArticle />
      <FeatureStack />
      <StillCurious />
    </PageShell>
  );
}