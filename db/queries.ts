import { cache } from "react";
import { db } from "./db";
import { courses } from "./schema";

export const getCourses = cache(async () => {
  const data = await db.select().from(courses);

  return data;
});
