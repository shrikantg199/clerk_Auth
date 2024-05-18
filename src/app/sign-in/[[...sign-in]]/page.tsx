import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex my-12 justify-center items-center">
      {" "}
      <SignIn path="/sign-in" />
    </div>
  );
}
