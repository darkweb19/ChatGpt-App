import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Chat from "./components/Chat";
import Image from "./components/Image";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/chat",
				element: <Chat />,
			},
			{
				path: "/image",
				element: <Image />,
			},
		],
	},
]);

export default router;
