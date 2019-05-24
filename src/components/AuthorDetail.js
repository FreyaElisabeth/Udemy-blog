import React from 'react'
import { connect } from 'react-redux'

class AuthorDetail extends React.Component {
  render() {
    const { author } = this.props

    if (!author) {
      return null
    }

    return <div className="header">{author.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { author: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(AuthorDetail)
