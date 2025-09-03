export default function Skeleton({
  width = "100%",
  height = "1rem",
  borderRadius = "0.25rem",
  className = "",
}) {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}