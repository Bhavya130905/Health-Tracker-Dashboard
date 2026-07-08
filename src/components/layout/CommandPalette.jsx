import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import command from "../../constants/command.js";
import CommandItem from "./CommandItem.jsx";

function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return command.filter((command) =>
      command.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;

    function handleKey(event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelected((prev) =>
          Math.min(prev + 1, filtered.length - 1)
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelected((prev) =>
          Math.max(prev - 1, 0)
        );
      }

      if (event.key === "Enter") {
        if (!filtered[selected]) return;

        navigate(filtered[selected].path);
        onClose();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [filtered, selected, navigate, onClose, open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center border-b px-5 py-4">
          <Search
            size={20}
            className="text-slate-400"
          />

          <input
            autoFocus
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search pages..."
            className="ml-3 w-full border-none outline-none"
          />
        </div>

        <div className="max-h-96 overflow-y-auto p-3">
          {filtered.length ? (
            filtered.map((command, index) => (
              <CommandItem
                key={command.id}
                command={command}
                active={selected === index}
                onSelect={() => {
                  navigate(command.path);
                  onClose();
                }}
              />
            ))
          ) : (
            <div className="p-6 text-center text-slate-500">
              No matching pages found.
            </div>
          )}
        </div>

        <div className="border-t p-3 text-xs text-slate-500">
          ↑ ↓ Navigate • Enter Select • Esc Close
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;