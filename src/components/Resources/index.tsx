import React from "react";
import module from "./resources.module.css";
import SectionContainer from "../SectionContainer";
import {
  TabletSmartphone,
  Zap,
  Languages,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

const Resources: React.FC = () => {
  return (
    <SectionContainer id="recursos">
      <h2 className={module.resources__title}>Recursos Poderosos</h2>
      <div className={module.resources__content}>
        <div className={module.resources__content_card}>
          <div className={module.resources__content_card_icon}>
            <TabletSmartphone />
          </div>
          <h3 className={module.resources__content_card_title}>
            Disponível em PWA
          </h3>
          <p className={module.resources__content_card_description}>
            Acesse o site pelo seu celular e adicione-o à tela inicial para
            utilizar como um aplicativo nativo.
          </p>
        </div>

        <div className={module.resources__content_card}>
          <div className={module.resources__content_card_icon}>
            <Zap />
          </div>

          <h3 className={module.resources__content_card_title}>
            Processamento Rápido
          </h3>
          <p className={module.resources__content_card_description}>
            Obtenha resultados em segundos, mesmo com imagens grandes.
          </p>
        </div>

        <div className={module.resources__content_card}>
          <div className={module.resources__content_card_icon}>
            <Languages />
          </div>

          <h3 className={module.resources__content_card_title}>
            Múltiplos idiomas
          </h3>
          <p className={module.resources__content_card_description}>
            reconhece e converte texto em múltiplos idiomas, incluindo português
            e inglês.
          </p>
        </div>

        <div className={module.resources__content_card}>
          <div className={module.resources__content_card_icon}>
            <ShieldCheck />
          </div>

          <h3 className={module.resources__content_card_title}>
            Privacidade Garantida
          </h3>
          <p className={module.resources__content_card_description}>
            Nenhuma imagem é enviada para servidores externos. Todo o
            processamento é feito localmente no seu navegador.
          </p>
        </div>

        <div className={module.resources__content_card}>
          <div className={module.resources__content_card_icon}>
            <DollarSign />
          </div>

          <h3 className={module.resources__content_card_title}>Gratis</h3>
          <p className={module.resources__content_card_description}>
            transformar imagens em texto é totalmente gratuito, sem limites de
            uso. com nossa ferramenta, você pode converter quantas imagens
            quiser, sem custos adicionais.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Resources;
