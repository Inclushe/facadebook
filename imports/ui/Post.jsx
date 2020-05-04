import React from 'react'
import { PostsCollection } from './../api/posts'

// https://stackoverflow.com/a/3809435/5052124
const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gmi

export default class Post extends React.Component {
  render () {
    const post = this.props.postData
    let contentArray = post.content.split(' ')
    contentArray.forEach((string, index) => {
      if (linkRegex.test(string)) {
        contentArray[index] = (<a href={string}>{string} </a>)
      } else if (index !== contentArray.length - 1) {
        contentArray[index] = string + ' '
      }
    })
    // console.log(post.content.match(linkRegex))
    return (
      <div key={post._id} className='post'>
        <p className='post__content'>{contentArray}</p>
        <div className='post__likes'>
          <div className='post__buttons'>
            <button
              onClick={
                () => { PostsCollection.update({ _id: post._id }, { $inc: { likes: 1 } }) }
              }
            >
              <i className='ri-add-line' /><i className='ri-thumb-up-line' />
            </button>
            <button
              onClick={
                () => {
                  if (post.likes > 0) {
                    PostsCollection.update({ _id: post._id }, { $inc: { likes: -1 } })
                  }
                }
              }
            >
              <i className='ri-add-line' /><i className='ri-thumb-down-line' />
            </button>
            <button
              onClick={
                () => { PostsCollection.remove({ _id: post._id }) }
              }
            >
              <i className='ri-delete-bin-line' />
            </button>
          </div>
          <p>{post.likes} like{post.likes !== 1 ? 's' : ''}</p>
        </div>
      </div>
    )
  }
}
