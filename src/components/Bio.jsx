const timeline = [
  { year: '2026', text: 'Learning TypeScript, building React projects' },
];

const Bio = () => (
  <section id="bio">
    <p className="label">About</p>
    <h2>From ops to interfaces</h2>
    <p>
      I'm an aspiring frontend developer who enjoys building things for the web. I like taking an idea, turning it into a working interface, and improving it along the way. Right now, I'm expanding my skills with TypeScript while creating projects that are both useful and enjoyable to use.
    </p>

    <ul className="timeline">
      {timeline.map((item) => (
        <li key={item.year}>
          <span className="label">{item.year}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Bio;
