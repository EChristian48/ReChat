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

const AddChatDialog: React.FC = () => {
  return (
    <Dialog open>
      <DialogTitle>Start New Chat</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To start a new chat with someone, please enter their email address
          that they used to sign-up here.
        </DialogContentText>

        <TextField variant='outlined' label='E-Mail' fullWidth />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Chat!</Button>
      </DialogActions>
    </Dialog>
  )
}
