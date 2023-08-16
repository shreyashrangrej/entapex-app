import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <h1>EntApex App</h1>
      <h2>Logged in as: {user?.email}</h2>
      <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
        Get Started
      </Link>
    </>
  );
}
