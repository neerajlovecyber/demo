import { useState } from 'react'

const SUSPICIOUS_KEYWORDS = ['whatsapp', 'telegram', 'gmail']

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<'REAL JOB' | 'SUSPICIOUS' | 'UNKNOWN' | null>(null)
  const [detectedKeywords, setDetectedKeywords] = useState<string[]>([])

  const checkText = () => {
    if (!text.trim()) {
      setResult('UNKNOWN')
      setDetectedKeywords([])
      return
    }

    const lowerText = text.toLowerCase()
    const found = SUSPICIOUS_KEYWORDS.filter(keyword => lowerText.includes(keyword))

    setDetectedKeywords(found)
    setResult(found.length > 0 ? 'SUSPICIOUS' : 'REAL JOB')
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
        <h2 style={{ color: result === 'SUSPICIOUS' ? 'red' : result === 'UNKNOWN' ? 'gray' : 'green' }}>
          {result}
        </h2>
      )}
      {detectedKeywords.length > 0 && (
        <div>
          <p>Detected keywords:</p>
          <ul>
            {detectedKeywords.map(keyword => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
