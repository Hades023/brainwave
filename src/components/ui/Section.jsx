export default function Section({ className = "", as: Tag = "section", children }) {
  return <Tag className={`py-16 sm:py-20 lg:py-24 ${className}`}>{children}</Tag>;
}
