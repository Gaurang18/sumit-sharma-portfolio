import { FC } from "react";
import { FaQuoteLeft } from "react-icons/fa";
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

// Custom Avatar Component with theme gradient
function Avatar({ name, size = 64 }: { name: string; size?: number }) {
  const firstLetter = name.charAt(0).toUpperCase();
  // Theme: deep charcoal to warm golden orange
  const bgGradient = 'from-[#23272F] to-[#F6B042]';
  return (
    <div 
      className={`relative rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors shadow-lg`}
      style={{ width: size, height: size }}
    >
      <span className="text-white font-bold text-xl select-none">
        {firstLetter}
      </span>
      {/* Subtle overlay effect */}
      <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

function ReferenceItem({ name, position, company, testimonial }: Omit<ReferenceDetail, 'image'>) {
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
          <p className="text-base md:text-[1.05rem] text-muted-foreground italic pl-8 leading-relaxed">
            {testimonial}
          </p>
          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-primary/40 to-transparent mt-4 ml-8"></div>
        </div>
        {/* Author */}
        <div className="flex items-center gap-4">
          <Avatar name={name} size={64} />
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <HiOfficeBuilding className="h-4 w-4 text-primary" />
              {name}
            </h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <HiOfficeBuilding className="h-3 w-3" />
              <span>{position} • {company}</span>
            </div>
          </div>
        </div>
        {/* Removed rating and grateful student section */}
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