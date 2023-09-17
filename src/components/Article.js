import React from 'react'

const calculateEmojis = (minutes) => {
  const emojis = minutes < 30 ? '☕️'.repeat(Math.ceil(minutes / 5)) : '🍱'.repeat((Math.ceil(minutes / 10)))
  return `${emojis} ${minutes} min read`
}
const Article = ({ title, date, preview, url }) => {

  return (
    <article>
      <h3 >
        {/* <a href={url} target="_blank" rel='noopener noreferrer'> */}
         {title} 
        {/* </a> */}
      </h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview} </p>
      <div>{calculateEmojis}</div>
    </article>
  )
}

export default Article