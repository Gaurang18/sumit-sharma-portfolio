import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FC } from "react";

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
    <Card className="relative flex flex-col w-full min-h-fit border-transparent bg-transparent gap-2 mb-0 px-2 py-1 hover:bg-cardhover-background hover:shadow-md">
      <CardContent className="p-0 flex flex-col gap-1">
        <ul className="list-disc list-inside text-sm font-medium text-muted-foreground">
          {institutions.map((institution, index) => (
            <li key={index} className="flex justify-between items-center">
              • {institution.name}
              <Badge className="text-link bg-link/10 text-sm">{institution.year}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const Talks: FC<TalksProps> = ({ talkDetails }) => {
  return (
    <section id="talks" className="flex flex-col gap-2 mb-12 lg:mb-20">
      <div className="lg:hidden font-bold uppercase text-sm text-foreground pb-2">
        Talks & Lectures
      </div>
      <ul className="list-disc list-inside">
        {talkDetails.map((item, index) => (
          <TalkItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Talks;