import * as React from 'react'
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core'

type AddChatDialogProps = {
  onConfirm: () => void
  onClose: () => void
  open: boolean
}

const AddChatDialog: React.FC<AddChatDialogProps> = props => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Start New Chat</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To start a new chat with someone, please enter their email address
          that they used to sign-up here.
        </DialogContentText>

        <TextField variant='outlined' label='E-Mail' fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onConfirm}>Chat!</Button>
      </DialogActions>
    </Dialog>
  )
}

export { AddChatDialog }
