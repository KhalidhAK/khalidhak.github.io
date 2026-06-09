export default function Publications() {
  const publications = [
    {
      title: "How to Stream Data from Snowflake to Kafka using JDBC Source Connector with Key Pair Authentication",
      url: "https://towardsdev.com/how-to-stream-data-from-snowflake-to-kafka-using-jdbc-source-connector-with-key-pair-authentication-8888d300831b",
      source: "Towards Dev"
    }
  ];

  return (
    <section className="publications-container">
      <div className="section-heading">
        <p className="section-kicker">Writing</p>
        <h2>Sharing practical patterns from streaming data work.</h2>
      </div>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <article key={index} className="publication-card">
            <span>{pub.source}</span>
            <a href={pub.url} target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
