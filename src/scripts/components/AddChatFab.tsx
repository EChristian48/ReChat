import * as React from 'react'

import {
  Fab,
  FabProps,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import { Add } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
)

const AddChatFab: React.FC<Omit<FabProps, 'children'>> = props => {
  const classes = useStyles()

  return (
    <Fab {...props} className={classes.fab}>
      <Add />
    </Fab>
  )
}

export { AddChatFab }
