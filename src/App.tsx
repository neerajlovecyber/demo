import { useState } from 'react'

const SUSPICIOUS_KEYWORDS = ['whatsapp', 'telegram', 'gmail']

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<'REAL JOB' | 'SUSPICIOUS' | null>(null)

  const checkText = () => {
    const lowerText = text.toLowerCase()
    const isSuspicious = SUSPICIOUS_KEYWORDS.some(keyword => lowerText.includes(keyword))
    setResult(isSuspicious ? 'SUSPICIOUS' : 'REAL JOB')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Job Posting Checker</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste job posting here..."
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={checkText}>Check</button>
      {result && (
        <h2 style={{ color: result === 'SUSPICIOUS' ? 'red' : 'green' }}>
          {result}
        </h2>
      )}
    </div>
  )
}

export default App
