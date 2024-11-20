import ChangePass from "./ChangePass";
import DeleteAcc from "./DeleteAcc";
import TwoStep from "./TwoStep";

export default function PassWordForm() {
  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mt-4 sm:mt-0 py-8 p-3 sm:p-4 lg:p-11 rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm mb-16 lg:mb-28">
      <h2 className="w-fit font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        Security
      </h2>
      <TwoStep />
      <ChangePass />
      <DeleteAcc />
      {/* <form className="w-full mx-auto md:w-4/5 lg:w-11/12 xl:w-4/5 ">
        <div className="w-full flex sm:flex-row flex-col justify-start items-center gap-10 sm:gap-8">
          <MainInput
            className="w-full"
            label="New Password"
            placeholder="**********"
          />
          <MainInput
            className="w-full"
            label="Confirm New Password"
            placeholder="**********"
          />
        </div>

        <div className="w-full max-w-80 sm:w-fit mx-auto">
          <Button
            className="bg-orange-grad-btn text-white  text-sm sm:py-4 sm:px-7 
        rounded-lg sm:rounded-xl mt-12 sm:mt-16 mx-auto inline-block w-full sm:w-fit py-3"
          >
            Change Password
          </Button>
        </div>
      </form> */}
    </section>
  );
}
