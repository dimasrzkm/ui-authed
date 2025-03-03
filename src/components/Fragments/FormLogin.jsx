import { Fragment } from "react";
import InputForm from "../Elements/InputForm";
import Input from "../Input";
import Label from "../Label";

const FormLogin = () => {
  return (
    <Fragment>
      <form method="POST" action="#" className="flex flex-col gap-y-4">
        <div>
          <Label forWho="first_name">Nama Lengkap</Label>
          <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-4">
            <Input type="text" name="first_name" placeholder="John" />
            <Input type="text" name="last_name" placeholder="Doe" />
          </div>
        </div>
        <InputForm
          labelInput="Email"
          name="email"
          type="text"
          placeholder="johndoe@gmail.com"
        />
        <InputForm
          labelInput="Password"
          name="password"
          type="password"
          placeholder="********"
        />
        <p className="text-xs leading-relaxed text-gray-700">
          Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
          Privacy Policy dari Namanyajugabelajar.io
        </p>
        <button
          type="submit"
          className="bg-[#4F46E5] text-white tracking-wide p-4 rounded-md font-semibold border-none outline-0 hover:bg-indigo-600 hover:cursor-pointer transition"
        >
          Mendaftar
        </button>
      </form>
    </Fragment>
  );
};

export default FormLogin;
