import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";
import { FaBook } from "react-icons/fa";

type BookDetail = {
  title: string;
  description: string;
  publisher: string;
  mainLink?: string;
  src: string;
};

type BooksProps = {
  bookDetails: BookDetail[];
};

function BookItem({ title, description, mainLink, src }: BookDetail) {
  return (
    <Card className="relative flex flex-row w-full min-h-fit border-transparent bg-transparent gap-4 mb-0 px-3 py-2 hover:bg-cardhover-background hover:shadow-lg">
      <div className="flex-1">
        <CardHeader className="p-0 flex flex-row items-center gap-2">
          <FaBook className="text-foreground h-5 w-5" />
          <CardTitle className="text-base text-foreground whitespace-normal mb-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-sm text-muted-foreground tab">
          {description}
        </CardDescription>
        {mainLink && (
          <CardFooter className="px-0 pb-2">
            <a
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link font-bold text-base hover:text-link-light focus-visible:text-link-light"
            >
              View Book
            </a>
          </CardFooter>
        )}
      </div>
      <div className="flex-none w-24 h-32">
        <img src={src} alt={`${title} cover`} className="w-full h-full object-cover" />
      </div>
    </Card>
  );
}

const Books: FC<BooksProps> = ({ bookDetails }) => {
  return (
    <section id="books" className="flex flex-col gap-3 mb-16 lg:mb-24">
      <div className="lg:hidden font-bold uppercase text-base text-foreground pb-3">
        Books & Publications
      </div>
      {bookDetails.map((item, index) => (
        <BookItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Books;
