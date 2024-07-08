import Image from "next/image";
import prayImage from "../../../../public/pray.jpg";

export default function Card() {
  const images = [
    prayImage,
    prayImage,
    prayImage,
    prayImage,
    prayImage,
    prayImage,
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative w-full pb-full">
              <Image
                src={src}
                alt={`Placeholder ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
