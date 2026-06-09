export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience-container">
      <h2 className="work-experience-heading">My work experience,</h2>
      <div className="work-experience-item">
        <h3>Sr. Software Development Engineer | Rocket India (formerly Mr. Cooper), Chennai, India</h3>
        <p><strong>May 2024 – Present</strong></p>
        <ul>
          <li>Led large-scale Kafka cluster migration from Confluent public clusters to private clusters, successfully transitioning 200+ topics across 20+ application teams with zero data loss.</li>
          <li>Designed and implemented cluster linking and topic mirroring strategies, ensuring seamless data flow and zero-downtime migration.</li>
          <li>Developed comprehensive data lineage mapping across Kafka topics, producers, consumers, and connectors, enabling strategic migration planning and dependency resolution.</li>
          <li>Built and scaled event-driven microservices architecture for servicing workflows designed to handle 200+ event types.</li>
          <li>Introduced Flink SQL (Confluent Cloud) for real-time stream processing, automating pipeline creation using Confluent Cloud REST APIs and enabling lightweight transformations.</li>
          <li>Contributed to data streaming solutions for Front Office Modernization, integrating 10+ data sources into centralized pipelines handling 100M+ events/day with 75% performance improvement.</li>
        </ul>
      </div>
      <div className="work-experience-item">
        <h3>Software Development Engineer II | Mr. Cooper, Chennai, India</h3>
        <p><strong>May 2022 – Apr 2024</strong></p>
        <ul>
          <li>Engineered REST APIs for efficient data production to Kafka topics, utilizing Apigee to ensure secure and scalable access across multiple teams, ensuring 0 data loss for 10K+ requests/min with 99.9% availability.</li>
          <li>Implemented alerting jobs for real-time monitoring, generating 5+ proactive alerts per hour to ensure timely issue resolution.</li>
          <li>Built and standardized Kafka Connect base images supporting seamless integration with diverse data sources including databases, cloud storage, and data warehouses.</li>
          <li>Automated cloud data lifecycle policies in Azure Data Lake, saving $150K/year.</li>
        </ul>
      </div>
      <div className="work-experience-item">
        <h3>Software Development Engineer | Mr. Cooper, Chennai, India</h3>
        <p><strong>July 2020 – Apr 2022</strong></p>
        <ul>
          <li>Played a key role in developing a centralized platform for Kafka topic management and access control, streamlining management of 2000+ Kafka topics across clusters.</li>
          <li>Integrated cluster-level event processing metrics, billing insights, and consumer activity for cost and resource monitoring with stream lineage insights.</li>
          <li>Built real-time stream processors using Kafka Streams, optimizing data enrichment and improving event handling latency by 40%.</li>
          <li>Created robust migration scripts to transition Kafka resources from Azure to GCP, ensuring 100% data integrity throughout the process.</li>
        </ul>
      </div>
      <div className="work-experience-item">
        <h3>Graduate Intern | Mr. Cooper, Chennai, India</h3>
        <p><strong>Jan 2020 - Jun 2020</strong></p>
        <ul>
          <li>Developed Kafka library wrappers as Python packages and Ruby gems, simplifying integration and enabling seamless data serialization.</li>
          <li>Devised an automated functional testing tool, reducing manual testing effort by 50% and accelerating deployment cycles.</li>
          <li>Migrated applications to Azure Kubernetes Service (AKS), enhancing scalability and management.</li>
        </ul>
      </div>
    </section>
  );
}
