import LoginForm from "../ui/loginForm/loginForm"





const LoginPage = () => {

  return (
    <div className="">
        <div className="relative flex min-h-full flex-col bg-white justify-center px-4 py-12 lg:px-8">
          <h1 className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h1>
          <div className="lg:py-4 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <LoginForm/>
          <p class="mt-10 text-center text-sm text-gray-500">{'Don\'t have an account?'}<a class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1" href="/auth/register">Register</a></p>
          </div>
        </div>
    </div>
  )
}

export default LoginPage