const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");
const { default: Documentation } = require("../components/documentation");

export default function App() {
  return (
    <ScreenLayout>
      <div className="relative top-auto lg:top-[76px]">
        <Header />
        <Documentation />
      </div>
    </ScreenLayout>
  );
}
