"use client";

import { useObserver } from "@/hooks/useObserver";
import React, { LegacyRef } from "react";

export default function APICode() {
  const codeIntro = "→ root@criminalip ~ %";
  const myCode = ` curl --request GET --url "https://api.criminalip.io/v1/asset/ip/summary?ip=<ip>" --header "x-api-key: <YOUR_API_KEY>" |
   {
   "ip": "8.8.8.8",
   "score": { "inbound": "Moderate", "outbound": "Low" },
   "country": "United States",
   "country_code": "us",
   "region": "California",
   "city": "Los Angeles",
   "isp": "GOOGLE",
   "org_name": "Google",
   "as_no": 15169,
   "postal_code": "90009",
   "latitude": 34.0544,
   "longitude": -118.2441,
   "status": 200
}`;

  // const codeRef = useRef<null | HTMLDivElement>(null);
  // const codeEndRef = useRef<null | HTMLDivElement>(null);
  // const [index, setIndex] = useState(0);
  // const typingSpeed = 10;

  const [observeRef, isInView] = useObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    },
    true
  );
  // useEffect(() => {
  //   const typeText = () => {
  //     if (index < myCode.length && codeRef.current) {
  //       codeRef.current.textContent += myCode[index];
  //       setIndex(index + 1);
  //     }
  //   };

  //   if (index < myCode.length && isInView) {
  //     const timeoutId = setTimeout(typeText, typingSpeed);
  //     return () => clearTimeout(timeoutId);
  //   }
  //   if (index >= myCode.length) {
  //     codeEndRef.current!.style.opacity = "1";
  //   }
  // }, [index, myCode, isInView]);

  return (
    <div className="row-start-1 row-end-2 lg:-row-start-1 lg:-row-end-2 lg:col-start-2 ">
      <h2 className="text-xl lg:text-3xl font-bold text-neutral-50 ">
        API INTEGRATION
      </h2>
      <p className="text-xs lg:text-base leading-loose mt-3 lg:mt-5 mb-8">
        We provide straightforward , easy to use APIs that are desugbed to block
        rist-secored IPs or malicious domain links. Use Cniminal IP code samples
        to seamlessly integrate all other functions and the database in your
        organization’s infrastructure
      </p>

      <pre
        ref={observeRef as LegacyRef<HTMLPreElement>}
        className="bg-back-dark rounded-lg shadow-api-code p-4 lg:p-6 overflow-x-auto thin-bar 
      font-mono text-wrap whitespace-pre-wrap break-words leading-9 relative overflow-y-hidden"
      >
        <span className="text-green-500 ">{codeIntro}</span>
        <div className="opacity-0">{myCode}</div>
        <div className="absolute w-full h-full top-8  left-0 p-4 lg:p-6">
          <code
            // ref={codeRef}
            style={{ "--n": myCode.length } as React.CSSProperties}
            className={`type relative w-full h-fit opacity-0 ${
              isInView && "code-type"
            }`}
          >
            {myCode}
          </code>
        </div>
        <span
          // ref={codeEndRef}
          style={{ "--n": myCode.length } as React.CSSProperties}
          // style={{ opacity: "0" }}
          className={`text-green-500 block mt-4 opacity-0 ${
            isInView && "code-appear"
          }`}
        >
          {codeIntro}
        </span>
      </pre>
    </div>
  );
}
