import React from 'react'
import AddNewPost from './AddNewPost'
import PostList from './PostList'

export default class App extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <AddNewPost />
        <PostList posts={this.props.posts} />
      </div>
    )
  }
}
