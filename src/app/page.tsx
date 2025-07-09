import NavBar from "@/components/NavBar";
import Content from "@/components/Content";
import PageDetailsFile from "@p/configs/page_details.json";
import Image from "next/image";
import { FaQuoteLeft, FaHeart, FaArrowDown, FaUserGraduate, FaBook, FaMicrophone } from "react-icons/fa";
import { HiAcademicCap, HiSparkles } from "react-icons/hi";

export default function Home() {
  const header = PageDetailsFile.header;
  
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section - Elegant & Spiritual */}
      <section id="hero" className="section relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-12 animate-elegant-fade-in">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-balance leading-tight">
                    {" "}
                    <span className="gradient-text">{header.introduction}</span>
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HiAcademicCap className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground font-serif">
                      {header.position}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {header.summary}
                  </p>
                </div>
                
                {/* Student Perspective Quote */}
                {/* <div className="relative p-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                  <div className="absolute -top-2 -left-2 p-2 bg-primary/10 rounded-full">
                    <FaQuoteLeft className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground italic pl-8 leading-relaxed">
                    "Sir's teachings have been a guiding light in my journey. His wisdom transcends textbooks and touches the soul."
                  </p>
                  <div className="flex items-center gap-2 mt-4 pl-8">
                    <FaHeart className="h-3 w-3 text-primary" />
                    <p className="text-sm text-primary font-medium">
                      — A grateful student
                    </p>
                  </div> */}
                  {/* Decorative line */}
                  {/* <div className="w-16 h-px bg-gradient-to-r from-primary/40 to-transparent mt-4 ml-8"></div>
                </div> */}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#about" 
                  className="btn-primary group"
                >
                  <span>Discover My Journey</span>
                  <FaArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
                <a 
                  href="#references" 
                  className="btn-outline group"
                >
                  <FaUserGraduate className="mr-2 h-4 w-4" />
                  <span>Student Testimonials</span>
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/10">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FaBook className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-foreground">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Published Books</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FaMicrophone className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-foreground">8</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Institutions</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <HiSparkles className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-foreground">24+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
            
            {/* Profile Image with Spiritual Glow */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96 animate-elegant-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-spiritual-glow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src={`/${header.image}`}
                    alt={header.introduction}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-elegant-float flex items-center justify-center">
                  <FaHeart className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary/30 rounded-full animate-elegant-float flex items-center justify-center" style={{animationDelay: '1s'}}>
                  <HiSparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="animate-elegant-fade-in">
        <Content />
      </main>
    </div>
  );
}
