export default function Logo({ className = '' }: { className?: string }) {
  const logoUrl = `${import.meta.env.BASE_URL}logo-papelaria-delights.jpeg`;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Papelaria Delights"
        className="h-14 sm:h-16 w-auto object-contain"
      />
    </div>
  );
}
