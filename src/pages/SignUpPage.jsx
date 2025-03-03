import FormSignUp from "../components/Fragments/FormSignUp";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout
      srcHeroImage="./images/bg-sign-up.svg"
      descHeroSection="Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan
        nggak jadi beban kayak si Denis!"
    >
      <AuthLayout.Title>Bikin akun baru</AuthLayout.Title>
      <AuthLayout.Description>
        Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
        langsung jadi deh!
      </AuthLayout.Description>
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;
