import { shallow } from "enzyme";
import Error404 from "../Error404";
import Image from "next/image";

describe("Error404", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Error404 timer={10} />);
  });
  describe("Error 404 Message", () => {
    it("should render a message for a non-existing page", () => {
      expect(wrapper.find('[data-testid="message"]')).toHaveLength(1);
      expect(wrapper.find('[data-testid="message"]').text()).toMatch(
        /Whoops! Looks like you're in a little too deep. Let's send you back to shore in.../
      );
    });

    it("should render a countdown depending on the passed in timer prop", () => {
      expect(wrapper.find('[data-testid="message"]').text()).toMatch(/10$/);
    });

    it("should display the 404 error", () => {
      expect(wrapper.find('[data-testid="status"]').text()).toEqual("404");
    });

    it("should include an error image", () => {
      expect(wrapper.find(Image)).toHaveLength(1);
    });
  });
});
