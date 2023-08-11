import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <h1>EntApex App</h1>
      <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
        Get Started
      </Link>
    </>
  );
}
