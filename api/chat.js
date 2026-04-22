export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prompt, system } = req.body

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' })
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      system: `You are a warm, practical home management assistant for a busy working mum in London. She loves Nigerian cooking and has a baby. Keep answers concise, friendly and practical. ${system || ''}`,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    return res.status(response.status).json({ error: data.error?.message || 'API error' })
  }

  res.status(200).json({ text: data.content?.[0]?.text || '' })
}
