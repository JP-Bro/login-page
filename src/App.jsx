import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in with: ${email}`);
  };

  return (


        <h2>Sign in</h2>
        <div className="input-box">
          <label>Email or mobile phone number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button onClick={handleLogin} className="sign-in-btn">
          Sign in
        </button>
        <p className="help">
          <a href="#">Forgot password?</a>
        </p>
        <hr />
        <button className="create-account-btn">Create your mobisharks account</button>
      </div>
    </div>
  );
}
