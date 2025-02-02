// "use server";

export interface TechnologyInfo {
  "web-servers": string[];
  cms: string[];
  "programming-languages": string[];
  "javascript-frameworks": string[];
  "css-frameworks": string[];
  "marketing-automation": string[];
  security: string[];
}

export interface QuerySearchTechnology {
  count: number;
  method: "technology";
  type: string;
  data: string;
  result: {
    domain: string;
    keywords: string[];
    technology_info: TechnologyInfo;
  }[];
}

export interface QuerySearchOthers {
  count: number;
  method: "domain" | "leak" | "logs";
  type: string;
  data: string;
  result: string[];
}

export interface QuerySearchSubmit {
  ok: boolean;
  code: number;
  message: string;
  data: QuerySearchOthers | QuerySearchTechnology;
}

//     {"method": "domain", "type": "domain", "data": "test.com"}
// {"method": "leak", "type": "domain", "data": "test.com"}
// {"method": "logs", "type": "domain", "data": "test.com"}
// {"method": "technology", "type": "security", "data": "hsts"}

// {
//   "domain": "",
//   "keywords": [],
//   "technology_info": {
//     "web-servers": [],
//     "cms": [],
//     "programming-languages": [],
//     "javascript-frameworks": [],
//     "css-frameworks": [],
//     "marketing-automation": [],
//     "security": []
//   }
// }

const searchApiUrl = process.env
  .NEXT_PUBLIC_HOME_HERO_QUERIES_SEARCH_URL as string;

export async function submitQuerySearch(reqBody: {
  method: string;
  type: string;
  data: string;
}): Promise<QuerySearchSubmit | false> {
  const body: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(reqBody),

    //     {"method": "domain", "type": "domain", "data": "test.com"}
    // {"method": "leak", "type": "domain", "data": "test.com"}
    // {"method": "logs", "type": "domain", "data": "test.com"}
    // {"method": "technology", "type": "security", "data": "hsts"}
  };
  try {
    const response = await fetch(searchApiUrl, body);
    const result = await response.json();

    if (!response.ok) {
      new Error(`somthing went wrong => ${result}`);
    }

    // console.log(reqBody, result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
