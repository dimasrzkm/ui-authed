const Input = ({ type, name, classname, placeholder }) => {
  return (
    <input
      id={name}
      type={type}
      name={name}
      className={
        classname ??
        `w-full bg-gray-200 text-black pl-3 py-3 rounded outline-1.5 outline-gray-200 focus:outline-1.5 focus:outline-gray-300 transition`
      }
      placeholder={placeholder}
    />
  );
};

export default Input;
