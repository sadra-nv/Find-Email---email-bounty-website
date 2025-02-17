import ApproveSec from "@/app/components/templates/payment-approval/ApproveSec";
import LoadingSec from "@/app/components/templates/UI/Loading/LoadingSec";
import StarsSection from "@/app/components/templates/UI/StarsSection/StarsSection";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const revalidate = 0;

export default function PaymentApproval({
  searchParams,
}: {
  searchParams: {
    method: string;
    token: string;
  };
}) {
  if (!searchParams.method || !searchParams.token) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <StarsSection isStatic />
      <Suspense fallback={<LoadingSec className="min-h-screen" />}>
        <ApproveSec searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
