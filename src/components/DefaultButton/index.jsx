import "./styles.css";

export default function DefaultButton({ children, ...props }) {
  return (
    <button className="default-button" {...props}>
      {children}
    </button>
  );
}