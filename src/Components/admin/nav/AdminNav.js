import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core'
import { firebase } from '../../../firebase'

const AdminNav = () => {
  const links = [
    {
      title: 'Matches',
      linkTo: '/admin_matches'
    },
    {
      title: 'Add Match',
      linkTo: '/admin_matches/edit_match'
    },
    {
      title: 'Players',
      linkTo: '/admin_players'
    },
    {
      title: 'Players',
      linkTo: '/admin_players/add_player'
    }
  ]

  const style = {
    color: '#ffffff',
    fontWeight: '300',
    borderBottom: '1px solid #353535'
  }

  const renderItems = () =>
    links.map(link => (
      <Link to={links.linkTo} key={links.title}>
        <ListItem button style={style}>
          {links.title}
        </ListItem>
      </Link>
    ))

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log('Log out succesfull')
        },
        error => {
          console.log('Error logging out')
        }
      )
  }

  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => logoutHandler()}>
        Log out
      </ListItem>
    </div>
  )
}

export default AdminNav
