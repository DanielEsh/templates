import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      {String(import.meta.env.VITE_ENV_VARIABLE)}
      <div>
        <Link to="/list">To categories</Link>
      </div>
    </div>
  )
}
