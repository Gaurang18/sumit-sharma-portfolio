import About from "@/components/About";
import Talks from "@/components/Talks";
import Books from "@/components/Books";
import Experience from "@/components/Experience";
import Footnote from "@/components/Footnote";
import PageDetailsFile from "@p/configs/page_details.json";

enum Sections {
  About = "about",
  Education = "education",
  Experience = "experience",
  Talks = "talks",
  Books = "books"
}

// Only supported section names
const Content = () => {
  const content = PageDetailsFile?.menu?.map((item, index) => {
    const title = item.section.charAt(0).toUpperCase() + item.section.slice(1);
    switch (item.section.toLowerCase()) {
      case Sections.About: {
        return (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <About />
          </div>
        );
      }
      case Sections.Experience: {
        return (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <Experience experienceDetails={PageDetailsFile?.experience ?? []} />
          </div>
        );
      }
      case Sections.Talks: {
        return (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <Talks talkDetails={PageDetailsFile?.talks ?? []} />
          </div>
        );
      }
      case Sections.Books: {
        return (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <Books bookDetails={PageDetailsFile?.books ?? []} />
          </div>
        );
      }
      default:
        return null;
    }
  });

  return (
    <section className="flex flex-col gap-6">
      {content}
      <Footnote />
    </section>
  );
};

export default Content;
