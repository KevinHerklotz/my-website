type CitationProps = {
  quote: string
  who: string
}

export default function Citation({ quote, who }: CitationProps) {
  return (
    <>
      <blockquote className="inline-block w-auto max-w-3xl rounded-md border-2 border-solid border-neutral-100 border-opacity-50 bg-white bg-opacity-10 p-3 font-extralight italic">
        &quot;{quote}&quot;
      </blockquote>
      <figcaption className="mb-6 mt-0.5 text-lg sm:mb-10 sm:text-2xl">({who})</figcaption>
    </>
  )
}
