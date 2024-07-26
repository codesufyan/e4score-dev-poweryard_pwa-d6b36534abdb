// import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
// import OnSite from "../pages/OnSite";
// import YardView from "../pages/YardView";

// export const routes = [
//     {path: '/', Component: Login},
//     {path: '/dashboard', Component: Dashboard},
//     {path: '/yard-view', Component: YardView},
//     {path: '/onsite', Component: OnSite},
// ]




// import Dashboard from "../pages/Dashboard";
// import Login from "../pages/Login";
// import OnSite from "../pages/OnSite";
// import YardView from "../pages/YardView";

// export const routes = [
//   { path: '/', Component: Login },
//   { path: '/dashboard', Component: Dashboard, protected: true },
//   { path: '/yard-view', Component: YardView, protected: true },
//   { path: '/onsite', Component: OnSite, protected: true },
// ];



import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import OnSite from "../pages/OnSite";
import YardView from "../pages/YardView";

export const routes = [
  { path: '/', Component: Login, protected: false },
  { path: '/dashboard', Component: Dashboard, protected: true },
  { path: '/yard-view', Component: YardView, protected: true },
  { path: '/onsite', Component: OnSite, protected: true },
];
