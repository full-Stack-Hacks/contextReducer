import "./button.css";

const Button = ({ text, onClick }) => {
  return (
    <div className="btn" onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
