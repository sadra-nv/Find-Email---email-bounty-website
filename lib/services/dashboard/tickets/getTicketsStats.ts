import getAuthToken from "../../auth/getAuthToken";

interface UserTickets {
  ok: boolean;
  code: number;
  message: string;
  data: {
    total: number;
    remaining: number;
    open: number;
    pending: number;
    closed: number;
  };
}

const ticketsAPI = process.env.NEXT_PUBLIC_TICKETS_STATS_URL;

export async function getTicketsStats(): Promise<UserTickets | false> {
  const token = await getAuthToken();

  try {
    const response = await fetch(`${ticketsAPI}`, {
      headers: {
        Authorization: token ? token : "",
      },
    });

    // console.log((await response.json()).data.tickets);
    // console.log(await response.json());
    if (!response.ok) {
      throw new Error("Somthing Went Wrong");
    }

    const data = await response.json();

    if (!data.ok) {
      throw new Error("Somthing Went Wrong");
    }
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
