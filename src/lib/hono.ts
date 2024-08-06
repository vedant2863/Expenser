import { hc } from "hono/client";
import { type AppType } from "@/app/api/[[...route]]/route";

const url = process.env.NEXT_PUBLIC_API_URL!;
export const client = hc<AppType>(url);

