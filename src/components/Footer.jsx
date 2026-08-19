import { Mail, ArrowUp } from "lucide-react";

const GitHubLogo = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 6.839 9.5.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844a9.55 9.55 0 0 1 2.504.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.486 17.523 2 12 2Z" />
  </svg>
);

const LinkedInLogo = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V8.999H3.555v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const GmailLogo = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 6.5C2 5.119 3.119 4 4.5 4h15C20.881 4 22 5.119 22 6.5v11c0 1.381-1.119 2.5-2.5 2.5H4.5A2.5 2.5 0 0 1 2 17.5v-11Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="m3 6 9 7 9-7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* BRAND */}

        <div className="footer-brand">
          <h2>
            Divyesh<span>.</span>
          </h2>

          <p>
            Software Engineer & MERN Stack Developer
            building modern full-stack web applications.
          </p>
        </div>


        {/* SOCIAL LOGOS */}

        <div className="footer-socials">

          {/* GitHub */}

          <a
            href="https://github.com/divyeshrathod077"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubLogo />
          </a>


          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/djrathod-it-lecm-cte/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInLogo />
          </a>


          {/* Gmail */}

          <a
            href="mailto:rathoddivyesh5911@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <GmailLogo />
          </a>

        </div>


        {/* BACK TO TOP */}

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>


      {/* COPYRIGHT */}

      <div className="copyright">
        © {new Date().getFullYear()} Divyesh Rathod.
        All rights reserved.
      </div>

    </footer>
  );
}