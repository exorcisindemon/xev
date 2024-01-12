const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");

export default function App() {
  return (
    <ScreenLayout>
      <Header />
      <Header />
      <Header />
    </ScreenLayout>
  );
}
