import { shallow } from "enzyme";
// import LogDisplayColumnOne from "../dashboard/LogDisplayColumnOne";
import data from "../../../lib/dummyData/dummyData";
import Card from "@material-ui/core/Card";

const log = data.userLogs.user.logs[0];

xdescribe("LogDisplayColumnOne", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LogDisplayColumnOne log={log} />);
  });

  describe("First card in LogDisplayColumnOne", () => {
    it("should contain three Cards for three sections", () => {
      expect(wrapper.find(Card)).toHaveLength(3);
    });

    it("should show the date of the dive", () => {
      expect(wrapper.find('[data-testid="date"]').text()).toMatch(/date/i);
    });

    it("should show the location of the dive", () => {
      expect(wrapper.find('[data-testid="location"]').text()).toMatch(
        /Bobo\'s Lagoon, Panama City, United States/
      );
    });

    it("should show the instructor of the dive", () => {
      expect(wrapper.find('[data-testid="instructor"]').text()).toMatch(
        /frank/i
      );
    });
  });
});
