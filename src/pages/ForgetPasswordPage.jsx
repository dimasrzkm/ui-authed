import FormForgetPassword from "../components/Fragments/FormForgetPassword";
import AuthLayout from "../components/Layouts/AuthLayout";

const ForgetPasswordPage = () => {
  return (
    <AuthLayout
      srcHeroImage="./images/bg-forget-password.svg"
      descHeroSection="Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa sama jasa para pahlawan."
    >
      <AuthLayout.Title>Lupa kata sandi</AuthLayout.Title>
      <AuthLayout.Description>
        Masukkan email yang kamu daftarkan sebelumnya, nanti kamu bakal dikirim
        email.
      </AuthLayout.Description>
      <FormForgetPassword />
    </AuthLayout>
  );
};

export default ForgetPasswordPage;
