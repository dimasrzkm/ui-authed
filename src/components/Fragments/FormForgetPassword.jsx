import { Fragment } from "react";
import InputForm from "../Elements/InputForm";
import { Link } from "react-router";

const FormForgetPassword = () => {
  return (
    <Fragment>
      <form method="POST" action="/" className="flex flex-col gap-y-4">
        <InputForm
          labelInput="Email"
          name="email"
          type="text"
          placeholder="johndoe@gmail.com"
        />
        <button
          type="submit"
          className="bg-[#4F46E5] text-white tracking-wide p-4 rounded-md font-semibold border-none outline-0 hover:bg-indigo-600 hover:cursor-pointer transition"
        >
          Euy!
        </button>
      </form>
      <p className="text-center font-semibold text-[#4B5563] tracking-tight">
        Lah, inget lagi kata sandinya?{" "}
        <Link to="/" className="text-[#4F46E5]">
          Login!
        </Link>{" "}
      </p>
    </Fragment>
  );
};

export default FormForgetPassword;
