import { FaBook, FaUsers, FaGlobe } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const About = () => {
  return (
    <div className="space-y-10">
      <div className="prose prose-lg max-w-none">
        <div className="grid gap-10">
          {/* Enhanced Quote */}
          {/* <div className="relative p-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
            <div className="absolute -top-2 -left-2 p-2 bg-primary/10 rounded-full">
              <FaQuoteLeft className="h-4 w-4 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground italic pl-8 leading-relaxed">
              &ldquo;Sir&apos;s classes were never just about grades. They were about understanding life, purpose, and our place in this world.&rdquo;
            </p>
            <div className="flex items-center gap-2 mt-4 pl-8">
              
              <p className="text-sm text-primary font-medium">
                — BITS Pilani Alumni
              </p>
            </div>
            {/* Decorative line */}
            {/* <div className="w-16 h-px bg-gradient-to-r from-primary/40 to-transparent mt-4 ml-8"></div>
          </div> */}
          
          {/* Main Content with Icons */}
          <div className="space-y-6">
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              Sumit Sharma is a distinguished educator, life coach, and mentor with over 24 years of experience in academia and professional development. He holds a B.Tech in Mechanical Engineering from Punjab Technical University and has since dedicated his life to nurturing intellectual curiosity, inspiring, and training students through transformative learning experiences. As an author, he has written on various topics, including the Kaushalendra series of children&apos;s books, Yogam: The Science of One&apos;s Relationship with the Supreme, and Reflections: Thinking with the Vedas, among others.
            </p>
            
            
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              Throughout his career, he has mentored a diverse group of high-achieving individuals—including entrepreneurs, researchers, scientists, corporate executives, and industry leaders—who credit his guidance with significantly enhancing their leadership, decision-making, and spiritual well-being. He continues to mentor individuals pursuing successful careers at esteemed institutions and organizations such as Google, Microsoft, NUS Singapore, IITs, BITS Pilani, CEERI, DRDO, the University of Minnesota, UIUC, Samsung, D. E. Shaw, Goldman Sachs, and more.
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              As a Guest Faculty at BITS Pilani and Kurukshetra University for over two decades, he has played a significant role in designing and delivering courses on leadership, ethics, and personal development based on teachings of Bhagavad Gita. He has also been invited to speak at esteemed universities, including National University of Singapore (NUS), Nanyang Technological University (NTU), and BML Munjal University.
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              His ability to connect traditional wisdom with modern challenges has made him a respected voice in education, leadership, and self-development. Committed to making learning accessible and impactful, he continues to inspire individuals on their journey toward self-awareness, purpose, and personal growth.
            </p>
          </div>
          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="flex items-start gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                <FaUsers className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-0.5">Mentorship Excellence</h4>
                <p className="text-xs text-muted-foreground">Guided high-achieving individuals including entrepreneurs, researchers, and corporate executives</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                <FaGlobe className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-0.5">Global Impact</h4>
                <p className="text-xs text-muted-foreground">Students at Google, Microsoft, NUS Singapore, IITs, and other prestigious institutions</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                <FaBook className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-0.5">Published Author</h4>
                <p className="text-xs text-muted-foreground">Multiple books on spiritual wisdom and children&apos;s literature</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                <HiSparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-0.5">Spiritual Wisdom</h4>
                <p className="text-xs text-muted-foreground">Connecting traditional wisdom with modern challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;