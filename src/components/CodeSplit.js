import * as React from "react";

// const loadGlobe = () => import("./Globe");
// const Globe = React.lazy(loadGlobe);

const Globe = React.lazy(() => import(/* webpackPrefetch: true */ "./Globe"));

function CodeSplit() {
  const [showGlobe, setShowGlobe] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "2rem",
      }}>
      <label
        style={{ marginBottom: "1rem" }}
        // onMouseEnter={loadGlobe}
        // onFocus={loadGlobe}
      >
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={(e) => setShowGlobe(e.target.checked)}
        />
        {" show globe"}
      </label>
      <div style={{ width: 400, height: 400 }}>
        <React.Suspense fallback={<div>loading globe...</div>}>
          {showGlobe ? <Globe /> : null}
        </React.Suspense>
      </div>
    </div>
  );
}

export { CodeSplit };
