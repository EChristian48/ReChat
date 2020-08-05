interface User {
  name: string | undefined
  photoUrl: string | undefined
}

interface ChatSession {
  users: [string | undefined | null, string | undefined | null]
}

interface Message {
  sent: string | Date
  content: string
  sender: string
}

export { User, Message, ChatSession }
