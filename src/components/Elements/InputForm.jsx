import Input from "../Input";
import Label from "../Label";

const InputForm = ({ name, type, placeholder, labelInput }) => {
  return (
    <div>
      <Label forWho={name}>{labelInput}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
