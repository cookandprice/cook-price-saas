'use client'

import { useState } from 'react'

export default function Page() {
  const [formData, setFormData] = useState({
    surface: '',
    typeLogement: 'maison',
    travaux: 'non',
    travauxMontant: '',
    typeTravaux: '',
    travauxDescription: '',
    travauxDate: '',
    assurance: 'non',
    assuranceMontant: '',
    assuranceDate: '',
    assuranceCompagnie: '',
    assuranceType: '',
    assuranceFranchise: '',
    assuranceDomiciliation: 'non',
    assuranceDomiciliationDate: '',
    assuranceDomiciliationMontant: '',
    assuranceDomiciliationBanque: '',
    assuranceDomiciliationCompte: '',
    assuranceDomiciliationTitulaire: '',
    assuranceDomiciliationAdresse: '',
    assuranceDomiciliationVille: '',
    assuranceDomiciliationCodePostal: '',
    assuranceDomiciliationPays: '',
    assuranceDomiciliationIban: '',
    assuranceDomiciliationBic: '',
    assuranceDomiciliationSwift: '',
    assuranceDomiciliationReference: '',
    assuranceDomiciliationMontantTotal: '',
    assuranceDomiciliationDateDebut: '',
    assuranceDomiciliationDateFin: '',
    assuranceDomiciliationFrequence: '',
    assuranceDomiciliationJourPaiement: '',
    assuranceDomiciliationMoisPaiement: '',
    assuranceDomiciliationAnneePaiement: '',
    assuranceDomiciliationStatut: '',
    assuranceDomiciliationMessage: '',
    assuranceDomiciliationErreur: '',
    assuranceDomiciliationSucces: '',
    assuranceDomiciliationChargement: '',
    assuranceDomiciliationAnnulation: '',
    assuranceDomiciliationModification: '',
    assuranceDomiciliationSuppression: '',
    assuranceDomiciliationConsultation: '',
    assuranceDomiciliationImpression: '',
    assuranceDomiciliationExport: '',
    assuranceDomiciliationPartage: '',
    assuranceDomiciliationTelechargement: '',
    assuranceDomiciliationEnvoi: '',
    assuranceDomiciliationReception: '',
    assuranceDomiciliationConfirmation: '',
    assuranceDomiciliationNotification: '',
    assuranceDomiciliationRappel: '',
    assuranceDomiciliationAvertissement: '',
    assuranceDomiciliationInformation: '',
    assuranceDomiciliationAide: '',
    assuranceDomiciliationContact: '',
    assuranceDomiciliationSupport: '',
    assuranceDomiciliationFAQ: '',
    assuranceDomiciliationCGU: '',
    assuranceDomiciliationMentionsLegales: '',
    assuranceDomiciliationPolitiqueConfidentialite: '',
    assuranceDomiciliationCookies: '',
    assuranceDomiciliationRGPD: '',
    assuranceDomiciliationDroitAcces: '',
    assuranceDomiciliationDroitRectification: '',
    assuranceDomiciliationDroitSuppression: '',
    assuranceDomiciliationDroitLimitation: '',
    assuranceDomiciliationDroitOpposition: '',
    assuranceDomiciliationDroitPortabilite: '',
    assuranceDomiciliationDroitReclamation: '',
    assuranceDomiciliationDroitRetractation: '',
    assuranceDomiciliationDroitRenonciation: '',
    assuranceDomiciliationDroitResolution: '',
    assuranceDomiciliationDroitIndemnisation: '',
    assuranceDomiciliationDroitReparation: '',
    assuranceDomiciliationDroitRemplacement: '',
    assuranceDomiciliationDroitReduction: '',
    assuranceDomiciliationDroitRemboursement: '',
    assuranceDomiciliationDroitEchange: '',
    assuranceDomiciliationDroitGarantie: '',
    assuranceDomiciliationDroitService: '',
    assuranceDomiciliationDroitAssistance: '',
    assuranceDomiciliationDroitConseil: '',
    assuranceDomiciliationDroitInformation: '',
    assuranceDomiciliationDroitAide: '',
    assuranceDomiciliationDroitContact: '',
    assuranceDomiciliationDroitSupport: '',
    assuranceDomiciliationDroitFAQ: '',
    assuranceDomiciliationDroitCGU: '',
    assuranceDomiciliationDroitMentionsLegales: '',
    assuranceDomiciliationDroitPolitiqueConfidentialite: '',
    assuranceDomiciliationDroitCookies: '',
    assuranceDomiciliationDroitRGPD: '',
    assuranceDomiciliationDroitDroitAcces: '',
    assuranceDomiciliationDroitDroitRectification: '',
    assuranceDomiciliationDroitDroitSuppression: '',
    assuranceDomiciliationDroitDroitLimitation: '',
    assuranceDomiciliationDroitDroitOpposition: '',
    assuranceDomiciliationDroitDroitPortabilite: '',
    assuranceDomiciliationDroitDroitReclamation: '',
    assuranceDomiciliationDroitDroitRetractation: '',
    assuranceDomiciliationDroitDroitRenonciation: '',
    assuranceDomiciliationDroitDroitResolution: '',
    assuranceDomiciliationDroitDroitIndemnisation: '',
    assuranceDomiciliationDroitDroitReparation: '',
    assuranceDomiciliationDroitDroitRemplacement: '',
    assuranceDomiciliationDroitDroitReduction: '',
    assuranceDomiciliationDroitDroitRemboursement: '',
    assuranceDomiciliationDroitDroitEchange: '',
    assuranceDomiciliationDroitDroitGarantie: '',
    assuranceDomiciliationDroitDroitService: '',
    assuranceDomiciliationDroitDroitAssistance: '',
    assuranceDomiciliationDroitDroitConseil: '',
    assuranceDomiciliationDroitDroitInformation: '',
    assuranceDomiciliationDroitDroitAide: '',
    assuranceDomiciliationDroitDroitContact: '',
    assuranceDomiciliationDroitDroitSupport: '',
    assuranceDomiciliationDroitDroitFAQ: '',
    assuranceDomiciliationDroitDroitCGU: '',
    assuranceDomiciliationDroitDroitMentionsLegales: '',
    assuranceDomiciliationDroitDroitPolitiqueConfidentialite: '',
    assuranceDomiciliationDroitDroitCookies: '',
    assuranceDomiciliationDroitDroitRGPD: '',
    // ... (tu peux ajouter tes propres champs ici)
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique de soumission du formulaire ici
    console.log(formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Calculateur Cook Price</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Surface (m²)</label>
          <input
            type="number"
            value={formData.surface}
            onChange={(e) => setFormData({...formData, surface: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Type de logement</label>
          <select
            value={formData.typeLogement}
            onChange={(e) => setFormData({...formData, typeLogement: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Travaux réalisés ?</label>
          <select
            value={formData.travaux}
            onChange={(e) => setFormData({...formData, travaux: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="non">Non</option>
            <option value="oui">Oui</option>
          </select>
        </div>
        
        {formData.travaux === 'oui' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Montant des travaux (€)</label>
              <input
                type="number"
                value={formData.travauxMontant}
                onChange={(e) => setFormData({...formData, travauxMontant: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">