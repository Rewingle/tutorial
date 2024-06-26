"use client";

/* import { User } from "@/types/user"; */
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: string | null;
  };
} 

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  }

  return(
	  <div className="rounded-lg border shadow-lg p-10">
      <div>
        Id : {user.id}
      </div>
      <div>
        Name : {user.name}
      </div>
      <div>
        Email : {user.email}
      </div>
      <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}