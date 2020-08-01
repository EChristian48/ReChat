import * as React from 'react'
import { Paper, Container } from '@material-ui/core'

type ChatBubbleProps = {
  position: 'left' | 'right'
}

const ChatBubble: React.FC<ChatBubbleProps> = (props) => {
  return (
    <Container>
      <Paper variant='outlined'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia sint,
        corrupti exercitationem cupiditate libero, omnis necessitatibus magnam
        ullam enim, alias dignissimos vel accusantium. Expedita suscipit natus
        cum alias laudantium!
      </Paper>
    </Container>
  )
}

export { ChatBubble }
