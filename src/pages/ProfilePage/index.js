import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { PageTitle } from 'components'
import { ProfileForm } from 'components/forms'

const defaultProps = {}

const profileData = {
  email: 'alex.hitler@mail.com',
  passportCode: '123456789 1234',
  firstName: 'Александра',
  lastName: 'Шулова',
  passportDate: '12/12/2019',
  address: 'г.Тверь ул.Пушкина д.Колотушкина 32A/2',
}

function ProfilePage() {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.container}>
        <PageTitle />
        <ProfileForm defaultValues={profileData} />
      </div>
    </Container>
  )
}

ProfilePage.defaultProps = defaultProps
export default ProfilePage

// styles
const useStyles = makeStyles({
  container: {
    margin: 0,
  },
})
