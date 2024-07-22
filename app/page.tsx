"use client";

import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Todo from "./todo/page";
import axios from "axios";

type UserType = {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
};

export default function Home() {
  const [userData, setUserData] = useState<UserType | undefined>();
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        router.push("login");
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Header username={userData?.name} photoUrl={userData?.photoUrl} />
      <Todo />
    </div>
  );
}
