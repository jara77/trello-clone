import { z } from "zod";

export const CreateBoard = z.object({
	title: z.string({
		required_error: "Board title is required",
		invalid_type_error: "Board title is requiered",
	}).min(3, {
		message: "Title to short",
	}),
});