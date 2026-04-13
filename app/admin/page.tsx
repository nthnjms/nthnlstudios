'use client'

import { useState, useEffect } from 'react'

interface Piece {
  id: string
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  content: string
  readTime: string
}

const categories = ['Essay', 'Poetry', 'Short Story', 'Reflection', 'Nonfiction']

const empty: Piece = {
  id: '',
  slug: '',
  title: '',
  category: 'Essay',
  date: new Date().toISOString().split('T')[0],
  excerpt: '',
  content: '',
  readTime: '3 min read',
}

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [pieces, setPieces] = useState<Piece[]>([])
  const [form, setForm] = useState<Piece>(empty)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [view, setView] = useState<'list' | 'new'>('list')

  useEffect(() => {
    const saved = sessionStorage.getItem('nthnl_admin')
    if (saved === 'true') setUnlocked(true)
  }, [])

  useEffect(() => {
    if (!unlocked) return
    fetch('/api/writing')
      .then((r) => r.json())
      .then((data) => setPieces(data))
  }, [unlocked])

  const handleLogin = async () => {
    const res = await fetch('/api/admin-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      sessionStorage.setItem('nthnl_admin', 'true')
      setUnlocked(true)
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password.')
    }
  }

  const handleSave = async () => {
    if (!form.title || !form.content || !form.excerpt) {
      setMessage('Please fill in title, excerpt, and content.')
      return
    }
    setSaving(true)
    const newPiece: Piece = {
      ...form,
      id: Date.now().toString(),
      slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    }
    const updated = [newPiece, ...pieces]
    const res = await fetch('/api/writing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    if (res.ok) {
      setPieces(updated)
      setForm(empty)
      setMessage('✓ Saved successfully!')
      setView('list')
    } else {
      setMessage('Something went wrong. Try again.')
    }
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this piece?')) return
    const updated = pieces.filter((p) => p.id !== id)
    await fetch('/api/writing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    setPieces(updated)
    setMessage('Deleted.')
  }

  // Password gate
  if (!unlocked) {
    return (
      <main style={{
        minHeight: '100vh', background: 'var(--black)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: '400px', padding: '48px' }}>

          {/* Logo */}
          <div style={{ fontFamily: 'Bebas Neue', fontSize: '32px', color: 'var(--white)', marginBottom: '8px' }}>
            NTHNL<span style={{ color: 'var(--gold)' }}>.</span>
          </div>
          <div style={{ fontFamily: 'DM Mono', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '48px' }}>
            Admin Access
          </div>

          {/* Password field */}
          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleLogin() }}
            style={{ marginBottom: '16px' }}
          />

          {/* Error */}
          {passwordError && (
            <div style={{ fontSize: '12px', color: '#e24b4a', fontFamily: 'DM Mono', marginBottom: '16px' }}>
              {passwordError}
            </div>
          )}

          {/* Login button */}
          <button
            onClick={handleLogin}
            style={{
              width: '100%', background: 'var(--gold)', color: 'var(--black)',
              border: 'none', fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 500, padding: '16px',
              cursor: 'none', fontFamily: 'DM Sans', transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Enter →
          </button>
        </div>
      </main>
    )
  }

  // Admin dashboard
  return (
    <main style={{ minHeight: '100vh', background: 'var(--black)', padding: '100px 48px 80px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', borderBottom: '1px solid var(--border)', paddingBottom: '32px' }}>
        <div>
          <div style={{ fontFamily: 'DM Mono', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>
            Admin
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '48px', color: 'var(--white)' }}>
            Journal Manager
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => { setView('list'); setMessage('') }}
            style={{
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '12px 24px', border: '1px solid var(--border)',
              background: view === 'list' ? 'var(--gold)' : 'transparent',
              color: view === 'list' ? 'var(--black)' : 'var(--text-dim)',
              cursor: 'none', fontFamily: 'DM Sans', transition: 'all 0.3s',
            }}
          >
            All Pieces
          </button>
          <button
            onClick={() => { setView('new'); setMessage('') }}
            style={{
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '12px 24px', border: '1px solid var(--border)',
              background: view === 'new' ? 'var(--gold)' : 'transparent',
              color: view === 'new' ? 'var(--black)' : 'var(--text-dim)',
              cursor: 'none', fontFamily: 'DM Sans', transition: 'all 0.3s',
            }}
          >
            + New Piece
          </button>
          <button
            onClick={() => { sessionStorage.removeItem('nthnl_admin'); setUnlocked(false) }}
            style={{
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '12px 24px', border: '1px solid var(--border)',
              background: 'transparent', color: 'var(--text-muted)',
              cursor: 'none', fontFamily: 'DM Sans', transition: 'all 0.3s',
            }}
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div style={{ marginBottom: '24px', padding: '12px 20px', border: '1px solid var(--gold-dim)', fontFamily: 'DM Mono', fontSize: '12px', color: 'var(--gold)' }}>
          {message}
        </div>
      )}

      {/* List view */}
      {view === 'list' && (
        <div>
          {pieces.length === 0 && (
            <p style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono', fontSize: '13px' }}>
              No pieces yet. Click "+ New Piece" to add your first one.
            </p>
          )}
          {pieces.map((piece) => (
            <div key={piece.id} style={{
              padding: '28px 0', borderBottom: '1px solid var(--border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px',
            }}>
              <div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold-dim)', padding: '2px 8px', fontFamily: 'DM Mono' }}>
                    {piece.category}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'DM Mono' }}>
                    {piece.date}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '28px', color: 'var(--white)', marginBottom: '6px' }}>
                  {piece.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '500px' }}>
                  {piece.excerpt}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <a
                  href={`/journal/${piece.slug}`}
                  target="_blank"
                  style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', padding: '10px 20px', border: '1px solid var(--gold-dim)', transition: 'all 0.3s', fontFamily: 'DM Sans' }}
                >
                  View
                </a>
                <button
                  onClick={() => handleDelete(piece.id)}
                  style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '10px 20px', border: '1px solid var(--border)', background: 'transparent', cursor: 'none', transition: 'all 0.3s', fontFamily: 'DM Sans' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'red'; e.currentTarget.style.color = 'red' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* New piece form */}
      {view === 'new' && (
        <div style={{ maxWidth: '720px' }}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>Title</label>
            <input type="text" placeholder="Your piece title..." value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>Read Time</label>
            <input type="text" placeholder="e.g. 3 min read" value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>Excerpt</label>
            <textarea placeholder="A short teaser — 1 to 2 sentences..." value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} style={{ minHeight: '80px' }} />
          </div>
          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'DM Mono', marginBottom: '10px' }}>Full Content (use blank lines between paragraphs)</label>
            <textarea placeholder="Write your full piece here..." value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} style={{ minHeight: '320px' }} />
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              width: '100%', background: saving ? 'var(--gold-dim)' : 'var(--gold)',
              color: 'var(--black)', border: 'none', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500,
              padding: '18px', cursor: 'none', transition: 'all 0.3s', fontFamily: 'DM Sans',
            }}
          >
            {saving ? 'Saving...' : 'Publish Piece →'}
          </button>
        </div>
      )}
    </main>
  )
}