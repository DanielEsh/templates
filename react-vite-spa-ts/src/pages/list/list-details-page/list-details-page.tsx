import { useParams } from 'react-router-dom'

export const ListDetailsPage = () => {
  const { id } = useParams()

  return <div>List Details Page by id = {id}</div>
}
