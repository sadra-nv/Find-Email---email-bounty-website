import { verifyPayment } from "@/lib/services/payment/verifyPayment";
import Link from "next/link";

export default async function ApproveSec({
  searchParams,
}: {
  searchParams: {
    method: string;
    token: string;
  };
}) {
  let data = null;

  if (searchParams.method) {
    data = await verifyPayment({
      method: searchParams.method,
      token: searchParams.token,
    });
  }

  return (
    <>
      {data && data.data.is_paid && (
        <div className="w-full h-full flex flex-col justify-center items-center lg:gap-8 gap-4 container">
          <svg
            className="fill-green-600  min-h-16 size-36"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>

          <p className="text-xl lg:text-3xl font-semibold text-green-600 text-center">
            Payment was successfull
          </p>

          <div className="flex justify-center gap-6 items-center mt-4">
            <Link
              href="/dashboard/profile"
              type="submit"
              className="bg-orange-grad-btn w-32 block rounded-lg font-bold text-white text-sm text-center py-4 mt-8   btn-hover"
            >
              <span className="text-sm font-bold lg:text-base text-white">
                Profile
              </span>
            </Link>
          </div>
        </div>
      )}

      {(!data || !data.ok || !data.data.is_paid) && (
        <div className="w-full h-full flex flex-col justify-center items-center lg:gap-8 gap-4 container">
          <svg
            width="32"
            height="32"
            className="  min-h-16 size-36 fill-red-600"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path>
          </svg>

          <p className="text-xl lg:text-3xl font-semibold text-red-600 text-center">
            Payment Failed
          </p>

          <div className="flex justify-center gap-6 items-center">
            <Link
              href="/dashboard/profile"
              type="submit"
              className="bg-orange-grad-btn block rounded-lg font-bold text-white text-sm text-center py-4 mt-8 w-32 btn-hover"
            >
              <span className="text-sm font-bold lg:text-base text-white">
                Profile
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
