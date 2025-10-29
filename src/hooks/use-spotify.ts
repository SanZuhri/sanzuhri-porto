import useSWR from "swr";
import { getNowPlaying } from "@/lib/spotify";

export const useSpotify = () => {
  const { data, error } = useSWR("/api/spotify", getNowPlaying);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
