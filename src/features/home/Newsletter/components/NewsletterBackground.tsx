export function NewsletterBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(124, 58, 237, 0.15) 2px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
