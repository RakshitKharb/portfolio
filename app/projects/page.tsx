import Link from 'next/link'

export default function Projects() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-16 text-left font-normal">
      <header className="mb-16">
        <h1 className="text-4xl mb-4 font-bold">
          hi, i am <Link href="/" className="underline hover:no-underline">Rakshit Kharb</Link>!
        </h1>
        <h2 className="text-2xl mb-8 font-bold">my projects</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl mb-2 underline font-bold">
              <a href="https://github.com/RakshitKharb/retail-product-placement" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
                Retail Product Placement System
              </a>
            </h3>
            <p className="text-base text-gray-600">
              This project is a computer vision-driven system designed to optimize shelf product arrangements, enhancing sales performance and customer experience. It integrates Generative AI for synthetic shelf image generation, a Recommender System leveraging Market Basket Analysis and Association Rules, and an interactive dashboard for actionable insights.Technologies used include Generative AI, YOLO, Pandas, NumPy, Scikit-learn, and Streamlit
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-2 underline font-bold">Credit Fraud Detection Using AWS</h3>
            <p className="text-base text-gray-600">
              This scalable fraud detection system leverages AWS for real-time transaction analysis, using S3 for secure storage, SageMaker Canvas for model training, and a serverless setup with Lambda and API Gateway. An automated CI/CD pipeline ensures seamless deployment. Technologies: Python, AWS S3, SageMaker Canvas, Lambda, API Gateway, CodePipeline, CodeBuild, CodeDeploy
            </p>
          </section>

          <section>
            <h3 className="text-xl mb-2 underline font-bold">
              <a href="https://github.com/RakshitKharb/air_quality_project" target="_blank" rel="noopener noreferrer" className="hover:no-underline">
                Air Quality Prediction Using Multi-Output LSTM Models
              </a>
            </h3>
            <p className="text-base text-gray-600">
              This project is a deep learning-based air quality prediction system leveraging Multi-Output LSTM networks and real-time data from the OpenAQ API. It incorporates engineered time-series features, lag variables, and interaction terms to enhance predictive accuracy for pollutants such as PM2.5, PM10, NO, and SO. The model supports dynamic city selection, making it adaptable across different regions. Technologies used include Python, Keras, Pandas, NumPy, Matplotlib, Scikit-learn, and the OpenAQ API
            </p>
          </section>
        </div>
      </header>
    </div>
  )
} 