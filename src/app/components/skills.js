import Image from "next/image";

export default function Skills() {
  const skillsData = [
    { id: 1, title: "HTML", image: "/html.svg", percent: "85%" },
    { id: 2, title: "CSS", image: "/css.svg", percent: "85%" },
    { id: 3, title: "JavaScript", image: "/js.svg", percent: "80%" },
    { id: 4, title: "TypeScript", image: "/ts.svg", percent: "80%" },
    { id: 5, title: "React", image: "/react.svg", percent: "30%" },
    { id: 6, title: "Node JS", image: "/node.svg", percent: "70%" },
    { id: 7, title: "Python", image: "/python.svg", percent: "25%" },
    { id: 8, title: "Next.js", image: "/nextjs.svg", percent: "30%" },
  ];

  return (
    <main className="mt-8 sm:mt-16 px-4 sm:px-8 lg:px-16 mb-16">
      <div className="flex justify-center">
        <div className="bg-purple-500 hover:bg-purple-300 px-6 py-3 sm:px-8 sm:py-4 mb-8 sm:mb-14 font-bold text-xl sm:text-2xl rounded-xl sm:rounded-2xl font-sans transition duration-200 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)]">
          MY SKILLS
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center bg-purple-300 shadow-lg rounded-lg p-4 hover:bg-purple-200 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)] transition duration-200"
          >
            <Image
              src={skill.image}
              alt={`${skill.title} icon`}
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg sm:text-xl">{skill.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{skill.percent}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{ width: skill.percent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}