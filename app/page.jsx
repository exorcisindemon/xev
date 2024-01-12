const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");

export default function App() {
  return (
    <ScreenLayout>
      <div className="relative top-auto lg:top-[92px]">
        <Header />
      </div>
    </ScreenLayout>
  );
}
