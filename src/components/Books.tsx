import { FC } from "react";
import { Card } from "@/components/ui/card";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";

type BookDetail = {
  title: string;
  description: string;
  publishedYear: string;
  mainLink: string;
  src: string;
};

type BooksProps = {
  bookDetails: BookDetail[];
};

function BookItem({ title, description, publishedYear, mainLink, src }: BookDetail) {
  return (
    <Card className="relative flex flex-col w-full min-h-fit border-transparent bg-transparent gap-2 mb-0 px-2 py-1 hover:bg-cardhover-background hover:shadow-md">
      <div className="flex flex-row gap-4">
        <div className="relative h-[180px] w-[120px] rounded-md overflow-hidden -mt-[26px]">
          <Image
            src={src}
            alt={title}
            fill
            sizes="120px"
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="flex flex-row items-center gap-2">
            <span className="text-sm font-bold">{publishedYear}</span>
            <a
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-link hover:text-link/80 flex items-center gap-1"
            >
              View PDF
              <LuArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

const Books: FC<BooksProps> = ({ bookDetails }) => {
  return (
    <section id="books" className="flex flex-col gap-2 mb-12 lg:mb-20">
      <div className="lg:hidden font-bold uppercase text-sm pb-2">
        Books
      </div>
      <div className="flex flex-col gap-4">
        {bookDetails.map((item, index) => (
          <BookItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Books;
