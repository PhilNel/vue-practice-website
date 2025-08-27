export const loadScript = (source: string): void => {
  const script = document.createElement("script");
  script.async = true;
  script.src = source;
  document.head.appendChild(script);
};
