export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <div className="min-h-3/4 sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
