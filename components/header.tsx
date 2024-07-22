import React from "react";
import Title from "./title";
import Button from "./Button";
import LogoutButton from "./logoutButton";

interface Props {
  username: string | undefined;
  photoUrl: string | undefined;
}

const Header: React.FC<Props> = ({ username, photoUrl }) => {
  return (
    <div className="bg-white text-black  ">
      <div className="mx-12 flex justify-between items-center h-[70px] ">
        <Title userName={username} />
        {username ? (
          <div onClick={() => console.log("log out!")}>
            <div className="items-center flex">
              <LogoutButton />
              <div
                className="rounded-full"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundSize: "cover",
                  backgroundImage: `url(${photoUrl})`,
                }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <Button key={1} name="Sign in" />
            <Button key={2} name="Sign up" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
