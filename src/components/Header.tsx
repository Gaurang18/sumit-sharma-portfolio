import Menu from "./Menu";
import Contacts from "./Contacts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PageDetailsFile from "@p/configs/page_details.json";

type HeaderDetail = {
  image: string;
  introduction: string;
  position: string;
  summary: string;
};

const Header = () => {
  const headerDetail: HeaderDetail = PageDetailsFile.header;

  return (
    <section className="flex flex-col lg:sticky lg:w-1/2 lg:justify-between lg:top-0 lg:py-24 lg:gap-6 lg:max-h-96">
      <div className="flex flex-col gap-6 lg:pr-24">
        <Avatar className="w-24 lg:w-48 h-auto border-2 border-foreground hover:border-link transition-colors duration-300">
          <AvatarImage src={headerDetail.image} />
          <AvatarFallback className="w-24 h-24 lg:w-48 lg:h-48 border-2 border-foreground">
            SH
          </AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold hover:text-link transition-colors duration-300">{headerDetail.introduction}</h1>
        <h2 className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-300">{headerDetail.position}</h2>
        <p className="text-lg text-muted-foreground">{headerDetail.summary}</p>
      </div>
      <Menu MenuDetails={PageDetailsFile.menu}></Menu>
      <Contacts></Contacts>
    </section>
  );
};

export default Header;
