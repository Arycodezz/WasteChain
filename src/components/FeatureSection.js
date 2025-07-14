function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}


export default function FeatureSection() {
    return (
        <section id="features" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why Choose WasteChain?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Blockchain technology meets sustainability
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon="🔍"
                        title="Full Transparency"
                        description="Track every item from store to destination with blockchain records"
                    />
                    <FeatureCard
                        icon="🤖"
                        title="Smart Matching"
                        description="AI connects your excess inventory with the right recipients"
                    />
                    <FeatureCard
                        icon="📊"
                        title="Impact Reports"
                        description="See exactly how much waste you've prevented and lives you've helped"
                    />
                    <FeatureCard
                        icon="⚡"
                        title="Real-Time Alerts"
                        description="Get notified when items are about to expire"
                    />
                    <FeatureCard
                        icon="🔒"
                        title="Secure Transfers"
                        description="Blockchain ensures safe and verified transactions"
                    />
                    <FeatureCard
                        icon="🌍"
                        title="Global Network"
                        description="Connect with organizations worldwide"
                    />
                </div>
            </div>
        </section>
    )
}