import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <main className="p-4">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
