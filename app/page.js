'use client'

import { useState } from 'react'

export default function Page() {
  const [surface, setSurface] = useState('')
  const [typeLogement, setTypeLogement] = useState('maison')
  const [travaux, setTravaux] = useState('non')
  const [travauxMontant, setTravauxMontant] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ surface, typeLogement, travaux, travauxMontant })
    alert(`Surface: ${surface}m², Type: ${typeLogement}`)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Calculateur Cook Price</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Surface en m²</label>
          <input
            type="number"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Type de logement</label>
          <select
            value={typeLogement}
            onChange={(e) => setTypeLogement(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Travaux réalisés ?</label>
          <select
            value={travaux}
            onChange={(e) => setTravaux(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="non">Non</option>
            <option value="oui">Oui</option>
          </select>
        </div>

        {travaux === 'oui' && (
          <div>
            <label className="block text-sm font-medium mb-2">Montant des travaux en €</label>
            <input
              type="number"
              value={travauxMontant}
              onChange={(e) => setTravauxMontant(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-medium hover:bg-blue-700"
        >
          Calculer
        </button>
      </form>
    </div>
  )
}