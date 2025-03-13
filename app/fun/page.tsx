import Link from 'next/link'

export default function FunProjects() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-16 text-left font-normal">
      <header className="mb-16">
        <h1 className="text-4xl mb-4 font-bold">
          hi, i am <Link href="/" className="underline hover:no-underline">Rakshit Kharb</Link>!
        </h1>
        <h2 className="text-2xl mb-8 font-bold">fun projects</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl mb-2 underline font-bold">
              <a href="https://chatgpt.com/g/g-679be8e531188191a76053140e99edb6-arjuna-s-ally" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
                Arjuna's Ally
              </a>
            </h3>
            <p className="text-base text-gray-600">
              Arjuna's Ally is your go-to GPT for wisdom straight from the Bhagavad Gita—no fluff, just pure verses with references! Whether you're seeking clarity, purpose, or just some timeless life advice
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-2 underline font-bold">
              <a href="https://drive.google.com/file/d/1HfN51CnjkH40QzfYwz2-mbAr6OkxzE_5/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
                Apply-Help
              </a>
            </h3>
            <p className="text-base text-gray-600">
              Built to simplify AI-driven web automation, this project connects AI agents directly to browsers, handling everything from form filling effortlessly. It integrates LangChain and LLMs like DeepSeek AI & ChatGPT to enhance decision-making and task execution.
            </p>
          </section>

          

          

        </div>
      </header>
    </div>
  )
} 