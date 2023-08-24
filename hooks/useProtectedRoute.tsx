import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function useProtectedRoute(userId: string) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    console.log({ userId });
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !userId &&
      !inAuthGroup
    ) {
      console.log("hit auth route");
      // Redirect to the sign-in page.
      router.replace("/(auth)");
    } else if (userId && inAuthGroup) {
      console.log("hit tabs route");
      // Redirect away from the sign-in page.
      router.replace("/(tabs)/home");
    }
  }, [userId, segments]);
}
