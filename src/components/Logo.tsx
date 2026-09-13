export default function Logo({ className = '' }: { className?: string }) {
  const logoUrl = `${import.meta.env.BASE_URL}images/WhatsApp_Image_2026-09-07_at_11.32.46.jpeg`;

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Papelaria Delights"
        className="h-12 sm:h-14 w-auto object-contain"
      />
    </div>
  );
}
