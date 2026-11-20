/* eslint-disable @next/next/no-img-element */
export default function ComingSoon() {
  return (
    <>
      <main>
        <div className="sign">
          <img
            className="logo"
            src="/coming-soon/ainekko-logo.svg"
            alt="Ainekko"
            width={496}
            height={134}
          />
          <h1>Coming soon</h1>
          <div className="dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </main>

      <footer>
        © 2026 Ainekko, Co.<span className="sep">·</span>San Francisco, CA
        <span className="sep">·</span>
        <a href="https://aifoundry.org/">Community</a>
      </footer>
    </>
  );
}
