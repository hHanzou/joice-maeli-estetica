import Image from "next/image";
import { memo } from "react";

type ProcedimentoContainerProps = {
  exProcedimentoPath: string;
  procedimentoPath: string;
};

const ProcedimentoContainer = memo<ProcedimentoContainerProps>(
  ({ exProcedimentoPath, procedimentoPath }) => {
    return (
      <div className="flex flex-col lg:flex-row w-[90%] max-w-6xl bg-porange p-2 rounded-xl gap-4 items-center justify-center mx-auto my-12">
        <div className="w-full p-2 bg-pbase rounded-xl">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex-1">
              <Image
                src={exProcedimentoPath}
                alt="ex-procedimento"
                className="rounded-xl object-cover w-full h-auto"
                width={650}
                height={650}
              />
            </div>
            <div className="flex-1">
              <Image
                src={procedimentoPath}
                alt="procedimento"
                className="rounded-xl object-cover w-full h-auto"
                width={650}
                height={650}
              />
            </div>
          </div>
          <div className="border-t border-pdark my-4"></div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start h-auto gap-4">
            <div className="text-justify text-pdark w-full lg:w-3/5 px-4 font-bold">
              O valor dos procedimentos podem alterar de acordo com a
              necessidade do seu tratamento (número de sessões). Entre em
              contato para agendar uma consulta avaliativa e fazer seu
              orçamento.
            </div>
            <div className="text-pdark w-full lg:w-2/5 flex items-center justify-center">
              <a
                href="https://wa.me/c/554187131095"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#8d6a58] text-white font-bold rounded-2xl w-full lg:w-60 h-11 transition-colors duration-300 hover:bg-[#7c5f50] px-4">
                  Entrar em contato
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProcedimentoContainer.displayName = "ProcedimentoContainer";

export default ProcedimentoContainer;
