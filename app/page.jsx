const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");
const { default: Documentation } = require("../components/documentation");
const { default: Pricing } = require("../components/pricing");

export default function App() {
  return (
    <ScreenLayout>
      <div className="relative top-auto lg:top-[72px]">
        <Header />
        <section id="documentation">
          <Documentation />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </div>
    </ScreenLayout>
  );
}
