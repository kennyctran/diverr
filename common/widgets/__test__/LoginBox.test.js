import { shallow } from "enzyme";
import LoginBox from "../LoginBox";

xdescribe("LoginBox", () => {
  let wrapper;
  let props;
  const spy = jest.fn();
  beforeAll(() => {
    props = {
      provider: {
        id: "Google",
      },
      signIn: spy,
    };
    wrapper = shallow(
      <LoginBox provider={props.provider} signIn={props.signIn} />
    );
  });
  describe("LoginBox Contents", () => {
    it("should contain the company name in the box", () => {
      expect(wrapper.find('[data-testId="message"]').text()).toMatch(
        /diverr/gi
      );
    });

    it("should contain a button to sign in with Google", () => {
      expect(wrapper.find('[data-testId="google"]').text()).toMatch(/google/i);
    });

    it("should invoke the passed in signIn function when clicked", () => {
      const button = wrapper.find('[data-testId="google"]');
      expect(spy).toHaveBeenCalledTimes(0);
      button.simulate("click");
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith("Google");
    });
  });
});
