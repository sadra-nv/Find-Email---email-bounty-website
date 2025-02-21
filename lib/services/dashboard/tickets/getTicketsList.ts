import getAuthToken from "../../auth/getAuthToken";

interface UserTickets {
  ok: boolean;
  code: number;
  message: string;
  data: {
    tickets: {
      ticket_id: string;
      subject: string;
      status: string;
      last_message: string;
      created_at: number;
      updated_at: number;
      last_message_time: number;
    }[];
    meta: {
      page: number;
      per_page: number;
      total_pages: number;
      total_items: number;
      next: number | null;
      prev: number | null;
    };
  };
}

const ticketsAPI = process.env.NEXT_PUBLIC_TICKETS_LIST_URL;

export async function getTicketsList({
  page,
  filter_method,
}: {
  filter_method?: "open" | "pending" | "closed" | "all" | null;
  page?: number | null;
}): Promise<UserTickets | false> {
  const filterMethod =
    filter_method && filter_method !== "all"
      ? `filter_type=${filter_method}&`
      : "";
  const pageNumber = page ? `page=${page}&` : "page=1&";

  const token = await getAuthToken();

  try {
    const response = await fetch(
      `${ticketsAPI}?${filterMethod}${pageNumber}per_page=5`,
      {
        headers: {
          Authorization: token ? token : "",
        },
      }
    );

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
