import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="bg-ptlorange w-full h-[500px] flex flex-col items-center rounded-lg relative">
      <div className="flex-none w-full bg-transparent h-1/3 flex items-center justify-center relative">
        {" "}
        {/* Para a primeira div */}
        {/* Ocupa 30% da altura */}
      </div>
      {/* Avatar Centralizado e Sobreposto */}
      <div className="absolute w-60 h-60 rounded-full bg-gray-400 left-1/2 transform -translate-x-1/2 -top-2">
        {" "}
        {/* Ajuste o -top-16 conforme necessário */}
        {/* Aqui você pode adicionar uma imagem ou texto para o avatar */}
        <Image
          src="/images/aboutmephoto.jpg"
          alt="joicemaelilogo"
          className="rounded-full w-full h-full object-cover"
          width={300}
          height={300}
        />
        {/* ou apenas texto, por exemplo: "A" */}
      </div>
      <div className="flex-grow w-full bg-porange flex flex-col gap-4 items-center justify-center rounded-b-lg">
        {/* Ocupa o restante da altura (70%) */}
        <p className="w-[30%] font-extrabold text-center font-dancing-script text-6xl">
          Joice Maeli
        </p>
        <p className="w-[50%] h-[%60] text-justify text-lg">
          Sou esteticista e cosmetóloga apaixonada pela área da beleza. Meu
          objetivo é trazer bem-estar e qualidade de vida para meus pacientes.
          Trabalho com tratamentos exclusivos e personalizados.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;