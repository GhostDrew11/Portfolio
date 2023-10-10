import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Oasis from "./pages/Oasis";
import Pizza from "./pages/Pizza";
import Wise from "./pages/Wise";
import Forkify from "./pages/Forkify";
import Bankist from "./pages/Bankist";
import Mapty from "./pages/Mapty";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/projects/oasis",
    element: <Oasis />,
    errorElement: <Error />,
  },
  {
    path: "/projects/pizza",
    element: <Pizza />,
    errorElement: <Error />,
  },
  {
    path: "/projects/wise",
    element: <Wise />,
    errorElement: <Error />,
  },
  {
    path: "/projects/forkify",
    element: <Forkify />,
    errorElement: <Error />,
  },
  {
    path: "/projects/bankist",
    element: <Bankist />,
    errorElement: <Error />,
  },
  {
    path: "/projects/mapty",
    element: <Mapty />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
