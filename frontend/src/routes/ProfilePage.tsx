import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, type FormEvent } from 'react'
import { getMe, updateMe, uploadFile, type MeResponse } from '../api'
import { companyDepartments } from '../constants/companyDepartments'
import { SkeletonBlock } from '../components/SkeletonBlock'

type ProfileFormState = {
  fullName: string
  avatarFile: File | null
  avatarPreview: string
  department: string
}

export function ProfilePage() {
  const queryClient = useQueryClient()
  const { data: me, isLoading: loading } = useQuery<MeResponse>({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const [profileForm, setProfileForm] = useState<ProfileFormState>({
    fullName: me?.fullName ?? '',
    avatarFile: null,
    avatarPreview: me?.avatarUrl ?? '',
    department: me?.department ?? '',
  })

  const updateProfileMutation = useMutation({
    mutationFn: async (values: ProfileFormState) => {
      let avatarUrl = values.avatarPreview
      if (values.avatarFile) {
        const uploaded = await uploadFile(values.avatarFile)
        avatarUrl = uploaded.url
      }

      return updateMe({
        fullName: values.fullName,
        avatarUrl: avatarUrl || undefined,
        department: values.department || undefined,
      })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['me'] })
      const freshMe = await queryClient.fetchQuery({ queryKey: ['me'], queryFn: getMe })
      queryClient.setQueryData<MeResponse>(['me'], freshMe)
      setProfileForm({
        fullName: freshMe.fullName,
        avatarFile: null,
        avatarPreview: freshMe.avatarUrl ?? '',
        department: freshMe.department ?? '',
      })
    },
  })

  const budget = me?.currentGivingBudget
  const budgetUsed = budget?.usedBudget ?? 0
  const budgetTotal = budget?.totalBudget ?? 200
  const budgetRemaining = budget?.remainingBudget ?? 200
  const progress = budgetTotal > 0 ? Math.min(100, Math.round((budgetUsed / budgetTotal) * 100)) : 0
  const avatarInitials = (me?.fullName ?? 'U')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  const handleAvatarSelect = (file: File | null) => {
    if (!file) return
    const previewUrl = URL.createObjectURL(file)
    setProfileForm((prev) => ({ ...prev, avatarFile: file, avatarPreview: previewUrl }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await updateProfileMutation.mutateAsync(profileForm)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-2xl font-bold text-white">
            {profileForm.avatarPreview ? (
              <img src={profileForm.avatarPreview} alt="avatar preview" className="h-full w-full object-cover" />
            ) : (
              avatarInitials
            )}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Profile</p>
            <h1 className="mt-1 text-3xl font-semibold text-slate-900">{me?.fullName ?? 'Loading...'}</h1>
            <p className="mt-1 text-slate-500">{me?.email ?? ''}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-4">
          {loading ? (
            <>
              <SkeletonBlock className="h-5 w-48" />
              <SkeletonBlock className="h-5 w-56" />
              <SkeletonBlock className="h-5 w-40" />
            </>
          ) : (
            <>
              <div>
                <p className="text-sm text-slate-500">Full name</p>
                <p className="font-semibold text-slate-900">{me?.fullName ?? 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Department</p>
                <p className="font-semibold text-slate-900">{me?.department ?? 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Point balance</p>
                <p className="font-semibold text-slate-900">{me?.pointBalance ?? 0} pts</p>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 p-4">
          <p className="text-sm font-semibold text-slate-500">Giving budget progress</p>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
            <span>{budgetUsed} used</span>
            <span>{budgetRemaining} remaining</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Update your profile</h2>
        <p className="mt-2 text-slate-500">Upload an image to update your avatar and choose your department.</p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Full name
            <input
              type="text"
              value={profileForm.fullName}
              onChange={(event) => setProfileForm((prev) => ({ ...prev, fullName: event.target.value }))}
              placeholder="John Doe"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Upload avatar image
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleAvatarSelect(event.target.files?.[0] ?? null)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>

          {profileForm.avatarPreview ? (
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img src={profileForm.avatarPreview} alt="avatar preview" className="h-56 w-full object-cover" />
            </div>
          ) : null}

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Department
            <select
              value={profileForm.department}
              onChange={(event) => setProfileForm((prev) => ({ ...prev, department: event.target.value }))}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select department</option>
              {companyDepartments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            Avatar will be uploaded to Cloudinary via <strong>POST /uploads</strong>, then saved to user profile via <strong>PATCH /users/me</strong>.
          </div>

          <button
            type="submit"
            disabled={updateProfileMutation.isPending}
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {updateProfileMutation.isPending ? 'Saving...' : 'Save profile'}
          </button>
        </form>
      </section>
    </div>
  )
}
