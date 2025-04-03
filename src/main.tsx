import { createRoot } from 'react-dom/client'
import './index.css'
import { Welcome } from './pages/Welcome'
import { Game } from './pages/Game'
import { GameOver } from './pages/GameOver'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
	{
		path: "/",
		element: <Welcome />,
	},
	{
		path: "/game",
		element: <Game />,
	},
	{
		path: "/gameover",
		element: <GameOver />,
	}
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
