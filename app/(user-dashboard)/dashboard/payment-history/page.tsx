import Header from "@/app/components/templates/dashboard/Header/Header";
import PaymentSec from "@/app/components/templates/dashboard/payment/SearchList/PaymentSec";

export default function DashboardProfilePage() {
  return (
    <>
      <div className="w-full lg:w-[80.5%] mx-auto h-full  sm:pt-0 pt-40">
        <Header className="" />
        <main className=" h-full  w-full">
          <PaymentSec />
        </main>
      </div>
    </>
  );
}
