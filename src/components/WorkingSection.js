function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}


export default function WorkingSection() {
    return (
        <section id="how-it-works" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600">
                        Simple steps to reduce waste
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    <StepCard
                        number="1"
                        title="List Items"
                        description="Upload your excess inventory to our platform"
                    />
                    <StepCard
                        number="2"
                        title="Get Matched"
                        description="Our AI finds the best recipients for your items"
                    />
                    <StepCard
                        number="3"
                        title="Transfer"
                        description="Secure blockchain transaction handles the rest"
                    />
                    <StepCard
                        number="4"
                        title="Track Impact"
                        description="See the difference you're making in real-time"
                    />
                </div>
            </div>
        </section>
    )
}