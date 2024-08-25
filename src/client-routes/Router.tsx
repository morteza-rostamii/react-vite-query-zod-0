import { useRoutes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { C_ROUTES } from "./routes";

const routes = [
  {
    element: <HomePage/>,
    path: C_ROUTES.home.route,
  },
  // {
  //   element: <AuthGuard/>,
  //   children: [
  //     {
  //       element: <PanelLayout/>,
  //       children: [
  //         {
  //           path: '/', 
  //           element: <Suspense fallback={<LoadSpinner/>}>
  //           <LazyPanelPage/>
  //           </Suspense>
  //         },
          

  //       ],
  //     },
  //   ]
  // },

  // Guest
  // {
  //   element: <GuestGuard/>,
  //   children: [
  //     {
  //       element: <AuthLayout/>,
  //       children: [
  //         // trade
  //         {path: ROUTES.login.route, element: <LoginPage/>},
  //         {path: ROUTES.register.route, element: <RegisterPage/>},
  //         {path: ROUTES.verifyEmail.route, element: <VerifyEmailPage/>},
  //         {path: ROUTES.forgotPassword.route, element: <ForgotPassPage/>},
  //       ],
  //     },
  //   ]
  // },

  {
    path: '*', 
    element: <>404</>
  }
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
}

export default Router;