import { Suspense } from "react";

import Skeleton from "../Skeleton";

import CategorySection from "./CategorySection";
import GuestProfile from "./GuestProfile";
import * as S from "./style";

const Dashboard = () => {
  return (
    <S.Container>
      <GuestProfile />
      <S.CategorySectionWrapper>
        <Suspense fallback={<Skeleton isLarge={true} />}>
          <CategorySection />
        </Suspense>
      </S.CategorySectionWrapper>
    </S.Container>
  );
};

export default Dashboard;
