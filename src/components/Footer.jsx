import { FaGithub } from 'react-icons/fa';

const Footer = ({ theme, onToggleTheme }) => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p className="label">© {year} Habeeb Ishola</p>
        <div className="footer-links">
          <a
            className="social-icon-link"
            href="https://github.com/hoishola"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === 'dark' ? '☀ Light' : '● Dark'}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
