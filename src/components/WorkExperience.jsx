export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience-container">
      <h2 className="work-experience-heading">My work experience,</h2>
      <div className="work-experience-item">
        <h3>Sr. Software Development Engineer | Mr. Cooper, Chennai, India</h3>
        <p><strong>May 2024 – Present</strong></p>
        <ul>
          <li>Led the development of data streaming solutions for the Front Office Modernization project, creating a unified framework for integrating 10+ diverse data sources into a centralized data management system, processing 100M+ daily events with optimized data ingestion, transformation, and accessibility across the organization.</li>
          <li>Developed and implemented batch and parallel processing features within the Java library, increasing throughput by 75% and reducing processing time for 100K events to under 2 minutes.</li>
          <li>Optimized and improved real-time data pipelines, minimizing system downtimes and enhancing pipeline reliability.</li>
          <li>Collaborated with 5+ cross-functional teams to reduce latency with real-time data.</li>
        </ul>
      </div>
      <div className="work-experience-item">
        <h3>Software Development Engineer II | Mr. Cooper, Chennai, India</h3>
        <p><strong>May 2022 – Apr 2024</strong></p>
        <ul>
          <li>Engineered REST APIs for efficient data production to Kafka topics, utilizing Apigee to ensure secure and scalable access across multiple teams and applications, ensuring 0 data loss for 10K+ requests/min, improving system availability to 99.9%.</li>
          <li>Implemented alerting jobs for real-time data production and ingestion monitoring, promptly notifying support and application teams during downtime, and generating 5+ proactive alerts per hour to ensure timely issue resolution.</li>
          <li>Built base images for Kafka Connect, enabling seamless integration with diverse data sources and sinks, including relational databases, cloud storage, and data warehouses.</li>
          <li>Optimized ADLS storage, reducing costs by $150K annually through periodic purge automation.</li>
        </ul>
      </div>
      <div className="work-experience-item">
        <h3>Software Development Engineer | Mr. Cooper, Chennai, India</h3>
        <p><strong>July 2020 – Apr 2022</strong></p>
        <ul>
          <li>Played a key role in the end-to-end development of a centralized platform for Kafka topic management, and access control, streamlining the management of 2000+ Kafka topics across clusters.</li>
          <li>Integrated the platform with cluster-level event processing metrics, billing insights, and application-specific consumer activity, enabling cost and resource monitoring.</li>
          <li>Developed real-time stream processors using KStreams, improving real-time data processing and application performance.</li>
          <li>Created robust migration scripts to transition Kafka resources and key vaults from Azure to GCP, enabling seamless cluster migration, topic mirroring, and schema linking.</li>
        </ul>
      </div>
      <div className="work-experience-item">
        <h3>Graduate Intern | Mr. Cooper, Chennai, India</h3>
        <p><strong>Jan 2020 - Jun 2020</strong></p>
        <ul>
          <li>Developed Kafka library wrappers as Python packages and Ruby gems, simplifying integration, ensuring reliable message delivery, and enabling seamless data serialization to streamline workflows and enhance performance.</li>
          <li>Devised an automated functional testing tool, boosting testing capabilities and reducing manual testing effort by 50%, accelerating deployment cycles.</li>
          <li>Migrated applications to Azure Kubernetes Service (AKS), replacing distributed deployments and enhancing scalability and management.</li>
        </ul>
      </div>
    </section>
  );
}
