const AuthImageHero = ({ children, srcImage  }) => {
  return (
    <section
      className="bg-linear-to-b from-[#3730A3] to-[#312E81] w-full relative hidden lg:block flex-1/2"
      aria-hidden="true"
    >
      <img
        src={srcImage}
        alt="background"
        className="overflow-hidden w-full h-full"
      />
      <div className="absolute bottom-10 left-10 max-w-lg">
        <p className="text-sm tracking-widest font-semibold text-white/60">
          NAMANYAJUGABELAJAR.IO
        </p>
        <p className="text-2xl text-white">
          {children}
        </p>
      </div>
    </section>
  );
};

export default AuthImageHero;
