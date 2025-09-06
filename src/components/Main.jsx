import { useState } from "react"

const Main = () => {
  const initialPosts = ['Spiaggia', 'Lago', 'Montagna', 'Mare', 'Francia', 'Grigliata', 'Natale', 'Pasqua', 'Ferragosto', 'Concerto']

  const [posts, setPosts] = useState(initialPosts)
  const [addPost, setAddPost] = useState('');

  return (
    <div>
      <ul className="list-group">
        {posts.map((post, i) => {
          return (
            <li className="list-group-item fs-4" key={i}>
              <div className="d-flex justify-content-between">
                <div>{post}</div>
                <button className="btn btn-danger">X</button>
              </div>
            </li>
          )
        })}
      </ul>
      <form className="d-flex col-12" onSubmit={(e) => {
        e.preventDefault()
        const copyPosts = [...posts, addPost];
        setPosts(copyPosts)
      }}>
        <input type="text" value={addPost} className="form-control mt-5 fs-4" placeholder="Inserisci un nuovo post"
          onChange={(e) => {
            setAddPost(e.target.value)
          }} />
        <button className="btn btn-success mt-5 fs-4" >Aggiungi</button>
      </form>
    </div>
  )
}

export default Main
