interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        {children}
      </h2>
      <div className="w-12 h-1 bg-cyan-500 rounded-full" />
    </div>
  )
}
