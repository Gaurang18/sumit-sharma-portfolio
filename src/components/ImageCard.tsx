import { FC } from "react";
import Image from "next/image";

type ImageCardProps = {
  imageUrl: string;
  description: string;
  title: string;
  date: string;
};

const ImageCard: FC<ImageCardProps> = ({ imageUrl, description, title, date }) => {
  return (
    <div className="relative group">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <div className="text-white text-center">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
          <p className="text-xs mt-2">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard; 