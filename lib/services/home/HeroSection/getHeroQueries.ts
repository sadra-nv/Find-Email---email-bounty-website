export interface HeroQuery {
  id: number;
  title: string;
  type: string;
  icon: string;
  default: string;
  queries: {
    key: string;
    example: string;
  }[];
}

export interface HeroQueries {
  ok: boolean;
  code: number;
  message: string;
  data: {
    searches_queries: HeroQuery[];
  };
}

const queriesAPI = process.env.HOME_HERO_QUERIES_URL;
export async function getHeroQueries(): Promise<HeroQueries | false> {
  try {
    const response = await fetch(queriesAPI as string);
    if (!response.ok) {
      throw new Error("Somthing Went Wrong");
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
