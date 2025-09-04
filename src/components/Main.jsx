

const Main = () => {
  const posts = [
    {
      id: 1,
      title: 'Spiaggia'
    },
    {
      id: 2,
      title: 'Lago'
    },
    {
      id: 3,
      title: 'Montagna'
    },
    {
      id: 4,
      title: 'Mare'
    },
    {
      id: 5,
      title: 'Francia'
    },
    {
      id: 6,
      title: 'Grigliata'
    },
    {
      id: 7,
      title: 'Natale'
    },
    {
      id: 8,
      title: 'Pasqua'
    },
    {
      id: 9,
      title: 'Ferragosto'
    },
    {
      id: 10,
      title: 'Concerto'
    }
  ]

  return (
    <div>
      {posts.map(post => {
        return (
          <ul className="list-group">
            <li className="list-group-item" key={post['id']}>{post['title']}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Main
