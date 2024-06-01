import "./App.css";
import { UserProvider, useUser } from "./lib/context/user";
import { Home } from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const isloginPage = window.location.pathname === "/login";

  return (
    <div>
      <Navbar />
      <main>
        <UserProvider>{isloginPage ? <Login /> : <Home />}</UserProvider>
      </main>
    </div>
  );
}

export default App;

function Navbar() {
  const user = useUser();
  console.log(user.current);

  return (
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        {user.current ? (
          <>
            <span>{user.current.email}</span>
            <button type="button" onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}
