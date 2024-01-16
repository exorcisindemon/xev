const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");
const { default: Documentation } = require("../components/documentation");
const { default: Pricing } = require("../components/pricing");
const { default: Footer } = require("../components/footer");

export default function App() {
  return (
    <ScreenLayout>
      <div className="relative top-auto lg:top-[72px]">
        <section id="header">
          <Header />
        </section>
        <section id="documentation">
          <Documentation />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Footer />
      </div>
    </ScreenLayout>
  );
}
