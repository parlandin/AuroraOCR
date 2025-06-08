import React from "react";
import module from "./faq.module.css";
import SectionContainer from "../SectionContainer";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "O que é o OCR?",
      answer:
        "OCR (Reconhecimento Óptico de Caracteres) é uma tecnologia que converte diferentes tipos de documentos, como PDFs digitalizados, imagens capturadas por câmeras e fotos de documentos, em dados editáveis e pesquisáveis.",
    },
    {
      question: "Quais formatos de imagem são suportados?",
      answer:
        "Suportamos os formatos mais comuns, incluindo JPEG, PNG, GIF e WEBP.",
    },
    {
      question: "Posso extrair links de imagens?",
      answer:
        "Sim, nosso serviço extrair links de imagens, permitindo que você obtenha links clicáveis diretamente do texto extraído. Além disso, destacamos também: email, números de telefone e mais.",
    },
    {
      question: "É necessário criar uma conta para usar o serviço?",
      answer:
        "Não, você pode usar nosso serviço sem criar uma conta. Basta fazer o upload da imagem e obter o texto extraído.",
    },
    {
      question: "Há limites para o tamanho do arquivo?",
      answer:
        "Nao, nosso site  contem uma ferramenta para corte da imagem,  que permite o upload de imagens de qualquer tamanho. No entanto, recomendamos que as imagens sejam otimizadas para melhor desempenho.",
    },

    {
      question: "Como posso melhorar a precisão do OCR?",
      answer:
        "Para melhores resultados, use imagens de alta qualidade, com boa iluminação e contraste. Evite imagens borradas ou com texto muito pequeno.",
    },
    {
      question: "O serviço é gratuito?",
      answer:
        "Sim, nosso serviço de OCR é totalmente gratuito e sem limites de uso.",
    },
    {
      question: "O que acontece com as imagens que envio?",
      answer:
        "Nenhuma imagem é enviada para servidores externos. Todo o processamento é feito localmente no seu navegador, garantindo sua privacidade.",
    },
    {
      question: "Posso usar o OCR offline?",
      answer:
        "Sim, nossa ferramenta é baseada em tecnologia de navegador, o que significa que você pode usá-la offline, desde que tenha carregado a página anteriormente.",
    },
    {
      question: "Quais idiomas são suportados pelo OCR?",
      answer:
        "Nosso OCR suporta múltiplos idiomas, incluindo português e inglês, entre outros.",
    },
    {
      question: "O que é um PWA?",
      answer:
        "PWA (Progressive Web App) é uma tecnologia que permite que sites sejam instalados como aplicativos nativos no seu dispositivo, oferecendo uma experiência mais rápida e integrada.",
    },

    {
      question: "Todas as imagens para texto são processadas localmente?",
      answer:
        "Sim, todas as imagens são processadas localmente no seu navegador, garantindo que sua privacidade seja mantida e que nenhuma imagem seja enviada para servidores externos.",
    },
    {
      question: "Qual o software utilizado para o OCR?",
      answer:
        "Utilizamos o Tesseract.js, uma biblioteca de OCR baseada em JavaScript, que permite o reconhecimento de texto diretamente no navegador.",
    },
  ];

  return (
    <SectionContainer id="faq">
      <h2 className={module.faq__title}>Perguntas Frequentes</h2>
      <div className={module.faq__content}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={module.faq__item}
            onClick={() => toggleAccordion(index)}
          >
            <div className={module.faq__item_header}>
              <h3 className={module.faq__item_question}>{item.question}</h3>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>

            <p
              className={`${module.faq__item_answer} ${
                activeIndex === index ? module.visible : ""
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
export default FAQ;
