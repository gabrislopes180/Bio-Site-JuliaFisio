"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface CertificateFormData {
  title: string
  institution: string
  year: string
  hours: string
}

export function AddCertificateForm() {
  const [formData, setFormData] = useState<CertificateFormData>({
    title: "",
    institution: "",
    year: "",
    hours: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui será implementada a lógica para adicionar o certificado
    console.log("Novo certificado:", formData)
    // Resetar o formulário
    setFormData({ title: "", institution: "", year: "", hours: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Adicionar Certificado</h2>

      <div className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Título do Certificado
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Ex: Formação em Pilates"
          />
        </div>

        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
            Instituição
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Ex: VOLL Pilates"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
              Ano
            </label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
              placeholder="2023"
            />
          </div>

          <div>
            <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-2">
              Carga Horária
            </label>
            <input
              type="text"
              id="hours"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
              placeholder="450h"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
        >
          Adicionar Certificado
        </button>
      </div>
    </motion.form>
  )
}
