import { redirect } from "next/navigation";

export const authConfig = {
  providers:[],
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized({ auth, request }) {
        const isLoggedIn = auth?.user;
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          console.log(request.nextUrl)
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;

        // if (isLoggedIn) {
        //   // If the user is logged in, allow access to any page
        //   if (!isOnDashboard) {
        //     return Response.redirect(new URL("/dashboard", request.nextUrl));
        //   }
        //   return true;
          
        // } else if (isOnDashboard) {
        //   // If the user is not logged in and trying to access a dashboard page, redirect to the login page
        //   return false
        // } else {
        //   // If the user is not logged in and trying to access a non-dashboard page, allow access
        //   return true;
        // }


        // if (isLoggedIn) {
        //   // If the user is logged in, allow access to any page
        //   if (!isOnDashboard) {
        //     return Response.redirect(new URL("/dashboard", request.nextUrl));
        //   } 
          
        // } else {
        //   // If the user is not logged in, redirect to login page for dashboard routes
        //   if (isOnDashboard) {
        //     return false;
        //   } else {
        //     return true; // Allow access to non-dashboard pages
        //   }
        // }


        // if (isLoggedIn && isOnDashboard) {
        //   // If the user is logged in and on the dashboard, allow access
        //   return true;
        // } else if (isLoggedIn && !isOnDashboard) {
        //   // If the user is logged in but not on the dashboard, redirect to dashboard
        //   return Response.redirect(new URL("/dashboard", request.nextUrl));
        // } else if (!isLoggedIn && isOnDashboard) {
        //   // If the user is not logged in and trying to access the dashboard, redirect to login
        //   return false,
        // } else {
        //   // If the user is not logged in and not on the dashboard, allow access
        //   return true;
        // }

        // if (isLoggedIn && isOnDashboard) {
        //   // If the user is logged in and on the dashboard, allow access
        //   return true;
        // } else if (isLoggedIn && !isOnDashboard) {
        //   // If the user is logged in but not on the dashboard, redirect to dashboard
        //   return Response.redirect(new URL("/dashboard", request.nextUrl));
        // } else if (!isLoggedIn && isOnDashboard) {
        //   // If the user is not logged in and trying to access the dashboard, redirect to login
        //   return false;
        // } else {
        //   // If the user is not logged in and not on the dashboard, allow access
        //   return true;
        // }
      },
    },
  };