import "./styles.css";

export default function DefaultInput({ icon: Icon, ...props }) {
  return (
    <div className="default-input">
      {Icon && <Icon size={20} />}
      <input {...props} />
    </div>
  );
}