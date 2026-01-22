"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Mail, MessageCircle } from "lucide-react";
import { Variants } from "framer-motion";

export default function AgendeSuaConsulta() {
  const contacts = [
    {
      type: "WhatsApp",
      value: "(14) 1499774-0686",
      link: "https://wa.me/5514997740686",
      icon: "💬",
    },
    {
      type: "Instagram",
      value: "@fisio.juliaagostini",
      link: "https://instagram.com/fisio.juliaagostini",
      icon: "📸",
    },
    {
      type: "E-mail",
      value: "juliaagostinir@gmail.com",
      link: "mailto:juliaagostinir@gmail.com",
      icon: "✉️",
    },
  ];

  const Icons = (id: string) => {
    switch (id) {
      case "WhatsApp":
        return <MessageCircle className="w-8 h-8" />;
      case "Instagram":
        return <Instagram className="w-8 h-8" />;
      case "E-mail":
        return <Mail className="w-8 h-8" />;
      default:
        return null;
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Agende sua avaliação
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Entre em contato através de um dos canais abaixo para agendar sua
            avaliação e iniciar seu tratamento personalizado.
          </p>
        </motion.div>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{Icons(contact.type)}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {contact.type}
                    </h3>
                    <p className="text-gray-600 text-sm">{contact.value}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
