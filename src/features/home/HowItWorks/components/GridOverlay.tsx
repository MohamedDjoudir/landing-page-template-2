export function GridOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0H0V1.5V30H1.5V1.5H30V0H1.5Z' fill='white'/%3E%3C/svg%3E\")",
        backgroundSize: "30px 30px",
      }}
    />
  );
}
