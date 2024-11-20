export default function WebStats() {
  return (
    <section className="w-11/12 mx-auto lg:w-full h-full min-h-full mb-16 lg:mb-28">
      <h2 className="w-fit font-semibold bg-blue-grad-btn text-white mx-auto rounded-lg text-sm  px-6 py-3 mb-12">
        Statistics (Logs database)
      </h2>
      <div
        className=" mt-4 sm:mt-0 py-9 p-3 sm:p-4 lg:p-6  w-full
      rounded-2xl lg:rounded-3xl bg-fe-c-bg-light shadow-sm 
      flex  gap-4  text-fe-c-text-title justify-items-center"
      >
        <div className="flex w-full  xs:w-full sm:w-full mx-auto  sm:justify-between ">
          <div
            className=" justify-between
             w-fit mx-auto sm:w-full items-center xs:items-start flex gap-4 sm:gap-0 sm:justify-evenly"
          >
            <div className="flex gap-3 items-center">
              <div className="bg-blue-600/10  rounded-md  size-8 flex justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 0C4.48744 0 0 4.48744 0 10C0 15.5126 4.48744 20 10 20C15.5126 20 20 15.5126 20 10C20 4.48744 15.5126 0 10 0ZM10 1.43216C12.2211 1.43216 14.2513 2.28141 15.7739 3.67839C15.5176 3.62814 15.2613 3.63819 15.0101 3.72362C14.3166 3.96482 13.7236 4.96985 14.1608 5.81407C14.3618 6.201 14.7638 6.75377 15.201 7.33166C15.4824 7.70854 16.0955 9.07538 15.5678 11.0854C15.196 12.5075 14.4171 14.9548 14.4171 14.9548L11.3065 5.90452H12.2864C12.4874 5.90452 12.6482 5.74372 12.6482 5.54271C12.6482 5.34171 12.4874 5.1809 12.2864 5.1809H7.53266C7.33166 5.1809 7.17085 5.34171 7.17085 5.54271C7.17085 5.74372 7.33166 5.90452 7.53266 5.90452H8.35176L9.77387 9.60804L7.92965 15.1106L4.83417 5.90452H5.81407C6.01508 5.90452 6.17588 5.74372 6.17588 5.54271C6.17588 5.34171 6.01508 5.1809 5.81407 5.1809H2.9196C4.46734 2.9196 7.06533 1.43216 10 1.43216ZM1.43216 10C1.43216 8.77889 1.68844 7.61809 2.15075 6.56784L6.27638 17.7136C3.41206 16.3266 1.43216 13.392 1.43216 10ZM7.51256 18.196L10.1859 10.794L12.8643 18.0754C11.9698 18.392 11.005 18.5678 10.005 18.5678C9.13568 18.5678 8.30151 18.4372 7.51256 18.196ZM14.5276 17.2714C15.0653 15.6884 16.9246 10.1658 17.2764 9.07035C17.608 8.0402 17.8744 7.43719 17.8543 6.58291C18.3116 7.63317 18.5678 8.78895 18.5678 10C18.5678 13.0603 16.9497 15.7538 14.5276 17.2714Z"
                    fill="#0071BC"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 text-xs sm:text-sm font-semibold">
                <span className="font-sans">868496</span>
                <span>WordPress Sites</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-purple-600/10   rounded-md size-8 flex justify-center items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9726 2.028C13.33 1.38507 12.567 0.875046 11.7272 0.527074C10.8874 0.179102 9.98731 0 9.07828 0C8.16924 0 7.26912 0.179102 6.42933 0.527074C5.58953 0.875046 4.82654 1.38507 4.18392 2.028C1.48597 4.7271 1.48472 9.11788 4.18392 11.8165C5.48201 13.1145 7.24259 13.8437 9.07834 13.8437C10.9141 13.8437 12.6747 13.1145 13.9727 11.8164C15.2708 10.5184 16 8.75787 16 6.92219C16 5.08651 15.2707 3.32601 13.9726 2.028ZM0.184699 14.9139L2.97769 12.1195L3.13155 12.2905C3.22243 12.3914 3.316 12.4899 3.41226 12.5858C3.50852 12.6817 3.60731 12.7755 3.70863 12.8671L3.87871 13.0209L1.08493 15.8162C0.965085 15.9345 0.803255 16.0006 0.634825 16C0.466393 15.9994 0.305062 15.9321 0.186103 15.8128C0.0671444 15.6936 0.00023365 15.5321 0 15.3637C-0.000234604 15.1953 0.0660715 15.0335 0.184699 14.9139Z"
                    fill="#4300A0"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1 text-xs sm:text-sm font-semibold">
                <span className="font-sans">425829</span>
                <span>Total Records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
