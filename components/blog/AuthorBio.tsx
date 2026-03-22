interface AuthorBioProps {
  name?: string
  title?: string
  bio?: string
}

export default function AuthorBio({
  name = "The FIRE Team",
  title = "Financial Independence Researchers",
  bio = "We're a team of personal finance writers and FIRE practitioners dedicated to making financial independence accessible to everyone — not just high earners. All content is reviewed for accuracy and updated regularly.",
}: AuthorBioProps) {
  return (
    <div className="flex items-start gap-4 bg-cream rounded-xl p-5 border border-surface-border">
      {/* Avatar placeholder */}
      <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center text-xl">
        🔥
      </div>
      <div>
        <p className="font-display font-semibold text-charcoal text-sm">{name}</p>
        <p className="text-xs text-charcoal-400 mb-2">{title}</p>
        <p className="text-sm text-charcoal-600 leading-relaxed">{bio}</p>
      </div>
    </div>
  )
}
