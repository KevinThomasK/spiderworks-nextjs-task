import MainContent from "../components/MainContent";
import LoadingContainer from "../components/LoadingContainer";
import { Suspense } from "react";

function HomePage() {
  return (
    <div>
      <Suspense fallback={<LoadingContainer />}>
        <MainContent />
      </Suspense>
    </div>
  );
}
export default HomePage;
