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

export const md5Schema = z.string().regex(/^[a-f0-9]{32}$/, "Invalid MD5 hash");

const md5ListSchema = z
  .string()
  .transform((input) => input.split("\n").map((line) => line.trim())); // Split by lines
// .refine(
//   (lines) => lines.every((line) => md5Schema.safeParse(line).success), // Validate each line
//   { message: "Each line must be a valid MD5 hash" }
// );

export const CrackerFormSchema = z.object({
  hashes: md5ListSchema,
});

export type CrackerForm = z.infer<typeof CrackerFormSchema>;

export const SMTPFormSchema = z.object({
  smtp_server: z.string().min(2, { message: "Server is not valid" }),
  smtp_port: z.string().min(2, { message: "Port is not valid" }),
  smtp_username: z.string().min(2, { message: "Username is not valid" }),
  smtp_password: z.string().min(2, { message: "Password is not valid" }),
  receiver_email: EmailSchema,
});

export type SMTPForm = z.infer<typeof SMTPFormSchema>;
