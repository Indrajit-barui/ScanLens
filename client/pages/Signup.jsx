import AuthLeftSection from "../components/Login/AuthLeftSection"
import SignupFrom from "../components/Signup/SignupFrom"
const Signup = () => {
  return (
    <div>
            <main className="min-h-screen lg:grid lg:h-screen lg:min-h-0 lg:grid-cols-2">

      {/* Left section: hidden on mobile */}
      <div className="hidden lg:block">
        <AuthLeftSection />
      </div>

      {/* Login form: visible on all screen sizes */}
      <SignupFrom />

    </main>
    </div>
  )
}

export default Signup