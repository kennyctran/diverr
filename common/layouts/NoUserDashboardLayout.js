import Typography from "@material-ui/core/Typography";
import { signIn } from "next-auth/client";
import AddButton from "common/components/buttons/AddButton";

export default function NoUserDashboardLayout({ children }) {
  return (
    <>
      <AddButton text={"Please sign in"} onClick={signIn} />
    </>
  );
}
