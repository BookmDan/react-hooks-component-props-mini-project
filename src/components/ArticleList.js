import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          url= {post.url}
          post={post}
          date={post.date}          
          preview={post.preview}
        />
      )) }
    </main>
  )
}

export default ArticleList
