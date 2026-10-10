import AuthLeftSection from "../components/Login/AuthLeftSection";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <main className="min-h-screen lg:grid lg:h-screen lg:min-h-0 lg:grid-cols-2">

      {/* Left section: hidden on mobile */}
      <div className="hidden lg:block">
        <AuthLeftSection />
      </div>

      {/* Login form: visible on all screen sizes */}
      <LoginForm />

    </main>
  );
};

export default Login;