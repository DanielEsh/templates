import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {String(import.meta.env.VITE_ENV_VARIABLE)}
      <div>
        <Link to="/categories">To categories</Link>
      </div>
    </div>
  )
}