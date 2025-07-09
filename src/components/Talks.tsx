import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import { FaMicrophone, FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { HiAcademicCap, HiGlobeAlt } from "react-icons/hi";

type InstitutionDetail = {
  name: string;
  year: string;
};

type TalkDetail = {
  institutions: InstitutionDetail[];
};

type TalksProps = {
  talkDetails: TalkDetail[];
};

function TalkItem({ institutions }: TalkDetail) {
  return (
    <div className="group relative p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-500 animate-elegant-fade-in">
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
      
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/10 rounded-lg">
            <FaMicrophone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground">Talks & Lectures</h3>
            <p className="text-muted-foreground">Sharing wisdom at prestigious institutions worldwide</p>
          </div>
        </div>
        
        {/* Institutions Grid */}
        <div className="grid gap-4">
          {institutions.map((institution, index) => (
            <div 
              key={index} 
              className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-r from-primary/5 to-secondary/5 group/item"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <FaUniversity className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <HiGlobeAlt className="h-4 w-4 text-muted-foreground" />
                    <span className="text-lg font-medium text-foreground">
                      {institution.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaMapMarkerAlt className="h-3 w-3" />
                    <span>{(institution.name === 'National University of Singapore' || institution.name === 'Nanyang Technological University') ? 'Singapore' : 'India'}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>Year</span>
                </div>
                <Badge 
                  variant="secondary"
                  className="text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {institution.year}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
          <div className="p-2 bg-secondary/20 rounded-lg">
            <HiAcademicCap className="h-4 w-4 text-primary" />
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{institutions.length}</span> prestigious institutions • 
            <span className="font-medium text-foreground"> {institutions.length}</span> impactful talks delivered
          </div>
        </div>
      </div>
    </div>
  );
}

const Talks: FC<TalksProps> = ({ talkDetails }) => {
  return (
    <div className="space-y-8">
      {talkDetails.map((item, index) => (
        <TalkItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Talks;