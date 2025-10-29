import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Home, FileText, BookOpen, FlaskConical, Archive, Mail } from "lucide-react";

const commands = [
  { name: "Home", path: "/", icon: Home },
  { name: "Posts", path: "/post", icon: FileText },
  { name: "Learn", path: "/learn", icon: BookOpen },
  { name: "Lab", path: "/lab", icon: FlaskConical },
  { name: "Archive", path: "/archive", icon: Archive },
  { name: "Contact", path: "/contact", icon: Mail },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {commands.map((command) => (
            <CommandItem
              key={command.path}
              onSelect={() => {
                navigate(command.path);
                setOpen(false);
              }}
            >
              <command.icon className="mr-2 h-4 w-4" />
              <span>{command.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
