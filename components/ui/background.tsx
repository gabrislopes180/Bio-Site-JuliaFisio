"use client";

type BackgroundProps = {
  isOpen?: boolean;
  // setIsOpen?: (value: boolean) => void;
  children: React.ReactElement | null;
};

export default function Background({
  isOpen,
  // setIsOpen,
  children,
}: BackgroundProps) {
  return (
    <div
      className={`
      } w-screen h-screen fixed inset-0 bg-black/70 backdrop-blur-md z-40 flex flex-col justify-center items-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}
