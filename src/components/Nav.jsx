import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-2 p-3 border border-gray-500 rounded-lg bg-blue-400 text-white'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/prestamos">Prestamos</Link>
        </li>
      </ul>
    </nav>
  );
}
