import FormSignIn from "../components/Fragments/FormSignIn";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout
      srcHeroImage="./images/bg-sign-in.svg"
      descHeroSection="Belajar secara online semakin mudah – tetep belajar walaupun pake kuota dari Kemendikbud hehe~"
    >
      <AuthLayout.Title>Masuk ke akun kamu</AuthLayout.Title>
      <AuthLayout.Description>
        Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
        cita-citata sejak dalam embrio!
      </AuthLayout.Description>
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;
