import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import { LuArrowUpRight, LuCalendar, LuMapPin, LuExternalLink } from "react-icons/lu";
import { FaLink, FaGraduationCap, FaChalkboardTeacher, FaHeart } from "react-icons/fa";
import { HiAcademicCap, HiOfficeBuilding } from "react-icons/hi";

type LabelAndLink = {
  label: string;
  link: string;
};

type ExperienceDetail = {
  position: string;
  prevPositions?: string[];
  company: string;
  startDate: string;
  endDate: string;
  description: string | string[];
  skills: string[];
  mainLink?: string;
  sideLinks?: LabelAndLink[];
};

type ExperienceProps = {
  experienceDetails: ExperienceDetail[];
};

function ExperienceItem(props: ExperienceDetail) {
  let mainLinkElement: JSX.Element = <></>;
  if (props.mainLink != null) {
    mainLinkElement = (
      <LuArrowUpRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    );
  }

  // Get appropriate icon based on position
  const getPositionIcon = (position: string) => {
    if (position.toLowerCase().includes('faculty') || position.toLowerCase().includes('teacher')) {
      return <FaChalkboardTeacher className="h-5 w-5 text-primary" />;
    } else if (position.toLowerCase().includes('coach') || position.toLowerCase().includes('mentor')) {
      return <FaHeart className="h-5 w-5 text-primary" />;
    } else {
      return <HiAcademicCap className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="group relative p-8 rounded-lg border bg-card hover:shadow-lg transition-all duration-500 animate-elegant-fade-in">
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Timeline */}
        <div className="lg:w-1/4">
          <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground bg-primary/5 px-4 py-3 rounded-md inline-block">
            <LuCalendar className="h-4 w-4" />
            <span>{props.startDate} - {props.endDate}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="lg:w-3/4 space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {getPositionIcon(props.position)}
              <a
                href={props.mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-xl font-semibold text-foreground hover:text-primary transition-all duration-300"
              >
                {props.position}
                {mainLinkElement}
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <HiOfficeBuilding className="h-4 w-4" />
              <span className="text-lg">{props.company}</span>
            </div>
            
            {props.prevPositions?.map((position, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground ml-8">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                <span>{position}</span>
              </div>
            ))}
          </div>
          
          {/* Description */}
          <div className="text-muted-foreground leading-relaxed">
            {Array.isArray(props.description) ? (
              <ul className="space-y-3">
                {props.description.map((desc, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm leading-relaxed">{props.description}</div>
            )}
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FaGraduationCap className="h-4 w-4" />
              <span>Key Skills & Expertise</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {props.skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Side Links */}
          {props.sideLinks && (
            <div className="flex flex-wrap gap-6 pt-4 border-t border-primary/10">
              {props.sideLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <LuExternalLink className="h-3 w-3" />
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Experience: FC<ExperienceProps> = ({ experienceDetails }) => {
  return (
    <div className="space-y-8">
      {experienceDetails.map((item, index) => (
        <ExperienceItem
          key={index}
          position={item.position}
          prevPositions={item.prevPositions}
          company={item.company}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          skills={item.skills}
          mainLink={item.mainLink}
          sideLinks={item.sideLinks}
        />
      ))}
    </div>
  );
};

export default Experience;
