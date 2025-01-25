import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:sokrowalindisipho@gmail.com"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
          >
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/osaretinjohnson/
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/OsaretinJohnson1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
          >
            <Github className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}

