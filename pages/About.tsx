import { DarkLayout } from "./components/layouts/DarkLayout";
import { MainLayout } from "./components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
