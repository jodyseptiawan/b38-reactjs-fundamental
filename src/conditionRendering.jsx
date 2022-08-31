import React, { useState } from "react";

//Create Component PrivatePage
const PrivatePage = (props) => {
  const { setIsLogin } = props;
  return (
    <div>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </div>
  );
};

//Create Component GuestPage
const GuestPage = ({ setIsLogin }) => {
  return (
    <div>
      <h1>Please login</h1>
      <button onClick={() => setIsLogin(true)}>Login</button>
    </div>
  );
};

function ConditionRendering() {
  //init State
  const [isLogin, setIsLogin] = useState(false);
  const [userStatus, setUserStatus] = useState("customer");

  if (isLogin) {
    return <PrivatePage setIsLogin={setIsLogin} />;
  } else {
    return <GuestPage setIsLogin={setIsLogin} />;
  }

  // return (
  //   // Code Inside div
  //   <div>
  //     {/* {isLogin == true && "&& operator"} if true */}
  {
    isLogin ? (
      <PrivatePage setIsLogin={setIsLogin} />
    ) : (
      <GuestPage setIsLogin={setIsLogin} />
    );
  }
  //     {/*if true or false*/}
  //     {/* {isLogin ? (
  //       userStatus == "admin" ? (
  //         "halaman admin"
  //       ) : (
  //         "halaman customer"
  //       )
  //     ) : (
  //       <GuestPage setIsLogin={setIsLogin} />
  //     )} */}
  //   </div>
  // );
}

export default ConditionRendering;
