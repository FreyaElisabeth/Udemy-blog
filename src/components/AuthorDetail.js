import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class AuthorDetail extends React.Component {
  render() {
    const { author } = this.props

    if (!author) {
      return null
    }
    return <div className="header">{author.name}</div>
  }

  componentDidMount() {
    const { fetchUser, userId } = this.props
    return fetchUser(userId)
  }
}

const mapStateToProps = (state, ownProps) => {
  return { author: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(AuthorDetail)
