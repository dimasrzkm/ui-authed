import FormResetPassword from "../components/Fragments/FormResetPassword";
import AuthLayout from "../components/Layouts/AuthLayout";

const ResetPasswordPage = () => {
  return (
    <AuthLayout
      srcHeroImage="./images/bg-reset-password.svg"
      descHeroSection="Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa sama jasa para pahlawan."
    >
      <AuthLayout.Title>Atur ulang kata sandi</AuthLayout.Title>
      <AuthLayout.Description>
        Biar nanti nggak lupa lagi sama kata sandinya, disimpen di password
        manager ya, bang!
      </AuthLayout.Description>
      <FormResetPassword />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
