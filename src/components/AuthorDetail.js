import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class AuthorDetail extends React.Component {
  render() {
    const { fetchUser, userId } = this.props

    return <div>{fetchUser(userId)}</div>
  }
}

export default connect({ fetchUser })(AuthorDetail)
