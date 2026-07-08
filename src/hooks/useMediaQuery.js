import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const getMatches = () =>
    window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    function listener(event) {
      setMatches(event.matches);
    }

    media.addEventListener("change", listener);

    return () =>
      media.removeEventListener(
        "change",
        listener
      );
  }, [query]);

  return matches;
}