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
        <div className="text-sm font-medium">
          {institutions.map((institution, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>• {institution.name}</span>
              <Badge className="text-link bg-link/10 text-sm">{institution.year}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

const Talks: FC<TalksProps> = ({ talkDetails }) => {
  return (
    <section id="talks" className="flex flex-col gap-2 mb-12 lg:mb-20">
      <div className="lg:hidden font-bold uppercase text-sm pb-2">
        Talks & Lectures
      </div>
      <div className="flex flex-col gap-4">
        {talkDetails.map((item, index) => (
          <TalkItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Talks;