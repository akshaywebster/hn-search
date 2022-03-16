import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits } = useGlobalContext()

  if (isLoading) {
    return <div className="loading"></div>
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        const {
          objectID,
          title,
          author,
          num_comments,
          points,
          url,
          created_at,
        } = story

        // to get month name from date object
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
        const dateObj = new Date(created_at)
        // get date in "Month DD YYYY" format
        const postDate = `${
          months[dateObj.getMonth()]
        } ${dateObj.getUTCDate()} ${dateObj.getUTCFullYear()}`

        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by{' '}
              <span>
                <a
                  href={`https://news.ycombinator.com/user?id=${author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author"
                >
                  {author}
                </a>{' '}
                |{' '}
              </span>{' '}
              {num_comments} comments | {postDate}
            </p>
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-link"
              >
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
