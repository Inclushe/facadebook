import React from 'react'
import Post from './Post'

export default class PostList extends React.Component {
  transformPostsIntoHTML () {
    if (this.props.posts.length === 0) {
      return (
        <div className='post-list__placeholder'>
          <i className='ri-message-2-line'/>
          <p>Create your first post to Facadebook.</p>
        </div>
      )
    } else {
      return this.props.posts.map(post => {
        return <Post postData={post} key={post._id} />
      })
    }
  }

  render () {
    return (
      <div className='post-list'>
        {this.transformPostsIntoHTML()}
      </div>
    )
  }
}
