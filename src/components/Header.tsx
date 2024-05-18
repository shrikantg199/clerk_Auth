import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { userId } = auth();
  return (
    <div>
      <div className="bg-white h-12 flex justify-between items-center px-4 text-black border-b">
        <Link href="/">LOGO</Link>
        <div className="mx-4 flex gap-4 justify-center items-center">
          {" "}
          {userId ? (
            <div className="">
              <UserButton />
            </div>
          ) : (
            <>
              {" "}
              <Link
                href="/sign-up"
                className="bg-violet-600 text-white px-2 py-1 rounded-xl"
              >
                SignUp
              </Link>
              <Link
                href="/sign-in"
                className="bg-violet-600 text-white px-2 py-1 rounded-xl"
              >
                SignIn
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
