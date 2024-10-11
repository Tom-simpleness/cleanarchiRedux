import Dashboard from "@trainingsapp/pages/dashboard/Dashboard";
import TrainingConfigurationPage from "@trainingsapp/pages/production/configuration/Configuration";
import TrainingPresentationPage from "@trainingsapp/pages/production/presentation/Presentation";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    {
      path: "/production",
      element: <TrainingConfigurationPage />,
    },
    {
      path: "/production/edit/:trainingId",
      element: <TrainingConfigurationPage />,
    },
    {
      path: "/presentation/:trainingId",
      element: <TrainingPresentationPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
