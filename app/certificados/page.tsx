"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Eye } from "lucide-react";
import { useShowCertificate } from "@/features/handle-certificate";
import { Variants } from "framer-motion";

// Mock data - será substituído pelos certificados reais
const certificados = [
  {
    id: 1,
    title: "Formação em Pilates - Método VOLL",
    institution: "VOLL Pilates",
    year: "2023",
    hours: "450h",
    pdf: "/pdf/pilates.pdf",
  },
  {
    id: 2,
    title:
      "Apresentação Modalidade Oral no Evento: XII Jornada de Fisioterapia",
    institution: "Centro Universitário Sagrado Coração",
    year: "2025",
    hours: "",
    pdf: "/pdf/segundo.pdf",
  },
  {
    id: 3,
    title:
      "1° Lugar na Modalidade Apresentação Oral, no Evento XII Jornada de Fisioterapia",
    institution: "Centro Universitário Sagrado Coração",
    year: "2025",
    hours: "",
    pdf: "/pdf/Tcc.pdf",
  },
  {
    id: 4,
    title:
      "Preceptoria no Manejo Motor de Pacientes com Distrofia Muscular de Duchenne",
    institution: "Ministrante: Cristina Iwabe",
    year: "2025",
    hours: "4h/aula",
    pdf: "/pdf/duchenne.pdf",
  },
  {
    id: 5,
    title: "Workshop de Eletroterapia",
    institution: "Centro Universitário Sagrado Coração",
    year: "2022",
    hours: "3h/aula",
    pdf: "/pdf/certificate.pdf",
  },
  {
    id: 6,
    title: "Monitoria em Cinesiologia",
    institution: "Centro Universitário Sagrado Coração",
    year: "2022",
    hours: "15h/aula",
    pdf: "/pdf/Cinesiologia.pdf",
  },
];

export default function Certificados() {
  const { showCertificate, handleShowCertificate } = useShowCertificate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#f1ece9] py-12 px-4">
      <motion.div
        className="max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl p-8 mb-6 shadow-sm"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Certificados
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Formações e cursos de especialização na área de fisioterapia e
            reabilitação.
          </p>
        </motion.div>

        <div className="space-y-4">
          {certificados.map((certificado) => (
            <motion.div key={certificado.id} variants={itemVariants}>
              <div className="flex justify-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {certificado.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {certificado.institution}
                  </p>
                  <div className="flex gap-3 text-xs">
                    <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {certificado.year}
                    </span>
                    <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {certificado.hours}
                    </span>
                  </div>
                </div>
                <Eye
                  size={18}
                  color="black"
                  onClick={() => handleShowCertificate(certificado.id)}
                />

                {/* <Background isOpen={showCertificate === certificado.id}>
                  <iframe src={certificado.pdf} width={300} height={700} />
                </Background> */}
                {showCertificate === certificado.id && (
                  <div className="fixed inset-0 z-50 bg-black/80">
                    {/* Botão fechar */}
                    <button
                      onClick={() => handleShowCertificate(null)}
                      className="absolute top-4 left-5 z-50 text-white text-xl font-bold"
                    >
                      ✕
                    </button>

                    {/* PDF */}
                    <iframe
                      src={certificado.pdf}
                      className="w-full h-full"
                      title="Certificado"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
