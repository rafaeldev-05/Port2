type FloatingBadgeProps = {
  className: string;
  icon: string;
  title: string;
  libs: string;
};

export function FloatingBadge({ className, icon, title, libs }: FloatingBadgeProps) {
  return (
    <div className={`floating-badge ${className}`}>
      <i className={icon} />
      <div className="badge-content">
        <span className="badge-title">{title}</span>
        <span className="badge-libs">{libs}</span>
      </div>
    </div>
  );
}
