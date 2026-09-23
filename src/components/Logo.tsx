export default function Logo({ className = '' }: { className?: string }) {
  const logoUrl = `${import.meta.env.BASE_URL}logo-papelaria-delights-nova.png`;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Papelaria Delights"
        className="h-16 sm:h-20 w-auto object-contain"
      />
    </div>
  );
}
