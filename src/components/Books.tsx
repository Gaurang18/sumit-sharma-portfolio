import { FC } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaBook, FaCalendarAlt, FaStar } from "react-icons/fa";
import { HiBookOpen, HiSparkles } from "react-icons/hi";

type BookDetail = {
  title: string;
  description: string;
  publishedYear: string;
  src: string;
};

type BooksProps = {
  bookDetails: BookDetail[];
};

function BookItem({ title, description, publishedYear, src }: BookDetail) {
  return (
    <div className="group relative p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-500 animate-elegant-fade-in">
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Book Cover with enhanced styling */}
        <div className="relative h-56 w-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0 group-hover:shadow-xl transition-all duration-500">
          <Image
            src={src}
            alt={title}
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Book icon overlay */}
          <div className="absolute top-2 right-2 p-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaBook className="h-3 w-3 text-primary" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HiBookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground leading-tight">
                {title}
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Publication Year */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FaCalendarAlt className="h-4 w-4" />
              <span>Published</span>
            </div>
            <Badge 
              variant="secondary"
              className="text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {publishedYear}
            </Badge>
          </div>
          
          {/* Decorative elements */}
          <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <FaStar className="h-3 w-3 text-primary" />
              <span>Featured Work</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <HiSparkles className="h-3 w-3 text-primary" />
              <span>Spiritual Wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Books: FC<BooksProps> = ({ bookDetails }) => {
  return (
    <div className="space-y-8">
      {bookDetails.map((item, index) => (
        <BookItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Books;
