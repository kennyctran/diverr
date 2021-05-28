import MuiButton from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default function Button({ text, onClick }) {
  return (
    <MuiButton
      onClick={onClick}
      color="secondary"
      variant="outlined"
      endIcon={<AddIcon />}
    >
      {text}
    </MuiButton>
  );
}
