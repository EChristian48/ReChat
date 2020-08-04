import * as React from 'react'

import {
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'

type ChatListItemProps = {
  avatar?: string
  name: string
  uid: string
  lastText?: string
}

const ChatListItem: React.FC<ChatListItemProps> = props => {
  return (
    <>
      <ListItem component='a' href={`#/${props.uid}`}>
        <ListItemAvatar>
          <Avatar src={props.avatar} />
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.lastText} />
      </ListItem>
      <Divider />
    </>
  )
}

export { ChatListItem }
