import InstagramIcon from "@/public/icons/instagram-stroke-rounded";
import WhatsappIcon from "@/public/icons/whatsapp-stroke-rounded";

const Footer = () => {
  return (
    <footer className="bg-pbase text-pdark p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center"></div>
      <div className="text-center mt-4">
        <p className="font-bold">Entre em contato:</p>
        <p className="font-bold">(41) 98713-1095</p>
        <div className="flex items-center justify-center space-x-10 mt-4 mb-4">
          <div className="flex-1 border-t border-pdark"></div>
          <div className="flex gap-4 space-x-2">
            {/* Ícones de redes sociais */}
            <a className="flex gap-2" href="https://wa.me/c/554187131095">
              <WhatsappIcon className="transition-colors duration-500 text-black hover:text-white" />
            </a>
            <a
              className="flex gap-2"
              href="https://www.instagram.com/joicemaeli.estetica/?hl=af"
            >
              <InstagramIcon className="transition-colors duration-500 text-black hover:text-white" />
            </a>
          </div>
          <div className="flex-1 border-t border-pdark"></div>
        </div>
        <p className="text-sm font-semibold">
          © 2024 Joice Maeli. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

{
  /* <div className="mb-4 md:mb-0">
  <h2 className="text-lg font-bold">Contato:</h2>
  <a className="flex gap-2" href="https://wa.me/c/554187131095">
    <WhatsappIcon />
    <p className="font-bold">(41) 98713-1095</p>
  </a>
  <a
    className="flex gap-2"
    href="https://www.instagram.com/joicemaeli.estetica/?hl=af"
  >
    <InstagramIcon />
    <p className="font-bold">@joicemaeli.estetica</p>
  </a>
</div>; */
}
export default Footer;
