import { customRender } from "@alura/test-commons/react-testing-library";
import { AllProviders } from "../../components/AllProviders";
import { HomeScreen } from "./HomeScreen";

const render = customRender((props) => <AllProviders {...props} />);

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
