const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export interface BookDetails {
  id: string;
  title: string;
  authors: string;
  coverUrl: string;
  bookUrl: string;
}

// Function to get details for a single book by ISBN
const getBook = async (isbn: string): Promise<BookDetails | null> => {
  if (!API_KEY) {
    throw new Error("Missing Google Books API key");
  }

  try {
    const response = await fetch(`${API_BASE_URL}?q=isbn:${isbn}&key=${API_KEY}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    if (data.totalItems === 0 || !data.items) return null;

    const book = data.items[0];
    const volumeInfo = book.volumeInfo;

    return {
      id: book.id,
      title: volumeInfo.title,
      authors: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'N/A',
      coverUrl: volumeInfo.imageLinks?.thumbnail || '/placeholder.svg',
      bookUrl: volumeInfo.infoLink,
    };
  } catch (error) {
    console.error(`Failed to fetch details for ISBN ${isbn}:`, error);
    return null;
  }
};

// Function to get details for multiple books
export const getBookDetails = async (isbns: string[]): Promise<BookDetails[]> => {
  try {
    const bookPromises = isbns.map(isbn => getBook(isbn));
    const books = await Promise.all(bookPromises);
    return books.filter((book): book is BookDetails => book !== null);
  } catch (error) {
    console.error("Error fetching book details:", error);
    return [];
  }
};
