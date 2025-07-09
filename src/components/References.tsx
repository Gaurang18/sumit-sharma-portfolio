import { FC } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar, FaHeart, FaUserGraduate } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

type ReferenceDetail = {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
};

type ReferencesProps = {
  referenceDetails: ReferenceDetail[];
};

function ReferenceItem({ name, position, company, testimonial, image }: ReferenceDetail) {
  return (
    <div className="group relative p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-500 animate-elegant-fade-in">
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
      
      <div className="space-y-6">
        {/* Quote */}
        <div className="relative">
          <div className="absolute -top-2 -left-2 p-2 bg-primary/10 rounded-full">
            <FaQuoteLeft className="h-4 w-4 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground italic pl-8 leading-relaxed">
            {testimonial}
          </p>
          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-primary/40 to-transparent mt-4 ml-8"></div>
        </div>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
            <Image
              src={image}
              alt={name}
              fill
              sizes="64px"
              className="object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <FaUserGraduate className="h-4 w-4 text-primary" />
              {name}
            </h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <HiOfficeBuilding className="h-3 w-3" />
              <span>{position} • {company}</span>
            </div>
          </div>
        </div>
        
        {/* Rating/Trust indicators */}
        <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
          <div className="flex items-center gap-1">
            <FaStar className="h-3 w-3 text-primary" />
            <FaStar className="h-3 w-3 text-primary" />
            <FaStar className="h-3 w-3 text-primary" />
            <FaStar className="h-3 w-3 text-primary" />
            <FaStar className="h-3 w-3 text-primary" />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <FaHeart className="h-3 w-3 text-primary" />
            <span>Grateful Student</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const References: FC<ReferencesProps> = ({ referenceDetails }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {referenceDetails.map((item, index) => (
        <ReferenceItem key={index} {...item} />
      ))}
    </div>
  );
};

export default References; 