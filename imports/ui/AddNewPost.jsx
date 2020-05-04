import React from 'react'
import { PostsCollection } from './../api/posts'

export default class AddNewPost extends React.Component {

  createNewPost (element) {
    const content = element.content.value
    if (content !== '') {
      element.content.value = ''
      PostsCollection.insert({
        content,
        likes: 0,
        date: new Date()
      })
    }
  }

  handleCreatingNewPost (event) {
    event.preventDefault()
    this.createNewPost(event.target)
  }

  handleKeyDown (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.createNewPost(event.target.parentElement)
      event.target.blur()
    }
  }

  render () {
    return (
      <div className='add-post-element'>
        <form onSubmit={this.handleCreatingNewPost.bind(this)}>
          <textarea className='add-post-element__textarea' name='content' onKeyDown={this.handleKeyDown.bind(this)} placeholder="What's on your mind?" />
          <input className='add-post-element__submit' type='submit' value='Post' />
          <p className='add-post-element__submit-info'>or press Enter</p>
        </form>
      </div>
    )
  }
}
