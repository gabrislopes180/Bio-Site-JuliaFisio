"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

// Mock data - será substituído pelos PDFs reais
const curriculos = [
  {
    id: 1,
    title: "Currículo Completo",
    description: "Formação acadêmica, experiências e especializações",
    pdfUrl: "/curriculos/curriculo-completo.pdf",
    year: "2024",
  },
  {
    id: 2,
    title: "Currículo Lattes",
    description: "Plataforma Lattes CNPq",
    pdfUrl: "/curriculos/curriculo-lattes.pdf",
    year: "2024",
  },
];

export default function Curriculo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Currículo</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Confira minha formação acadêmica, experiências profissionais e
            especializações.
          </p>
        </motion.div>

        <div className="space-y-4">
          {curriculos.map((curriculo) => (
            <motion.div key={curriculo.id} variants={itemVariants}>
              <div className="block bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {curriculo.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {curriculo.description}
                    </p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Atualizado em {curriculo.year}
                    </span>
                  </div>
                  <button
                    className="shrink-0 p-3 bg-gray-900 hover:bg-gray-700 text-white rounded-xl transition-colors"
                    onClick={() => {
                      // Aqui será implementado o download do PDF
                      console.log("Download:", curriculo.pdfUrl);
                    }}
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
