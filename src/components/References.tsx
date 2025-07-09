import { FC } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Card, CardContent } from "@/components/ui/card";

type ReferenceDetail = {
  name: string;
  position: string;
  link: string;
};

type ReferencesProps = {
  referenceDetails?: ReferenceDetail[];
};

function ReferenceItem({ name, position, link, index }: ReferenceDetail & { index: number }) {
  return (
    <Card className="flex flex-col w-full min-h-fit gap-0 mb-4 border-transparent bg-transparent px-2 lg:py-2 lg:gap-2 hover:border-cardhover-border hover:bg-cardhover-background hover:shadow-[inset_0_1px_0_0] hover:shadow-cardhover-shadow hover:drop-shadow-lg">
      <CardContent className="flex flex-col p-0">
        <div className="flex flex-col">
          <div className="flex items-start gap-2">
            <span className="text-sm">{index + 1}.</span>
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-muted-foreground">{position}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/mainlink text-link text-sm hover:text-link-light mt-1 inline-flex items-center"
                >
                  View Profile <LuArrowUpRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover/mainlink:translate-x-1 group-hover/mainlink:-translate-y-1 group-focus-visible/mainlink:translate-x-1 group-focus-visible/mainlink:-translate-y-1"></LuArrowUpRight>
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const References: FC<ReferencesProps> = ({ referenceDetails = [] }) => {
  return (
    <section id="references" className="flex flex-col gap-3">
      {referenceDetails.map((item, index) => (
        <ReferenceItem key={index} {...item} index={index} />
      ))}
    </section>
  );
};

export default References; 