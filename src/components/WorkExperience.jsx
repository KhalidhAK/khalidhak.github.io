export default function WorkExperience() {
  const experiences = [
    {
      role: "Sr. Software Development Engineer",
      company: "Rocket India",
      detail: "formerly Mr. Cooper · Chennai, India",
      period: "May 2024 - Present",
      theme: "Kafka migration leadership",
      metrics: ["200+ topics", "20+ app teams", "Zero data loss"],
      highlights: [
        "Led large-scale Kafka cluster migration from Confluent public clusters to private clusters across enterprise application teams.",
        "Designed cluster linking and topic mirroring strategies to keep data flowing through a zero-downtime migration.",
        "Developed lineage mapping across Kafka topics, producers, consumers, and connectors for precise dependency planning.",
        "Built and scaled event-driven microservices for servicing workflows designed to handle 200+ event types.",
        "Introduced Flink SQL on Confluent Cloud and automated pipeline creation through Confluent Cloud REST APIs.",
        "Integrated 10+ data sources into centralized pipelines handling 100M+ events/day with a 75% performance improvement."
      ],
      tags: ["Kafka", "Flink SQL", "Confluent Cloud", "Microservices", "Data lineage"]
    },
    {
      role: "Software Development Engineer II",
      company: "Mr. Cooper",
      detail: "Chennai, India",
      period: "May 2022 - Apr 2024",
      theme: "Reliable platform APIs",
      metrics: ["10K+ req/min", "99.9% availability", "$150K/year saved"],
      highlights: [
        "Engineered secure REST APIs for producing data to Kafka topics through Apigee across multiple teams.",
        "Implemented real-time monitoring and alerting jobs that surfaced 5+ proactive alerts per hour.",
        "Built standardized Kafka Connect base images for databases, cloud storage, and warehouse integrations.",
        "Automated cloud data lifecycle policies in Azure Data Lake, saving $150K annually."
      ],
      tags: ["REST APIs", "Apigee", "Kafka Connect", "Azure Data Lake", "Monitoring"]
    },
    {
      role: "Software Development Engineer",
      company: "Mr. Cooper",
      detail: "Chennai, India",
      period: "July 2020 - Apr 2022",
      theme: "Streaming platform foundations",
      metrics: ["2000+ topics", "40% lower latency", "100% data integrity"],
      highlights: [
        "Helped build a centralized platform for Kafka topic management and access control across clusters.",
        "Integrated cluster-level processing metrics, billing insights, and consumer activity for cost and resource visibility.",
        "Built real-time stream processors with Kafka Streams for data enrichment and lower event-handling latency.",
        "Created migration scripts to transition Kafka resources from Azure to GCP while preserving data integrity."
      ],
      tags: ["Kafka Streams", "Platform tooling", "GCP", "Azure", "Access control"]
    },
    {
      role: "Graduate Intern",
      company: "Mr. Cooper",
      detail: "Chennai, India",
      period: "Jan 2020 - Jun 2020",
      theme: "Automation and developer experience",
      metrics: ["50% less testing effort", "Python packages", "Ruby gems"],
      highlights: [
        "Developed Kafka library wrappers as Python packages and Ruby gems to simplify integration and serialization.",
        "Created an automated functional testing tool that reduced manual testing effort and accelerated deployments.",
        "Migrated applications to Azure Kubernetes Service for improved scalability and operational management."
      ],
      tags: ["Python", "Ruby", "Kafka wrappers", "AKS", "Testing automation"]
    }
  ];

  return (
    <section id="work-experience" className="work-experience-container">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Impact across streaming, migration, and platform engineering.</h2>
      </div>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={`${experience.role}-${experience.period}`}>
            <div className="experience-card__marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
            <div className="experience-card__header">
              <div>
                <p className="experience-card__theme">{experience.theme}</p>
                <h3>{experience.role}</h3>
                <p className="experience-card__company">{experience.company} <span>{experience.detail}</span></p>
              </div>
              <time>{experience.period}</time>
            </div>
            <div className="experience-card__metrics">
              {experience.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
            <ul className="experience-card__highlights">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="experience-card__tags">
              {experience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
