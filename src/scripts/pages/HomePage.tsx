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

import * as firebase from 'firebase/app'
import 'firebase/firestore'

import { User, ChatSession } from '../databaseSchema'

type HomePageState = {
  isDialogOpen: boolean
  chatSessions: ChatSession[]
}

class HomePage extends React.Component<{}, HomePageState> {
  state: HomePageState = {
    isDialogOpen: false,
    chatSessions: [],
  }

  createChatSession = () => {}

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

  async componentDidMount() {
    const chatSessionsRef = firebase.firestore().collection
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
          <ChatListItem
            name='Henri Sujono'
            lastText='Halo aku ganteng'
            uid='ucok'
          />
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
