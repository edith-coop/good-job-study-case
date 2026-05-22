import { io, type Socket } from 'socket.io-client'

const SOCKET_URL = 'http://localhost:3000'

let socket: Socket | null = null

export function getSocket(userId?: string) {
  if (!socket) {
    socket = io(SOCKET_URL, {
      autoConnect: false,
      withCredentials: true,
      transports: ['websocket'],
      auth: userId ? { userId } : undefined,
    })
  }

  return socket
}

export function connectSocket(userId: string) {
  const instance = getSocket(userId)
  instance.auth = { userId }
  if (!instance.connected) {
    instance.connect()
  }
  return instance
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect()
  }
}
