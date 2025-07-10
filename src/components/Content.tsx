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
    <div className="space-y-32">
      {sections.map((section, index) => {
        if (!section.isActive) return null;
        const title = section.section.charAt(0).toUpperCase() + section.section.slice(1);
        
        switch (section.section) {
          case Sections.About:
            return (
              <section key={index} id="about" className="section">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">{title}</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Discover the journey that shaped Sir&apos;s philosophy and approach to life coaching
                      </p>
                    </div>
                    <div className="spiritual-card p-8 md:p-12 animate-elegant-fade-in">
                      <About />
                    </div>
                  </div>
                </div>
              </section>
            );
          case Sections.Experience:
            return (
              <section key={index} id="experience" className="section">
                <div className="container">
                  <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">{title}</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Sir&apos;s professional journey in education, mentoring, and spiritual guidance
                      </p>
                    </div>
                    <div className="space-y-8 animate-stagger">
                      <Experience experienceDetails={PageDetailsFile.experience} />
                    </div>
                  </div>
                </div>
              </section>
            );
          case Sections.Education:
            return (
              <section key={index} id="education" className="section">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">{title}</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Academic foundation and continuous learning in Sir&apos;s field
                      </p>
                    </div>
                    <div className="animate-elegant-fade-in">
                      <Education educationDetails={PageDetailsFile.education} />
                    </div>
                  </div>
                </div>
              </section>
            );
          case Sections.Talks:
            return (
              <section key={index} id="talks" className="section">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">Talks & Lectures</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Sharing wisdom and insights at prestigious institutions worldwide
                      </p>
                    </div>
                    <div className="spiritual-card p-8 md:p-12 animate-elegant-fade-in">
                      <Talks talkDetails={PageDetailsFile.talks} />
                    </div>
                  </div>
                </div>
              </section>
            );
          case Sections.Books:
            return (
              <section key={index} id="books" className="section">
                <div className="container">
                  <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">{title}</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Published works that share timeless wisdom and spiritual insights
                      </p>
                    </div>
                    <div className="space-y-8 animate-stagger">
                      <Books bookDetails={PageDetailsFile.books} />
                    </div>
                  </div>
                </div>
              </section>
            );
          case Sections.References:
            return (
              <section key={index} id="references" className="section">
                <div className="container">
                  <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">Testimonials</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Heartfelt testimonials from those whose lives have been transformed through Sir&apos;s guidance
                      </p>
                    </div>
                    <div className="animate-elegant-fade-in">
                      <References referenceDetails={PageDetailsFile.references} />
                    </div>
                  </div>
                </div>
              </section>
            );
          case Sections.Gallery:
            return (
              <section key={index} id="gallery" className="section">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-balance mb-6">Gallery</h2>
                      <div className="divider"></div>
                      <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Moments from Sir&apos;s journey as an educator, speaker, and life coach
                      </p>
                    </div>
                    <div className="spiritual-card p-8 md:p-12 animate-elegant-fade-in">
                      <ImageCarousel images={PageDetailsFile.gallery} />
                    </div>
                  </div>
                </div>
              </section>
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
