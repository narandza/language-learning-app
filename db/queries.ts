import { cache } from "react";
import { db } from "./db";
import { courses, userProgress } from "./schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) return null;

  const data = await db
    .select({
      userId: userProgress.userId,
      userName: userProgress.userName,
      userImageSrc: userProgress.userImageSrc,
      hearts: userProgress.hearts,
      points: userProgress.points,
      activeCourseId: userProgress.activeCourseId,
      activeCourseTitle: courses.title,
      activeCourseImageSrc: courses.imageSrc,
    })
    .from(userProgress)
    .leftJoin(courses, eq(userProgress.activeCourseId, courses.id))
    .where(eq(userProgress.userId, userId))
    .limit(1);

  if (data.length === 0) return null;

  return {
    ...data[0],
    activeCourse: {
      id: data[0].activeCourseId,
      title: data[0].activeCourseTitle,
      imageSrc: data[0].activeCourseImageSrc,
    },
  };
});

export const getCourses = cache(async () => {
  const data = await db.select().from(courses);

  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.select().from(courses).where(eq(courses.id, courseId));
  // TODO: Populate units and lessons

  return data;
});
