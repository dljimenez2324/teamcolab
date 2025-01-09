import { z } from "zod";


export const createIssueSchema = z.object({
    title: z.string().min(1, "A title is required!").max(255),
    description: z.string().min(1, "A description is required")
    // description message doesnt work
});
