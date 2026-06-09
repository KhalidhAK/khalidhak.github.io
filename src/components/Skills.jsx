export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      items: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Backend & Streaming",
      items: ["Spring Boot", "Apache Kafka", "Kafka Streams"]
    },
    {
      title: "Cloud & DevOps",
      items: ["Docker", "Kubernetes", "Azure", "GCP"]
    },
    {
      title: "APIs & Tools",
      items: ["REST", "Apigee", "Git", "Shell Scripting"]
    },
    {
      title: "Exploration",
      items: ["PyTorch", "TensorFlow", "NumPy", "AI/ML fundamentals"]
    }
  ];

  return (
    <section id="skills" className="skills-container" data-reveal>
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Tools I use to design, ship, and operate production systems.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title} data-reveal data-reveal-delay={index % 4}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
