import React, { useRef } from "react";
import "./scss/Loginpage.scss";

function Loginpage() {
  const userName = useRef();
  const userPassword = useRef();

  return (
    <div
      className="loginpage"
      style={{
        backgroundImage: `url("/images/Slate-Texture-BW-Background.jpg")`,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            userName: userName.current.value,
            Password: userPassword.current.value,
          };
          e.target[0].value = null;
          e.target[1].value = null;
          // console.log();
          console.log(data);
          alert(
            `your Data has been successfully submitted and logged in your console
            {
              userName: ${data.userName} 
              userPassword: ${data.Password}
            }
            `
          );
        }}
        className="box"
      >
        <div className="form_div">
          <h1>Login</h1>
          <input ref={userName} type="text" name="" placeholder="Username" />
          <input
            ref={userPassword}
            type="password"
            name=""
            placeholder="Password"
          />
          <input type="submit" name="" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
