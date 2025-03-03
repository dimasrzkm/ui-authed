import { Link } from "react-router";
import AuthImageHero from "../Fragments/AuthImageHero";

const AuthLayout = ({ children, srcHeroImage, descHeroSection }) => {
  return (
    <main className="h-screen w-full lg:flex">
      <section className="px-12 lg:px-28 pt-[50px] flex flex-col gap-y-6 flex-1/2">
        <Link to="/">
          <img
            src="./images/logo.svg"
            alt="logo"
            className="h-12 w-12"
            loading="lazy"
          />
        </Link>
        {children}
      </section>
      <AuthImageHero srcImage={`${srcHeroImage}`}>
        {descHeroSection}
      </AuthImageHero>
    </main>
  );
};

const Title = ({ children }) => {
  return <h1 className="text-3xl font-semibold">{children}</h1>;
};

const Description = ({ children }) => {
  return <p className="text-md text-gray-600 leading-relaxed">{children}</p>;
};

AuthLayout.Title = Title;
AuthLayout.Description = Description;

export default AuthLayout;
