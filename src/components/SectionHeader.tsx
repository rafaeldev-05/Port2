type SectionHeaderProps = {
  number: string;
  title: string;
  titlePt: string;
};

export function SectionHeader({ number, title, titlePt }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-number">{number}</span>
      <h2 className="section-title">
        <span className="title-bracket">&lt;</span>
        <span className="title-text" data-text-en={title} data-text-pt={titlePt}>
          {title}
        </span>
        <span className="title-bracket">/&gt;</span>
      </h2>
      <div className="section-line" />
    </div>
  );
}
