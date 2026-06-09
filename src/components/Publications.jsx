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
      <h2 className="publications-heading">Publications</h2>
      <ul className="publications-list">
        {publications.map((pub, index) => (
          <li key={index}>
            <a href={pub.url} target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
            <span className="publication-source"> - {pub.source}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
