const Contact = () => {
  return (
    <section id="contact">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Contact</h1>
        <p>You can reach me at:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:tannoah@outlook.com">tannoah@outlook.com</a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/tannoah0586" target="_blank" rel="noopener noreferrer">
              github.com/tannoah0586
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/noah-tan-yongxin" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/noah-tan-yongxin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;