import { shallow } from "enzyme";
import LoggedOutNav from "../nav/LoggedOutNav";
import { makeStyles } from "@material-ui/core/styles";

const classes = {
  menuItem: {
    margin: "auto",
    cursor: "pointer",
    color: "black",
    fontWeight: 400,
  },
  menu: {
    display: "inline-block",
  },
  icon: {
    color: "black",
  },
};

xdescribe("LoggedOutNav", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LoggedOutNav classes={classes} />);
  });

  describe("Links", () => {
    it("should contain a button to sign in", () => {
      expect(wrapper.find('[data-testid="signIn"]').text()).toMatch(
        /sign in/gi
      );
    });
  });
});
