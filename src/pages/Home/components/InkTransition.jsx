function InkTransition() {
  return (
    <svg
      viewBox="0 0 500 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -right-5 top-0 z-10 h-full w-16 overflow-visible md:-right-8 md:w-24"
      aria-hidden="true"
    >
      <path
        d="M 500 0
           L 440 0
           Q 425 12 445 20
           L 400 27
           Q 375 35 420 40
           L 385 48
           Q 365 54 410 61
           L 380 70
           Q 360 80 405 82
           L 390 100
           L 500 100 Z"
        fill="#18181b"
      />
      <path
        d="M 435 18 Q 405 22 430 28
           M 390 44 Q 365 48 395 52
           M 405 75 Q 375 83 400 89"
        fill="none"
        stroke="#18181b"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default InkTransition;
