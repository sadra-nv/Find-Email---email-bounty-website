import { z } from "zod";

const EmailSchema = z
  .string()
  .email("Email is not valid")
  .min(4, { message: "Email is not valid" })
  .max(255, { message: "Email is not valid" });

export const HomeHeroSecSearchSchema = z.object({
  method: z.string().min(1, "Method is required"),
  type: z.string().min(1, "Type is required"),
  data: z.string().min(1, "Search query is required"),
});

export type HomeHeroSecSearch = z.infer<typeof HomeHeroSecSearchSchema>;

export const FooterFormSchema = z.object({
  email: EmailSchema,
});

export type FooterForm = z.infer<typeof FooterFormSchema>;

export const ContactUsFormSchema = z.object({
  email: EmailSchema,
  full_name: z
    .string()
    .min(4, { message: "Name is not valid" })
    .max(255, { message: "Name is too long" }),
  message: z
    .string()
    .min(4, { message: "Message is not valid" })
    .max(4096, { message: "Message is too long" }),
});

export type ContactUsForm = z.infer<typeof ContactUsFormSchema>;
