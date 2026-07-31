function About({
  image = "https://via.placeholder.com/215",
  about,
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />

      <div>
        <h2
          style={{
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          About this Blog
        </h2>

        <p
          style={{
            lineHeight: "1.8",
          }}
        >
          {about}
        </p>
      </div>
    </aside>
  );
}

export default About;