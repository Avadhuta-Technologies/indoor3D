export function loadScriptsSequentially() {
  return new Promise((resolve, reject) => {
    let scripts = [
      "./js/three.min.js",
      "./js/IndoorMap.js",
      "./js/IndoorMap2d.js",
      "./js/IndoorMap3d.js",
      "./js/Detector.js",
      "./js/OrbitControls.js",
      "./js/Projector.js",
      "./js/stats.min.js",
      "./js/Theme.js",
    ];
    const loadScript = (src) =>
      new Promise((res, rej) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = res;
        script.onerror = rej;
        document.head.appendChild(script);
      });

    (async () => {
      try {
        await scripts.reduce(
          (p, s) => p.then(loadScript(s)),
          Promise.resolve()
        );
        resolve();
      } catch (error) {
        reject(error);
      }
    })();
  });
}
