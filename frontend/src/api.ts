const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export type ApiEnvelope<T> = {
  data: T
  message: string
  code: number
  statusHttpCode: number
}

export type ApiErrorResponse = {
  message?: string
  statusCode?: number
}

export class ApiError extends Error {
  statusCode?: number

  constructor(message: string, statusCode?: number) {
    super(message)
    this.name = 'ApiError'
    this.statusCode = statusCode
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('accessToken')
  const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const errorMessage =
      (data as ApiErrorResponse | null)?.message ?? response.statusText ?? 'Request failed'
    throw new ApiError(errorMessage, response.status)
  }

  return ((data as ApiEnvelope<T> | null)?.data ?? data) as T
}

export type RegisterPayload = {
  fullName: string
  email: string
  password: string
}

export type LoginPayload = {
  email: string
  password: string
}

export type AuthUser = {
  id: string
  email: string
  fullName: string
  avatarUrl?: string | null
  department?: string | null
}

export type LoginResponse = {
  accessToken: string
  user: AuthUser
}

export type GivingBudget = {
  month: string
  totalBudget: number
  usedBudget: number
  remainingBudget: number
  resetAt: string | null
}

export type MeResponse = AuthUser & {
  currentGivingBudget?: GivingBudget | null
  pointBalance?: number
}

export type UpdateUserPayload = {
  fullName?: string
  avatarUrl?: string
  department?: string
}

export type UploadResponse = string

export type KudoMedia = {
  id: string
  kudoId: string
  mediaType: 'IMAGE' | 'VIDEO'
  mediaUrl: string
  durationSeconds: number
  createdAt: string
}

export type KudoComment = {
  id: string
  userId?: string
  content: string
  createdAt: string
  updatedAt?: string
  user?: AuthUser
  media?: KudoMedia[]
}

export type KudoReaction = {
  id: string
  userId?: string
  emoji: string
  createdAt: string
  updatedAt?: string
  user?: AuthUser
}

export type KudoListItem = {
  id: string
  senderId: string
  receiverId: string
  points: number
  coreValue: string
  message: string
  visibility: 'PUBLIC' | 'PRIVATE'
  createdAt: string
  updatedAt: string
  sender?: AuthUser
  receiver?: AuthUser
  media?: KudoMedia[]
  comments?: KudoComment[]
  reactions?: KudoReaction[],
  tags?:any
}

export type KudoDetailResponse = KudoListItem

export type KudoListResponse = {
  items: KudoListItem[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type CreateKudoPayload = {
  receiverId: string
  points: number
  coreValue: string
  message: string
  visibility?: 'PUBLIC' | 'PRIVATE'
  media?: Array<{
    mediaType: 'IMAGE' | 'VIDEO'
    mediaUrl: string
    durationSeconds?: number
  }>
  taggedUserIds?: string[]
}

export type KudoCommentMediaPayload = {
  mediaType: 'IMAGE' | 'VIDEO'
  mediaUrl: string
}

export type KudoCommentPayload = {
  content: string
  media?: KudoCommentMediaPayload[]
}

export type KudoReactionPayload = {
  emoji: string
}

export type NotificationActor = AuthUser

export type NotificationItem = {
  id: string
  receiverId: string
  actorId?: string | null
  type: string
  entityType: string
  entityId: string
  isRead: boolean
  createdAt: string
  updatedAt: string
  actor?: NotificationActor | null
}

export type NotificationsResponse = {
  items: NotificationItem[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
    unreadCount: number
  }
}

export type UnreadCountResponse = {
  unreadCount: number
}

export type RewardCatalogItem = {
  id: string
  title: string
  description: string
  costPoints: number
  stockQuantity: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type RewardRedemptionItem = {
  id: string
  userId: string
  rewardId: string
  pointsSpent: number
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DELIVERED'
  redeemedAt: string
  reward?: RewardCatalogItem
  user?: AuthUser
}

export type RewardRedemptionResponse = {
  redemption: RewardRedemptionItem
  reward: RewardCatalogItem
}

export type RedeemRewardPayload = {
  rewardId: string
}

export type PeerRecognitionResponse = KudoListResponse
export type UserSearchItem = AuthUser

export async function register(payload: RegisterPayload) {
  return request<{ user: AuthUser }>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function login(payload: LoginPayload) {
  return request<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function getMe() {
  return request<MeResponse>('/users/me')
}

export async function getUsers() {
  return request<UserSearchItem[]>('/users')
}

export async function updateMe(payload: UpdateUserPayload) {
  return request<AuthUser>('/users/me', {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
}

export async function uploadFile(file: File) {
  const formData = new FormData()
  formData.append('file', file)

  return request<UploadResponse>('/uploads', {
    method: 'POST',
    body: formData,
  })
}

export async function createKudo(payload: CreateKudoPayload) {
  return request<KudoListItem>('/kudos/feed', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
export async function createKudoPeerRecognition(payload: CreateKudoPayload) {
  return request<KudoListItem>('/kudos', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
export async function getKudosFeed() {
  return request<KudoListResponse>('/kudos/feed')
}

export async function getKudoById(id: string) {
  return request<KudoDetailResponse>(`/kudos/feed/${id}`)
}

export async function addKudoFeedComment(id: string, payload: KudoCommentPayload) {
  return request<KudoComment>(`/kudos/feed/${id}/comments`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function addKudoFeedReaction(id: string, payload: KudoReactionPayload) {
  return request<KudoReaction>(`/kudos/feed/${id}/reactions`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function getPeerRecognitionSent() {
  return request<PeerRecognitionResponse>('/kudos/peer-recognition/sent')
}

export async function getPeerRecognitionReceived() {
  return request<PeerRecognitionResponse>('/kudos/peer-recognition/received')
}

export async function getNotifications() {
  return request<NotificationsResponse>('/notifications')
}

export async function getUnreadNotificationCount() {
  return request<UnreadCountResponse>('/notifications/unread-count')
}

export async function markAllNotificationsAsRead() {
  return request<{ updatedCount: number }>('/notifications/mark-all-read', {
    method: 'PATCH',
  })
}

export async function getRewards() {
  return request<RewardCatalogItem[]>('/rewards')
}

export async function getRewardById(id: string) {
  return request<RewardCatalogItem>(`/rewards/${id}`)
}

export async function redeemReward(payload: RedeemRewardPayload) {
  return request<RewardRedemptionResponse>('/rewards/redeem', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function getRedemptions() {
  return request<RewardRedemptionItem[]>('/rewards/redemptions/all')
}
