const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Navbar } = require("../components/navbar");
const { default: Header } = require("../components/header");

export default function App() {
  return (
    <ScreenLayout>
      <Navbar />
      <Header />
    </ScreenLayout>
  );
}
