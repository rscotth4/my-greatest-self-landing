import React, { useState } from 'react';

export default function MyGreatestSelfLanding() {
  const [selectedPlan, setSelectedPlan] = useState('annual');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <nav className="relative container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">My Greatest Self</div>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-slate-100 transition">
            Start Free Trial
          </button>
        </nav>

        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master Your Mind.<br/>
              Transform Your Life.
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-slate-300 font-light">
              Affirmations That Actually Work.
            </p>
            <p className="text-xl mb-12 text-slate-400 max-w-3xl mx-auto leading-relaxed">
              In 1968, Og Mandino's bestselling book "The Greatest Salesman in the World" introduced a powerful methodology: daily affirmation scrolls read three times a day. For over 50 years, this proven approach has transformed millions of lives. Now, My Greatest Self evolves that time-tested system with modern neuroscience, positive psychology, and updated affirmation theory built for today's world.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition">
              Start Your Free 3-Day Trial
            </button>
            <p className="mt-4 text-slate-400 text-sm">No credit card required • Access the Habit Scroll immediately</p>
          </div>
        </div>
      </header>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
            Why Most Affirmations Fail
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              You've tried positive affirmations before. Maybe you wrote them down, repeated them in the mirror, or listened to recordings. And yet... nothing really changed.
            </p>
            <p>
              Here's why: <strong>a five-word phrase can't rewire decades of conditioning.</strong>
            </p>
            <p>
              Traditional affirmations are fleeting—short, surface-level statements that bounce off your skepticism and vanish from memory within minutes. "I am confident." "I am successful." They're too shallow to penetrate your subconscious resistance, too simple to create the neural pathways required for real transformation.
            </p>
            <p>
              <strong>Your mind is too sophisticated for simplistic mantras.</strong> Real change requires depth, context, psychological frameworks that engage both your conscious understanding and your subconscious patterns.
            </p>
            <p className="text-xl font-semibold text-slate-900 pt-6">
              That's where scrolls change everything.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
            Scrolls Aren't Affirmations.<br/>They're Immersive Psychological Frameworks.
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              A scroll isn't a phrase you repeat. It's a <strong>full-page experience</strong>—rich, layered, and designed to bypass your conscious resistance while embedding transformational concepts deep in your subconscious mind.
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl my-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Each scroll combines:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-sky-500 font-bold mr-3 text-xl">•</span>
                  <div>
                    <strong className="text-slate-900">Narrative and context</strong> that makes the principles feel real and accessible
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-3 text-xl">•</span>
                  <div>
                    <strong className="text-slate-900">NLP language patterns</strong> that speak directly to your subconscious
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">•</span>
                  <div>
                    <strong className="text-slate-900">Positive psychology frameworks</strong> grounded in research and evidence
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 font-bold mr-3 text-xl">•</span>
                  <div>
                    <strong className="text-slate-900">Progressive development</strong> that builds on itself with each reading
                  </div>
                </li>
              </ul>
            </div>
            <p>
              When you read a scroll, you're not just saying words—you're <strong>immersing yourself in a complete psychological reframe</strong> that takes 3-5 minutes to absorb. It's substantial enough that your mind can't dismiss it. Deep enough to create real neural change.
            </p>
            <p className="text-xl font-semibold text-slate-900">
              And then you repeat this immersion three times a day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-teal-50 p-8 rounded-2xl mt-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 text-center">The Three-Reading Ritual</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-4xl mr-4">☀️</span>
                <div>
                  <strong className="text-slate-900 text-lg">Morning:</strong>
                  <p className="text-slate-700 mt-1">Set your intention for the day. Prime your mind for aligned action before the world makes its demands.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-4xl mr-4">☀️</span>
                <div>
                  <strong className="text-slate-900 text-lg">Midday:</strong>
                  <p className="text-slate-700 mt-1">Reinforce and recalibrate. Interrupt autopilot patterns and reconnect with your highest self.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-4xl mr-4">🌙</span>
                <div>
                  <strong className="text-slate-900 text-lg">Evening:</strong>
                  <p className="text-slate-700 mt-1">Final immersion before sleep, when your subconscious mind is most receptive. Embed the patterns as your mind processes and integrates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-lg text-slate-700 leading-relaxed">
            <p className="font-semibold text-slate-900 text-xl mb-4">Why This Works</p>
            <p>
              Each scroll is designed to be read three times daily for 30 days. This systematic repetition of <strong>deep, substantial content</strong>—not superficial phrases—is what creates lasting transformation. The principles don't just bounce off your skepticism. They become part of who you are.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-6">📜</div>
              <h3 className="text-2xl font-bold mb-4">Choose Your Scroll</h3>
              <p className="text-slate-300">
                Begin with the Scroll of Habit—your foundation for success. Then explore the growing library based on the characteristics you want to develop.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌅</div>
              <h3 className="text-2xl font-bold mb-4">Morning & Midday</h3>
              <p className="text-slate-300">
                Set your intention at sunrise. Reinforce at midday. Prime your mind for aligned action throughout the day.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌙</div>
              <h3 className="text-2xl font-bold mb-4">Evening Reflection</h3>
              <p className="text-slate-300">
                Read your scroll one final time, then journal about your day. Reflect on moments where you demonstrated the characteristic you're developing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-bold mb-4">30-Day Transformation</h3>
              <p className="text-slate-300">
                Watch as consistent practice rewires your thinking, strengthens your character, and transforms your results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Scroll Library */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-900">
            A Growing Library of Transformation
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            Develop every aspect of your character, one scroll at a time.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Every journey begins with the <strong className="text-slate-900">Scroll of Habit</strong>—intentionally designed as your foundation. This first scroll builds the consistency and ritual necessary for all other transformations to take root. Master the practice itself, then expand into whichever characteristics call to you.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Explore Scrolls Including:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-slate-700">
              <div>
                • The Scroll of Habit<br/>
                • The Scroll of Discipline<br/>
                • The Scroll of Confidence<br/>
                • The Scroll of Authenticity
              </div>
              <div>
                • The Scroll of Resilience<br/>
                • The Scroll of Focus<br/>
                • The Scroll of Leadership<br/>
                • The Scroll of Gratitude
              </div>
              <div>
                • The Scroll of Courage<br/>
                • The Scroll of Creativity<br/>
                • The Scroll of Presence<br/>
                • The Scroll of Purpose
              </div>
            </div>
            <p className="text-slate-600 mt-6 italic">...and many more</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-2xl p-8 text-center">
            <p className="text-xl mb-2">
              <strong>New scrolls are added monthly</strong>, ensuring you always have fresh challenges and new dimensions of yourself to develop.
            </p>
            <p className="text-lg opacity-90">
              Each scroll is a 30-day deep dive into a specific characteristic, giving you years of intentional growth ahead.
            </p>
          </div>

          <p className="text-center mt-8 text-slate-600 text-lg">
            Each scroll combines principles from NLP, positive psychology, and neuroscience to create deep, lasting transformation—not just temporary motivation.
          </p>
        </div>
      </section>

      {/* Evening Reflection & Journaling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-900">
            The Practice That Changes Everything
          </h2>
          <p className="text-2xl text-center text-slate-600 mb-12">
            Reading creates awareness. Journaling creates transformation.
          </p>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-12">
            <p>
              After your evening scroll reading, you'll be prompted to reflect on your day through guided journaling. This isn't just writing—it's structured self-analysis designed to accelerate your growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Your Evening Reflection Process</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">🔍 Recognize</h4>
                <p className="text-slate-700">Identify moments where you had the opportunity to demonstrate the characteristic you're developing.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">📊 Review</h4>
                <p className="text-slate-700">Analyze how you responded. What did you do? How did it feel? What was the outcome?</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">🔧 Refine</h4>
                <p className="text-slate-700">Consider how you could have shown up differently. Or celebrate how you succeeded and the impact it had.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">💪 Reinforce</h4>
                <p className="text-slate-700">Connect your actions to the scroll's principles. See your progress. Build evidence of your transformation.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <div className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Why This Works</h3>
              <p className="text-slate-200">
                Affirmations tell your mind what's possible. Journaling shows your mind the evidence that it's happening. This combination of aspiration and reflection creates rapid, lasting change.
              </p>
            </div>
            
            <p className="text-slate-600 italic text-center pt-4">
              Journaling is optional but highly recommended. Members who journal consistently report breakthrough insights, faster progress, and deeper integration of each scroll's principles.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-xl text-slate-600 mb-12">
            Start with a 3-day free trial. Access the Habit Scroll immediately. No credit card required.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-slate-200 rounded-full p-1 inline-flex">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  selectedPlan === 'monthly'
                    ? 'bg-white text-slate-900 shadow'
                    : 'text-slate-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  selectedPlan === 'annual'
                    ? 'bg-white text-slate-900 shadow'
                    : 'text-slate-600'
                }`}
              >
                Annual (Save 41%)
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 text-center shadow-xl">
            {selectedPlan === 'monthly' ? (
              <>
                <div className="text-6xl font-bold text-slate-900 mb-2">
                  $7<span className="text-3xl text-slate-600">/month</span>
                </div>
                <p className="text-slate-600 mb-8">Billed monthly • Cancel anytime</p>
              </>
            ) : (
              <>
                <div className="text-6xl font-bold text-slate-900 mb-2">
                  $49<span className="text-3xl text-slate-600">/year</span>
                </div>
                <p className="text-slate-600 mb-2">Just $4.08/month • Save 41%</p>
                <p className="text-green-600 font-semibold mb-8">Best Value</p>
              </>
            )}
            
            <ul className="text-left max-w-md mx-auto space-y-4 mb-8 text-slate-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                Access to growing scroll library
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                Guided evening journaling & reflection
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                Progress tracking & reminders
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                3x daily reading structure
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                Mobile & desktop access
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                New scrolls added monthly
              </li>
            </ul>

            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition w-full md:w-auto">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Your Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
            15 Years in the Making
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              When I started my entrepreneurial journey, I discovered "The Greatest Salesman in the World." The scroll methodology didn't just resonate with me—it transformed me. Following those techniques daily was a cornerstone of my success, helping me build the mental frameworks and discipline that led to multiple successful exits.
            </p>
            <p>
              But even as I experienced that transformation firsthand, I knew the language felt dated and the concepts needed evolution for today's challenges.
            </p>
            <p>
              As a serial entrepreneur, I've spent 15 years studying what actually creates lasting change. I've seen how the right mental practices compound into extraordinary business results and personal growth.
            </p>
            <p>
              My Greatest Self is the personal development program I wish had existed when I started. It honors Og Mandino's proven methodology—the same system that changed my life—while incorporating modern neuroscience, NLP techniques, and positive psychology research.
            </p>
            <p className="text-xl font-semibold text-slate-900 pt-6">
              This isn't just another app. It's a daily practice that will fundamentally change how you think, act, and show up in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become Your Greatest Self?
          </h2>
          <p className="text-xl mb-10 text-slate-300">
            Start your free 3-day trial today. No credit card required.
          </p>
          <button className="bg-white text-slate-900 px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition">
            Start Free Trial
          </button>
          <p className="mt-8 text-slate-400">
            Join thousands who are mastering their minds and transforming their lives.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-white mb-4">My Greatest Self</div>
          <p className="mb-6">Master Your Mind. Transform Your Life.</p>
          <div className="space-x-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
          <p className="mt-8 text-sm">© 2025 My Greatest Self. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}