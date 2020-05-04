import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import { PostsCollection } from './../imports/api/posts'
import App from './../imports/ui/App'

Meteor.startup(() => {
  // eslint-disable-next-line no-undef
  Tracker.autorun(() => {
    const posts = PostsCollection.find({}, { sort: { date: -1 } }).fetch()
    ReactDOM.render(<App posts={posts} />, document.querySelector('#app'))
  })
})
