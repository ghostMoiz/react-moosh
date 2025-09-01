interface Props {
  onClick: () => void;
}

const DisButton = ({ onClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      DisButton
    </button>
  );
};

export default DisButton;
