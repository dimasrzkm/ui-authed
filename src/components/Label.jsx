const Label = ({ forWho, classname, children }) => {
  return (
    <label
      htmlFor={forWho}
      className={classname ?? "font-semibold text-md block mb-2"}
    >
      {children}
    </label>
  );
};

export default Label;
