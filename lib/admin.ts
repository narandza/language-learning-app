import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2n6y2SOzwgnE88q4LlXLabCMWhH"];

export const getIsAdmin = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
