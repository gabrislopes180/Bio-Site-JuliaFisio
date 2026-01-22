"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react";

// Mock data - será substituído pelos locais reais
const locais = [
  {
    id: 1,
    name: "Studio Miriam Roveri",
    address: "Rua General Galvão, 71 - Centro",
    city: "Jaú - SP",
    phone: "(14) 98185-7787",
    // hours: "Seg a Sex: 8h às 18h",
  },
  {
    id: 2,
    name: "Clínica Conectiva",
    address: "Rua Dr. Fuas de Mattos Sabino, 14-23 - Jardim América",
    city: "Bauru - SP",
    phone: "(14) 99140-9099",
    // hours: "Seg a Sex: 7h às 19h | Sáb: 8h às 12h",
  },
  // {
  //   id: 3,
  //   name: "Studio de Pilates Equilibrium",
  //   address: "Rua do Comércio, 789 - Centro",
  //   city: "Jaú - SP",
  //   phone: "(14) 3622-3456",
  //   hours: "Seg a Sex: 8h às 18h",
  // },
];

export default function LocaisDeAtendimento() {
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
            Locais de atendimento
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Atendo em diferentes clínicas nas cidades de Bauru e Jaú. Escolha o
            local mais conveniente para você.
          </p>
        </motion.div>

        <div className="space-y-4">
          {locais.map((local) => (
            <motion.div key={local.id} variants={itemVariants}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {local.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">{local.address}</p>
                      <p className="text-sm font-medium">{local.city}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 text-gray-600">
                    <Phone className="w-5 h-5 shrink-0" />
                    <p className="text-sm">{local.phone}</p>
                  </div>

                  {/* <div className="flex gap-3 text-gray-600">
                    <Clock className="w-5 h-5 shrink-0" />
                    <p className="text-sm">{local.hours}</p>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
