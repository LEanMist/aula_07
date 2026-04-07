import "./styles.module.css";

export default function DefaultInput({ icon: Icon, ...props }) {
  return (
    <div className="input-wrapper">
      {Icon && <Icon size={20} />}
      <input {...props} />
    </div>
  );
}