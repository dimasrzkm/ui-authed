import { Link } from "react-router";
import InputForm from "../Elements/InputForm";
import Input from "../Input";
import Label from "../Label";
import { Fragment } from "react";

const FormSignIn = () => {
  return (
    <Fragment>
      <form method="POST" action="/" className="flex flex-col gap-y-4">
        <InputForm
          labelInput="Email"
          name="email"
          type="text"
          placeholder="johndoe@gmail.com"
        />
        <div className="flex justify-between items-center -mb-3">
          <Label forWho="password">Kata Sandi</Label>
          <Link to="/signup" className="text-[#4F46E5] font-semibold">
            Lupa Kata Sandi?
          </Link>
        </div>
        <Input type="password" name="password" placeholder="********" />
        <div className="flex items-center gap-x-2">
          <Input type="checkbox" name="remember_me" classname=" text-white" />
          <Label
            forWho="remember_me"
            classname="text-black font-semibold cursor-pointer"
          >
            Ingat saya
          </Label>
        </div>
        <button
          type="submit"
          className="bg-[#4F46E5] text-white tracking-wide p-4 rounded-md font-semibold border-none outline-0 hover:bg-indigo-600 hover:cursor-pointer transition"
        >
          Masuk
        </button>
      </form>
      <p className="text-center font-semibold text-[#4B5563] tracking-tight">
        Belum punya akun?{" "}
        <Link to="signup" className="text-[#4F46E5]">
          Daftar sekarang, gratis!
        </Link>{" "}
      </p>
    </Fragment>
  );
};

export default FormSignIn;
