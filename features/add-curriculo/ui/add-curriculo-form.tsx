"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface CurriculoFormData {
  title: string
  description: string
  year: string
  pdfFile: File | null
}

export function AddCurriculoForm() {
  const [formData, setFormData] = useState<CurriculoFormData>({
    title: "",
    description: "",
    year: "",
    pdfFile: null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui será implementada a lógica para adicionar o currículo
    console.log("Novo currículo:", formData)
    // Resetar o formulário
    setFormData({ title: "", description: "", year: "", pdfFile: null })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, pdfFile: file }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-sm max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Adicionar Currículo</h2>

      <div className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="Ex: Currículo Completo"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors resize-none"
            placeholder="Ex: Formação acadêmica, experiências e especializações"
          />
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
            Ano de atualização
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors"
            placeholder="2024"
          />
        </div>

        <div>
          <label htmlFor="pdfFile" className="block text-sm font-medium text-gray-700 mb-2">
            Arquivo PDF
          </label>
          <input
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
        >
          Adicionar Currículo
        </button>
      </div>
    </motion.form>
  )
}
