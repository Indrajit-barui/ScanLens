import ForgotLeftsection from "../components/forgot/ForgotLeftsection"
import ForgotPasswordForm from "../components/forgot/ForgotPasswordForm"
const Forgot = () => {
  return (
    <div className="min-h-screen lg:grid lg:h-screen lg:min-h-0 lg:grid-cols-2">
        <div className="hidden md:block">
       <ForgotLeftsection /> 
        </div>
    <ForgotPasswordForm />
        

    </div>
  )
}

export default Forgot