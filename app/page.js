jsx
// app/page.js
"use client";

import { useState } from 'react';

export default function Calculateur() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Calculateur de coût</h1>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Nom de l'ingrédient</label><br />
          <input type="text" placeholder="ex : Poulet" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Quantité utilisée (kg/L)</label><br />
          <input type="number" step="0.01" placeholder="ex : 1.5" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Prix au kg/L (€)</label><br />
          <input type="number" step="0.01" placeholder="ex : 12.5" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>
          Calculer
        </button>
      </form>
    </div>
  );
}