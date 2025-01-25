const education = [
    {
      degree: "Bachelor of Commerce in Information Systems",
      institution: "University of Fort Hare",
      status: "Completed",
    },
    {
      degree: "Certificate in Cybersecurity",
      institution: "EBL Institute of Business and Technology",
      status: "Completed",
    },
    {
        degree: "Bachelor of Commerce Honours in Information Systems",
        institution: "University of Fort Hare",
        status: "Pursuing",
      },
    {
      degree: "Certificate in AI and Machine Learning",
      institution: "MICT-SETA",
      status: "Pursuing",
    },
    {
        degree: "AI and Machine Learning",
        institution: "Africa Agility Git 8.0 Program",
        status: "Pursuing",
      },
  ]
  
  export default function Education() {
    return (
      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <div key={index} className="mb-8 relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-neon-blue"></div>
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-neon-blue"></div>
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="text-gray-400 mb-1">{item.institution}</p>
                <p className={`text-sm ${item.status === "Pursuing" ? "text-neon-green" : "text-neon-blue"}`}>
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  