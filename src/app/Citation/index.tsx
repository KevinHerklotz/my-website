type CitationProps = {
  quote: string
  who: string
}

export default function Citation({ quote, who }: CitationProps) {
  return (
    <>
      <blockquote className="inline-block w-auto max-w-3xl rounded-md border-2 border-solid border-neutral-100 border-opacity-50 bg-[#ccc] bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 p-3 font-extralight italic">
        &quot;{quote}&quot;
      </blockquote>
      <figcaption className="mb-12 text-lg sm:text-2xl">({who})</figcaption>
    </>
  )
}
