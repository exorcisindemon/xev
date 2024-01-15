import { LikeProvider } from "@/shared/hooks/likeContext";

const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");
const { default: Documentation } = require("../components/documentation");

export default function App() {
  return (
    <ScreenLayout>
      <LikeProvider>
        <div className="relative top-auto lg:top-[72px]">
          <Header />
          <Documentation />
        </div>
      </LikeProvider>
    </ScreenLayout>
  );
}
