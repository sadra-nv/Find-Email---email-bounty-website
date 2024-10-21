import { Code } from "bright";

export default function APICode() {
  Code.theme = "github-dark";
  const myCode = `root@criminalip ~ % curl --request GET --url "https://api.criminalip.io/v1/asset/ip/summary?ip=<ip>" --header "x-api-key: <YOUR_API_KEY>" | {
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
}
root@criminalip ~ %
`;

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
      <Code lang="shell" className=" rounded-lg shadow-api-code ">
        {myCode}
      </Code>
    </div>
  );
}
