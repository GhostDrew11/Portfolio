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
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Vigor from "./pages/Vigor";

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
    element: <Vigor />,
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
    <DarkModeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
