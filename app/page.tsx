import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-16 text-left font-normal">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl mb-4 font-bold">
          hi, i am <span className="underline">Rakshit Kharb</span>!
        </h1>
        <p className="text-lg mb-4">
          i am a third year student, studying computer science.
        </p>
        <p className="text-lg">
          mainly work in deep learning/gen-ai.
        </p>
      </header>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4 font-bold">experience</h2>
        <ul className="space-y-2 list-none p-0">
          <li>• research apprentice @ my college [dec 24' - jan 25']</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4 font-bold">projects</h2>
        <ul className="space-y-2 list-none p-0">
          <li>
            • <a href="/projects" className="underline">serious projects</a> : all my important projects
          </li>
          <li>
            • <a href="/fun" className="underline">fun projects</a> : all my fun projects
          </li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4 font-bold">certifications</h2>
        <ul className="space-y-2 list-none p-0">
          <li>• <a href="https://learn.microsoft.com/api/credentials/share/en-us/RakshitKharb-5224/83C50143C19E6492?sharingId=52154C54756B4CA4" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Certified: Azure Data Scientist Associate</a></li>
        </ul>
      </section>

      {/* Research Papers Section */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4 font-bold">research papers</h2>
        <p className="mt-2">
          <strong>Air Quality Prediction Using a Multioutput LSTM Model</strong> [currently working]
        </p>
      </section>

      {/* Blogs Section */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4 font-bold">blogs</h2>
        <ul className="space-y-2 list-none p-0">
          <li>
            • <a href="https://medium.com/@rakshitkharb2323/all-about-key-value-pair-and-compression-cbf0a3b36e2b" target="_blank" rel="noopener noreferrer" className="underline">Key-Value Pair and Compression</a>
          </li>
          <li>
            • <a href="https://medium.com/@rakshitkharb2323/gpt-4o-ed7f6e35c166" target="_blank" rel="noopener noreferrer" className="underline">All about GPT-4o</a>
          </li>
          <li>
            • <a href="https://medium.com/@rakshitkharb2323/how-i-successfully-passed-the-dp-100-exam-tips-and-insights-30ed6b9fefe9" target="_blank" rel="noopener noreferrer" className="underline">Guide to DP-100 Exam</a>
          </li>
        </ul>
      </section>
    </div>
  )
} 