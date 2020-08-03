import * as React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  Box,
} from '@material-ui/core'

import { ChatListItem } from '../../scripts/components/ChatListItem'
import { AddChatFab } from '../components/AddChatFab'
import { AddChatDialog } from '../components/AddChatDialog'
type HomePageState = {
  isDialogOpen: boolean
}

class HomePage extends React.Component<{}, HomePageState> {
  state: HomePageState = {
    isDialogOpen: false,
  }

  closeDialog = () => {
    this.setState({
      isDialogOpen: false,
    })
  }

  openDialog = () => {
    this.setState({
      isDialogOpen: true,
    })
  }

  logout = () => {
    location.href = '/#/logout'
  }

  render() {
    return (
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }} variant='h6'>
              ReChat
            </Typography>

            <Button variant='outlined' color='inherit' onClick={this.logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <ChatListItem name='Henri Sujono' lastText='Halo aku ganteng' />
        </List>

        <AddChatFab onClick={this.openDialog} />

        <AddChatDialog
          open={this.state.isDialogOpen}
          onClose={this.closeDialog}
          onConfirm={this.closeDialog}
        />
      </Box>
    )
  }
}

export { HomePage }
