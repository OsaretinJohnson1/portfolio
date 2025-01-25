const skills = [
    { name: "C#", level: "Intermediate" },
    { name: "ASP.NET", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "ReactJS", level: "Beginner" },
    { name: "NextJS", level: "Beginner" },
    { name: "SQL", level: "Intermediate" },
    { name: "HTML", level: "Proficient" },
    { name: "Figma", level: "Intermediate" },
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-neon-blue transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
                <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-neon-blue"
                    style={{
                      width: skill.level === "Beginner" ? "33%" : skill.level === "Intermediate" ? "66%" : "100%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  