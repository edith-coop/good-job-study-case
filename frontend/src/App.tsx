import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo, useState, type FormEvent } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { login, register, type AuthUser, type LoginPayload, type RegisterPayload } from './api'
import { SharedSidebar } from './components/SharedSidebar'
import { FeedDetailPage } from './routes/FeedDetailPage'
import { FeedPage } from './routes/FeedPage'
import { NotificationsPage } from './routes/NotificationsPage'
import { PeerRecognitionPage } from './routes/PeerRecognitionPage'
import { RewardRedemptionPage } from './routes/RewardRedemptionPage'
import { ProfilePage } from './routes/ProfilePage'

type AuthMode = 'login' | 'register'

type FormState = {
  fullName: string
  email: string
  password: string
}

const queryClient = new QueryClient()
const initialForm: FormState = { fullName: '', email: '', password: '' }

function AuthPanel({ onAuthenticated }: { onAuthenticated: (user: AuthUser) => void }) {
  const [mode, setMode] = useState<AuthMode>('login')
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const formTitle = useMemo(() => (mode === 'login' ? 'Welcome back' : 'Create your account'), [mode])
  const formDescription = useMemo(
    () =>
      mode === 'login'
        ? 'Sign in to view kudos feed, notifications, and rewards.'
        : 'Join the recognition system and start sending kudos.',
    [mode],
  )

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const resetMessages = () => {
    setSuccessMessage('')
    setErrorMessage('')
  }

  const switchMode = (nextMode: AuthMode) => {
    setMode(nextMode)
    setForm({ fullName: '', email: '', password: '' })
    resetMessages()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    resetMessages()

    try {
      if (mode === 'login') {
        const payload: LoginPayload = { email: form.email, password: form.password }
        const response = await login(payload)
        localStorage.setItem('accessToken', response.accessToken)
        localStorage.setItem('authUser', JSON.stringify(response.user))
        setSuccessMessage('Login successful. Redirecting to your dashboard.')
        onAuthenticated(response.user)
      } else {
        const payload: RegisterPayload = {
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        }
        await register(payload)
        setSuccessMessage('Register successful. You can now login.')
        switchMode('login')
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong'
      setErrorMessage(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-5">
      <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-6xl gap-7 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            Internal Recognition & Reward System
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 lg:text-6xl">
            Recognize great work. Reward it with real company perks.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-8 text-slate-500">
            A simple, modern MVP for sending kudos, tracking giving budget, receiving realtime
            notifications, and redeeming rewards.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1">
            <button
              type="button"
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              onClick={() => switchMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${mode === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              onClick={() => switchMode('register')}
            >
              Register
            </button>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">{formTitle}</h2>
              <p className="mt-2 text-slate-500">{formDescription}</p>
            </div>

            {mode === 'register' ? (
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Full name
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={(event) => updateField('fullName', event.target.value)}
                  required
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            ) : null}

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                required
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Password
              <input
                type="password"
                placeholder={mode === 'register' ? 'Minimum 6 characters' : '••••••••'}
                value={form.password}
                onChange={(event) => updateField('password', event.target.value)}
                required
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            {successMessage ? (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {successMessage}
              </p>
            ) : null}
            {errorMessage ? (
              <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Register'}
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

function AppLayout({ onLogout }: { onLogout: () => void }) {
  const [user] = useState<AuthUser>(() => {
    const cached = localStorage.getItem('authUser')
    if (!cached) return { id: '', email: '', fullName: 'Guest' }
    try {
      return JSON.parse(cached) as AuthUser
    } catch {
      return { id: '', email: '', fullName: 'Guest' }
    }
  })

  return (
    <div className="min-h-screen bg-slate-50 p-5 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-5">
      <SharedSidebar user={user} onLogout={onLogout} />
      <main className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:mt-0 lg:h-[calc(100vh-2.5rem)] lg:overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

function AppRoutes() {
  const navigate = useNavigate()
  const isAuthed = Boolean(localStorage.getItem('accessToken'))

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('authUser')
    navigate('/login', { replace: true })
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthed ? (
            <Navigate to="/feed" replace />
          ) : (
            <AuthPanel
              onAuthenticated={(nextUser) => {
                localStorage.setItem('authUser', JSON.stringify(nextUser))
                navigate('/feed', { replace: true })
              }}
            />
          )
        }
      />

      <Route
        element={isAuthed ? <AppLayout onLogout={handleLogout} /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:id" element={<FeedDetailPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/peer-recognition" element={<PeerRecognitionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/rewards" element={<RewardRedemptionPage />} />
      </Route>

      <Route path="*" element={<Navigate to={isAuthed ? '/feed' : '/login'} replace />} />
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
