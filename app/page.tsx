"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { Variants } from "framer-motion";
export default function Home() {
  const links = [
    { title: "Agende sua avaliação", href: "/agende-sua-consulta" },
    // { title: "Currículo", href: "/curriculo" },
    { title: "Certificados", href: "/certificados" },
    { title: "Locais de atendimento", href: "/locais-de-atendimento" },
  ];

  const qualifications = [
    "Formação completa em Pilates – Método Voll.",
    "Atuação em prevenção e reabilitação",
    "Atendimento individual e personalizado",
    "Atendimentos em clínica e domiciliares",
    "Experiência em ballet como diferencial funcional",
    "Foco no movimento e na funcionalidade",
    "Propósito: promover saúde, bem-estar e qualidade de vida com cuidado e acolhimento",
    "Agende Sua Avaliaçao",
    "Contato via DM",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <main className="min-h-screen bg-white">
      <div className="relative bg-[#f1ece9] pt-34 flex justify-center rounded-b-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-16 w-30 h-30"
        >
          <Image
            src="/images/WhatsApp Image 2026-01-14 at 13.42.09.jpeg"
            alt="Julia Agostini"
            fill
            priority
            className="object-cover rounded-full border-8 border-white shadow-lg"
          />
        </motion.div>

        {/* Curva branca */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pt-14">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[30]"
            preserveAspectRatio="none"
          ></svg>
        </div>
      </div>

      {/* ================= CONTEÚDO PRINCIPAL ================= */}
      <motion.div
        className="max-w-lg mx-auto px-6 mt-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl text-gray-900 text-center mb-6"
        >
          Julia Agostini
        </motion.h1>

        <span className="flex flex-col items-center">
          <motion.div
            variants={containerVariants}
            className=" text-sm text-zinc-600 leading-relaxed text-center mb-6"
          >
            {qualifications.map((qualification, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="inline text-start text-xs"
              >
                <span className="text-gray-600 mx-1">•</span>
                {qualification.toUpperCase()}
              </motion.span>
            ))}
          </motion.div>
        </span>

        {/* <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-2 text-gray-600 text-sm mb-10"
        >
          <Instagram size={18} strokeWidth={2.5} />
          <Mail size={18} strokeWidth={2.5} />
        </motion.div> */}
      </motion.div>

      <motion.div
        className="max-w-lg mx-auto px-4 space-y-4 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className="block bg-[#f1ece9] rounded-2xl p-5 text-center font-medium text-gray-800  transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
