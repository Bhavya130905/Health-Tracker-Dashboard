function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="
        sr-only
        focus:not-sr-only
        focus:absolute
        focus:left-4
        focus:top-4
        focus:z-50
        rounded-lg
        bg-blue-600
        px-4
        py-2
        text-white
      "
    >
      Skip to main content
    </a>
  );
}

export default SkipToContent;