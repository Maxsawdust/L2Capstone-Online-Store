import "./InputField.css";

export default function InputField({
  name,
  labelText,
  type = "text",
  handleChange,
  errorCase,
}) {
  // MAKE A SHOW PASSWORD BUTTON
  return (
    <div className="InputField">
      <input type={type} name={name} onChange={handleChange} placeholder="" />
      <span className="inputField-label">{labelText}</span>
      <p className="error-message">{errorCase}</p>
    </div>
  );
}
