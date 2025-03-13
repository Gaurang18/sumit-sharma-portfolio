import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { FaLink } from "react-icons/fa";

// TODO There is space on the bottom of this section that adds onto the gap to the section below.
// This sucks because there is inconsistency spacing between sections.
// there is problem with doing the function and mapping with not allowing gaps, so margins were
// used to have spacing between card but now there is problem with spacing between sections

// TODO for card, can i get negative inset working? to make the card hover bigger easily
// TODO: need to figure hover for smaller devices to make mainlink light up when card hover
// currently only work if hovering over the position for those devices

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
  description: string;
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
      <LuArrowUpRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover/mainlink:translate-x-1 group-hover/mainlink:-translate-y-1 group-focus-visible/mainlink:translate-x-1 group-focus-visible/mainlink:-translate-y-1"></LuArrowUpRight>
    );
  }

  let sideLinkElement: JSX.Element = <></>;
  if (props.sideLinks != null) {
    sideLinkElement = (
      <CardFooter className="px-0 pb-2 flex flex-wrap gap-2">
        {props.sideLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1 hover:text-link focus-visible:text-link mb-1"
          >
            <FaLink className="h-2 w-fit"></FaLink>
            {item.label}
          </a>
        ))}
      </CardFooter>
    );
  }

  return (
    // TODO need to work on the hover border/shadow
    <Card
      className="relative flex flex-col lg:flex-row w-full min-h-fit border-transparent bg-transparent gap-0 lg:gap-4 mb-0 lg:px-3 lg:py-2
        hover:bg-cardhover-background hover:shadow-[inset_0_0_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg"
    >
      <CardHeader className="h-full w-1/2 p-0">
        <CardTitle className="text-base text-foreground whitespace-normal">
          {props.startDate} - {props.endDate}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col w-full p-0">
        <a
          href={props.mainLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/mainlink text-foreground font-bold text-base hover:text-link focus-visible:text-link"
        >
          <span className="absolute inset-x-0 inset-y-0 hidden xxs:block"></span>
          <span>
            {props.position} • {props.company} {mainLinkElement}
          </span>
        </a>
        {props.prevPositions?.map((position, index) => (
          <p key={index} className="text-sm">
            {position}
          </p>
        ))}
        <CardDescription className="py-2 text-muted-foreground">
          {props.description}
        </CardDescription>

        {sideLinkElement}

        <CardFooter className="px-0 pb-2 flex flex-wrap gap-2">
          {props.skills.map((skill, index) => (
            <Badge key={index} className="text-link bg-link/10">
              {skill}
            </Badge>
          ))}
        </CardFooter>
      </CardContent>
    </Card>
  );
}

const Experience: FC<ExperienceProps> = ({ experienceDetails }) => {
  const experience = experienceDetails.map((item, index) => {
    return (
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
      ></ExperienceItem>
    );
  });

  return (
    <section id="experience" className="flex flex-col gap-3 mb-16 lg:mb-24">
      <div className="lg:hidden font-bold uppercase text-base text-foreground pb-3">
        Experience
      </div>
      {experience}
      {/* <a
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group/mainlink text-foreground font-bold text-base hover:text-link focus-visible:text-link"
      >
        <span>View Full Resume</span>
        <span>
          <LuArrowUpRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover/mainlink:translate-x-1 group-hover/mainlink:-translate-y-1 group-focus-visible/mainlink:translate-x-1 group-focus-visible/mainlink:-translate-y-1"></LuArrowUpRight>
        </span>
      </a> */}
    </section>
  );
};

export default Experience;
