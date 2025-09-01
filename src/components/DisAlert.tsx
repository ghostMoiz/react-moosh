import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick: () => void;
}

const DisAlert = ({ children, onClick }: props) => {
  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default DisAlert;
