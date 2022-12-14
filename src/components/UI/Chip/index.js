import "./style.scss";

const Chip = (props) => {
  const { type, name } = props;
  let chipColor = "primary";

  switch (type) {
    case "primary":
      chipColor = "chip-primary";
      break;

    case "error":
      chipColor = "chip-error";
      break;

    case "warning":
      chipColor = "chip-warning";
      break;

    case "success":
      chipColor = "chip-success";
      break;

    case "secondary":
      chipColor = "chip-secondary";
      break;

    case "dark":
      chipColor = "chip-dark";
      break;
  }

  return (
    <div data-testid="ui-chip" className={`chip ${chipColor}`} {...props}>
      {name}
    </div>
  );
};

export default Chip;
