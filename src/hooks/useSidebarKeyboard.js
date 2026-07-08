import { useEffect } from "react";

export default function useSidebarKeyboard(
  itemRefs
) {
  useEffect(() => {
    function handleKeyDown(event) {
      const items = itemRefs.current;

      if (!items?.length) return;

      const current =
        document.activeElement;

      const index =
        items.indexOf(current);

      if (
        event.key === "ArrowDown"
      ) {
        event.preventDefault();

        const next =
          items[
            (index + 1) %
              items.length
          ];

        next?.focus();
      }

      if (
        event.key === "ArrowUp"
      ) {
        event.preventDefault();

        const prev =
          items[
            (index - 1 +
              items.length) %
              items.length
          ];

        prev?.focus();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [itemRefs]);
}