import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LuArrowUpRight } from "react-icons/lu";

type BookDetail = {
  title: string;
  description: string;
  publishedYear: string;
  publisher: string;
  mainLink: string;
  src: string;
};

type BooksProps = {
  bookDetails?: BookDetail[];
};

function BookItem({ title, description, publishedYear, publisher, mainLink, src }: BookDetail) {
  return (
    <Card className="flex flex-col w-full min-h-fit gap-0 mb-4 border-transparent px-2 lg:py-2 lg:gap-2 hover:border-cardhover-border hover:bg-cardhover-background hover:shadow-[inset_0_1px_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg">
      <CardContent className="flex flex-col p-0">
        <div className="flex items-center gap-4">
          <img src={src} alt={title} className="w-16 h-24 object-cover rounded" />
          <div className="flex flex-col">
            <h3 className="text-foreground font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-muted-foreground text-sm font-bold">{publishedYear}</span>
              {mainLink && (
                <a
                  href={mainLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/mainlink text-link text-sm hover:text-link-light"
                >
                  View PDF <LuArrowUpRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover/mainlink:translate-x-1 group-hover/mainlink:-translate-y-1 group-focus-visible/mainlink:translate-x-1 group-focus-visible/mainlink:-translate-y-1"></LuArrowUpRight>
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const Books: FC<BooksProps> = ({ bookDetails = [] }) => {
  return (
    <section id="books" className="flex flex-col gap-3 mb-8 lg:mb-12">
      <div className="lg:hidden font-bold uppercase text-base text-foreground pb-2">
        Books & Publications
      </div>
      {bookDetails.map((item, index) => (
        <BookItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Books;
