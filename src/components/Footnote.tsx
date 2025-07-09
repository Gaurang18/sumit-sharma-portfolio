import { FC } from "react";
import { ThemeSwitcher } from "@/components/utils/ThemeSwitcher";
import { FaHeart, FaGraduationCap, FaBook, FaMicrophone } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Footnote: FC = () => {
  return (
    <footer className="section-sm border-t border-primary/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Sumit Sharma. All rights reserved.
            </p>
            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
              <FaGraduationCap className="h-3 w-3 text-primary" />
              <FaBook className="h-3 w-3 text-primary" />
              <FaMicrophone className="h-3 w-3 text-primary" />
              <p className="text-xs text-muted-foreground">
                Educator • Life Coach • Author • Mentor
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <ThemeSwitcher />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaHeart className="h-3 w-3 text-primary" />
              <span>Built with</span>
              <HiSparkles className="h-3 w-3 text-primary" />
              <span>and wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footnote;
