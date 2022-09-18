const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img src="/images/skeleton404image.jpg" alt="Skeleton Blue Colar Suit"/>
              <div>
              Photo by <a href="https://unsplash.com/@arturtumasjan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Artur Tumasjan</a> on <a href="https://unsplash.com/s/photos/funny-images?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

module.exports = error404
