import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from '../src/components/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button onClick={() => alert('Button clicked!')} label="Hello" />
  </StrictMode>,
)
