import { useState } from "react"

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

  const [addPost, setAddPost] = useState(null);

  return (
    <div>
      {posts.map(post => {
        return (
          <ul className="list-group" key={post['id']}>
            <li className="list-group-item fs-4">{post['title']}</li>
          </ul>
        )
      })}
      <div className="d-flex col-12">
        <input type="text" className="form-control mt-5 fs-4" placeholder="Inserisci un nuovo post" />
        <button className="btn btn-success mt-5 fs-4" onClick={() => { setAddPost(addPost) }}>Aggiungi</button>
      </div>
    </div>
  )
}

export default Main
