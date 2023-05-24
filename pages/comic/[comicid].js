// styles import

// data imports
import { present } from "@/data/homeShow";

// layouts import
import MainLayout from "@/layout/mainLayout";

// fonts definitions

// library imports
import { useRouter } from "next/router";

export default function Home() {
  const routerPath = useRouter().asPath;
  return (
    <>
      <MainLayout title={"Home"}>
        <div className="content">{routerPath}</div>
      </MainLayout>
    </>
  );
}
