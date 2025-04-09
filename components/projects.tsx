"use client"
import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/projects/project-card"

const projects = [
  {
    title: "Event Management System",
    description:
      "Built Java web-based platform utilizing Spring Boot, Hibernate for managing events-related CRUD operations for Admin and customer user roles, scheduling, and enabling customers to book and reserve seats.",
    tags: ["Java", "Spring Boot", "Hibernate", "Spring MVC", "JSP", "JSTL", "MySQL", "HTML", "CSS"],
    period: "Mar 2024 - Apr 2024",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Housing Management System Application",
    description:
      "Developed a comprehensive Java application utilizing CRUD operations and Java Swing for UI to streamline student housing search, offering amenities and distinct user roles. Integrated all the requests with MapQuest API for geographical referencing and email prompts configuration for notifications.",
    tags: ["Java", "Java Swing", "MapQuest API", "Email Integration"],
    period: "Mar 2023 - Apr 2023",
    githubLink: "https://github.com/aseemdeshmukh/INFO5100-AED-FinalProject",
  },
  {
    title: "Multi-Cuisine Food Ordering Website",
    description:
      "Crafted a MongoDB, Express.js, React and Node.js based full stack online food ordering system enabling diverse food selection, order tracking, and real-time delivery updates for customers. Provided an admin interface for menu management, pricing configuration, and comprehensive order oversight.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
    period: "Mar 2023 - Apr 2023",
    githubLink: "https://github.com/aseemdeshmukh/FoodLicious",
  },
  {
    title: "Bringing Humans at the Epicenter of Artificial Intelligence",
    description:
      "Publication in Elsevier Procedia Computer Science Journal exploring the human-centered approach to artificial intelligence development and implementation.",
    tags: ["Research", "AI", "Human-Centered Design", "Publication"],
    period: "Sept 2022",
    liveLink: "https://www.sciencedirect.com/science/article/pii/S1877050922008493",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#ede8d0]/5">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          description="A selection of my recent work and personal projects that showcase my skills and interests."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
