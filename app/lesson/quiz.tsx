"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

type Props = {
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferInsert)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: undefined; // TODO: Replace with subscription DB type
};

export const Quiz = ({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        // hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
