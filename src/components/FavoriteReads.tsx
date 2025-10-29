import { useEffect, useState } from "react";
import { getBookDetails, BookDetails } from "@/lib/googleBooks";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

// Add the ISBNs for your favorite books here.
// You can usually find the ISBN on the book's back cover or inside page.
const bookIsbns = [
  "9798400903526", // Omniscient Reader's Viewpoint
  "9781509889174", // If Cats Disappeared from the World
  "9780451526342", // Animal Farm
];

export function FavoriteReads() {
  const [books, setBooks] = useState<BookDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const bookDetails = await getBookDetails(bookIsbns);
      setBooks(bookDetails);
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return <FavoriteBooksSkeleton />;
  }

  return (
    <div className="space-y-3">
      {books.map(book => (
        <a
          key={book.id}
          href={book.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors group"
        >
          <div className="w-16 h-24 rounded-md overflow-hidden relative flex-shrink-0 bg-muted">
            <img
              src={book.coverUrl}
              alt={`Cover for ${book.title}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{book.title}</p>
            <p className="text-xs text-muted-foreground truncate">{book.authors}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-opacity" />
        </a>
      ))}
    </div>
  );
}

const FavoriteBooksSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: bookIsbns.length }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-3 bg-muted/20 rounded-lg border">
          <Skeleton className="w-16 h-24 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};
