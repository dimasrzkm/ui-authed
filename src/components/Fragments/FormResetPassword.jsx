import InputForm from "../Elements/InputForm"

const FormResetPassword = () => {
  return (
    <form method="POST" action="/" className="flex flex-col gap-y-4">
      <InputForm
        labelInput="Kata Sandi Baru"
        name="password"
        type="password"
        placeholder="********"
      />
      <InputForm
        labelInput="Konfirmasi Kata Sandi"
        name="password_confirm"
        type="password_confirm"
        placeholder="********"
      />
      <button
        type="submit"
        className="bg-[#4F46E5] text-white tracking-wide p-4 rounded-md font-semibold border-none outline-0 hover:bg-indigo-600 hover:cursor-pointer transition"
      >
        Atur Ulang
      </button>
    </form>
  )
}

export default FormResetPassword