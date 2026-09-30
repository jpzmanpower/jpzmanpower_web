import Image from "next/image";

export function IndustryHeader({ course }) {
  return (
    <div >
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black">{course.title}</h2>
            <div className="w-8 h-1 bg-secondary rounded-md"></div>
            <p>{course.description}</p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-2xl object-cover w-fit">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
