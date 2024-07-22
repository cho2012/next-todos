"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { headers } from "next/headers";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="flex items-center " onClick={handleLogout}>
      logout
      <Button />
    </div>
  );
}
