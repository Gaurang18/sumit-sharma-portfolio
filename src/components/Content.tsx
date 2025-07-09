import { FC } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Talks from "@/components/Talks";
import Books from "@/components/Books";
import References from "@/components/References";
import ImageCarousel from "@/components/ImageCarousel";
import PageDetailsFile from "@p/configs/page_details.json";
import Footnote from "@/components/Footnote";

type Section = {
  isActive: boolean;
  section: string;
};

enum Sections {
  About = "about",
  Experience = "experience",
  Education = "education",
  Talks = "talks",
  Books = "books",
  References = "references",
  Gallery = "gallery",
}

const Content: FC = () => {
  const sections: Section[] = PageDetailsFile.menu;

  return (
    <div className="flex flex-col">
      {sections.map((section, index) => {
        if (!section.isActive) return null;
        const title = section.section.charAt(0).toUpperCase() + section.section.slice(1);
        switch (section.section) {
          case Sections.About:
            return (
              <div key={index} id="about" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <About />
              </div>
            );
          case Sections.Experience:
            return (
              <div key={index} id="experience" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <Experience experienceDetails={PageDetailsFile.experience} />
              </div>
            );
          case Sections.Education:
            return (
              <div key={index} id="education" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <Education educationDetails={PageDetailsFile.education} />
              </div>
            );
          case Sections.Talks:
            return (
              <div key={index} id="talks" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <Talks talkDetails={PageDetailsFile.talks} />
              </div>
            );
          case Sections.Books:
            return (
              <div key={index} id="books" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <Books bookDetails={PageDetailsFile.books} />
              </div>
            );
          case Sections.References:
            return (
              <div key={index} id="references" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <References referenceDetails={PageDetailsFile.references} />
              </div>
            );
          case Sections.Gallery:
            return (
              <div key={index} id="gallery" className="mb-8 lg:mb-12">
                <h2 className="text-2xl font-bold mb-2">Gallery</h2>
                <ImageCarousel images={PageDetailsFile.gallery} />
              </div>
            );
          default:
            return null;
        }
      })}
      <Footnote />
    </div>
  );
};

export default Content;
