export default function Home() {
  return (
    <>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Hi, I'm Khalidh AK, a passionate developer. Welcome to my portfolio!</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my projects:</p>
          <ul>
            <li><a href="https://github.com/khalidhak/project1">Project 1</a></li>
            <li><a href="https://github.com/khalidhak/project2">Project 2</a></li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:khalidhak@example.com">khalidhak@example.com</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Khalidh AK</p>
      </footer>
    </>
  );
}
