import { Link, Outlet } from 'react-router-dom'

export const ListPage = () => {
  return (
    <div>
      <h1>List</h1>
      <div>
        <Link to="/">Back home</Link>
      </div>

      <Outlet />
    </div>
  )
}
