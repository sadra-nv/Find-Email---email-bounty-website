import { z } from "zod";

export const HomeHeroSecSearchSchema = z.object({
  method: z.string().min(1, "Method is required"),
  type: z.string().min(1, "Type is required"),
  data: z.string().min(1, "Search query is required"),
});

export type HomeHeroSecSearch = z.infer<typeof HomeHeroSecSearchSchema>;
