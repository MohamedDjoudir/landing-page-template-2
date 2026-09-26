export function DotPattern() {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" aria-hidden="true">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="1.6257413380501518" fill="#fff" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
      </svg>
    </div>
  );
}
