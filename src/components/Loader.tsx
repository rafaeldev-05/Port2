export function Loader() {
  return (
    <div className="loader-screen" id="loader">
      <div className="loader-content">
        <div className="loader-code-text">
          <div className="code-line" data-line="1">const portfolio = {'{'}</div>
          <div className="code-line" data-line="2"> loading: true,</div>
          <div className="code-line" data-line="3"> status: &apos;initializing...&apos;</div>
          <div className="code-line" data-line="4">{'}'};</div>
        </div>
        <div className="loader-spinner-wrapper">
          <div className="loader-spinner" />
        </div>
        <div className="loader-progress-wrapper">
          <div className="loader-progress-bar" />
        </div>
        <div className="loader-percentage" id="loaderPercent">0%</div>
      </div>
    </div>
  );
}
