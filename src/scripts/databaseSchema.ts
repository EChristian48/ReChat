interface User {
  name: string
  photoUrl: string
}

interface ChatSession {
  users: [string, string]
}

interface Message {
  sent: string | Date
  content: string
  sender: string
}

export { User, Message, ChatSession }
