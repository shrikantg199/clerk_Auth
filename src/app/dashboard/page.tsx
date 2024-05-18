import { auth, currentUser } from "@clerk/nextjs/server";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const { userId } = auth();
  const user = await currentUser();
  console.log(user);
  return <div>dashboard</div>;
};

export default page;
