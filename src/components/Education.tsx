import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { FaGraduationCap, FaAward, FaBook, FaUniversity } from "react-icons/fa";
import { HiAcademicCap, HiDocumentText } from "react-icons/hi";

type EducationDetail = {
  subject: string;
  degree: string;
  university: string;
};

type EducationProps = {
  educationDetails: EducationDetail[];
};

function EducationItem({ subject, degree, university }: EducationDetail) {
  // Get appropriate icon based on subject
  const getSubjectIcon = (subject: string) => {
    if (subject.toLowerCase().includes('engineering')) {
      return <FaGraduationCap className="h-6 w-6 text-primary" />;
    } else if (subject.toLowerCase().includes('training') || subject.toLowerCase().includes('teacher')) {
      return <FaBook className="h-6 w-6 text-primary" />;
    } else if (subject.toLowerCase().includes('shastric') || subject.toLowerCase().includes('traditional')) {
      return <FaAward className="h-6 w-6 text-primary" />;
    } else {
      return <HiAcademicCap className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="group relative p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-500 animate-elegant-fade-in">
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
      
      <div className="space-y-6">
        {/* Header with Icon */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            {getSubjectIcon(subject)}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {subject}
            </h3>
            <div className="flex items-center gap-2 text-lg text-muted-foreground mb-3">
              <HiDocumentText className="h-4 w-4" />
              <span>{degree}</span>
            </div>
          </div>
        </div>
        
        {/* University */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/20 rounded-md">
            <FaUniversity className="h-4 w-4 text-primary" />
          </div>
          <Badge 
            variant="secondary"
            className="text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
          >
            {university}
          </Badge>
        </div>
        
        {/* Decorative line */}
        <div className="w-full h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
      </div>
    </div>
  );
}

const Education: FC<EducationProps> = ({ educationDetails }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {educationDetails.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Education;
