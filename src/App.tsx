// import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//layouts
import HomeLayout from './layouts/HomeLayout/index.tsx';
import DashboardLayout from './layouts/DashboardLayout/index.tsx';

//pages
import Home from './pages/Home/index.tsx';
import Faq from './pages/Faq/index.tsx';
import Login from './pages/Login/index.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import MyEvents from './pages/Dashboard/MyEvents/index.tsx';

//loader
// import { EventLoader } from './loader/EventLoader.ts';

// import Dashboard from './pages/Dashboard/index.tsx';

// const VoteSubmitted = lazy(() => import('./pages/Dashboard/components/VoteSubmitted'));
// const Scoreboard = lazy(() => import('./pages/Dashboard/components/Scoreboard.tsx'));
// const CastVote = lazy(() => import('./pages/Dashboard/components/CastVote'));
// const CreateEvents = lazy(() => import('./pages/Dashboard/components/CreateEvent'));
// const Dashboard = lazy(() => import('./pages/Dashboard'));
// const EventDetails = lazy(() => import('./pages/Dashboard/pages/EventDetails.tsx'));
// const Login = lazy(() => import('./pages/Login'));
// const Register = lazy(() => import('./pages/Register'));
// const NotFound = lazy(() => import('./pages/NotFound'));
// const Home = lazy(() => import('./pages/Home'));
// const Faq = lazy(() => import('./pages/Faq'));

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          // loader: EventLoader,
          element: <Home />
        },
        {
          path: "faq",
          element: <Faq />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: "/dashboard/events",
          element: <MyEvents />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

{/* <main className="flex flex-col h-screen w-full justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Navigate
                to="/home"
                replace
              />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/eventdetails/:id/:judgeId"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <EventDetails />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/addevent/"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <CreateEvents />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/castvote/:id/:judgeId/:squadId"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <CastVote />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/scoreboard/:id/done"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <VoteSubmitted />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/scoreboard/:id"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Scoreboard />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
         <Route
              path="/faq"
                element={
                <Suspense fallback={<h1>Loading ...</h1>}>
                 <Faq />
                  </Suspense>
                  }
                />
      </Routes>
</main> */}
