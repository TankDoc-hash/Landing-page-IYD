import Image from "next/image";
import CountdownTimer from "../components/CountdownTimer";
import FAQ from "../components/FAQ";

const IMG = "https://www.train.aksharyogaonline.com/hosted/images";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-navy-dark py-16 md:py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={`${IMG}/03/84afa84e234845aa5eb51e3ef5f3b2/Bg_moon_Comp_4-1-2.png`}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-gold text-sm md:text-base mb-6">
            Akshar Yoga Kendraa Presents
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-10">
            Official Guinness World Records&trade; Attempt for{" "}
            <span className="text-gold">Tratak Meditation</span>
          </h1>

          {/* Hero Event Poster Image */}
          <div className="max-w-3xl mx-auto">
            <Image
              src={`${IMG}/24/76debdcbc84b78862afaa78d4b9080/og_image.jpg`}
              alt="International Day of Yoga 2026"
              width={800}
              height={450}
              className="rounded-xl w-full h-auto glow-gold"
              priority
            />
          </div>
        </div>
      </section>

      {/* Event Info + Countdown */}
      <section className="bg-navy py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold Banner Badge */}
          <div className="inline-block gradient-gold px-6 md:px-10 py-3 rounded-md mb-8 shadow-lg">
            <h2 className="text-white font-bold text-base md:text-xl uppercase tracking-wider">
              International Day of Yoga 2026
            </h2>
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* Event Description */}
          <div className="text-center text-gray-300 space-y-4 mb-8">
            <p>
              Join the{" "}
              <strong className="text-white">
                International Day of Yoga 2026
              </strong>{" "}
              celebration, connecting participants from across the world through
              a shared meditation experience.
            </p>
            <p>
              Participate in an official online Guinness World Records&trade;
              attempt for Tratak Meditation, guided by Akshar Yoga Kendraa.
            </p>
            <p>
              Tratak is a traditional meditation practice that encourages focus,
              mindfulness, and sustained attention through candle gazing.
            </p>
            <p className="text-gold font-semibold">
              2 Minutes of Meditation. One Global Attempt. Join Participants
              worldwide.
            </p>
          </div>

          {/* Check Items */}
          <div className="inline-flex flex-col items-start space-y-3 mb-10">
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg mt-0.5 shrink-0">&#10003;</span>
              <p className="text-gray-300">
                Your invitation:{" "}
                <strong className="text-white">Free Enrollment</strong>{" "}
                <span className="text-gray-400">
                  (Sponsored by Akshar Yoga Kendraa)
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg mt-0.5 shrink-0">&#10003;</span>
              <p className="text-gray-300">
                Event Begins:{" "}
                <strong className="text-white">June 20, 2026</strong>
              </p>
            </div>
          </div>

          {/* CTA */}
          <a href="#register" className="cta-button">
            SECURE MY FREE SPOT & MAKE HISTORY
          </a>
        </div>
      </section>

      {/* Gold Divider Bar */}
      <div className="gold-bar py-4 px-4 text-center">
        <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
          The Event Details
        </h2>
      </div>

      {/* What is Tratak Section */}
      <section className="py-16 md:py-20 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4 uppercase leading-tight">
            What is Tratak?{" "}
            <span className="text-gold">The Science of Absolute Focus</span>
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Left - Image + Logos */}
            <div>
              <Image
                src={`${IMG}/b9/9cf4952a2d408b8359ec6a4d3037ce/Tratak.jpg.jpg`}
                alt="Tratak Meditation"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto glow-gold"
              />
              <p className="text-center text-sm text-gray-400 italic mt-3 mb-6">
                Tratak Lamp/Gazing Meditation
              </p>

              {/* Logos */}
              <div className="flex justify-center items-center gap-6">
                <Image
                  src={`${IMG}/78/946714dd53456bbc1689487a3eecdb/AY-KENDRAA-LOGO.png`}
                  alt="Akshar Yoga Kendraa"
                  width={130}
                  height={55}
                  className="object-contain h-12 w-auto"
                />
                <div className="text-center px-4 py-2 rounded-lg border border-gold/40 bg-gold/10">
                  <p className="text-gold font-bold text-sm leading-tight">
                    12 GUINNESS WORLD
                    <br />
                    RECORDS
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">At a Glance:</h3>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">Practice:</span>
                  <span>Tratak Meditation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">Duration:</span>
                  <span>2 minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">Location:</span>
                  <span>Online (Open to participants worldwide)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">Event Date:</span>
                  <span>June 20, 2026</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">Submission Method:</span>
                  <span>Record on your phone and upload to Instagram</span>
                </li>
              </ul>

              <p className="text-gray-300 leading-relaxed mb-4">
                In today&apos;s fast-paced world, maintaining focus can be
                challenging. Tratak is a traditional meditation practice that
                involves gently focusing your gaze on a single point, such as a
                candle flame. For this Guinness World Records&trade; attempt,
                participants will be guided through a 2-minute Tratak Meditation
                session.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Tratak has been practiced for generations as a meditation
                technique that encourages mindfulness, concentration, and
                self-awareness. Participants are invited to experience this
                simple practice and also take part in a global celebration.
              </p>

              <p className="text-gold font-semibold italic">
                2 Minutes of Meditation. One Global Attempt. Join Participants
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-gap">
        <div className="section-divider" />
      </div>

      {/* Grand Master Akshar Section */}
      <section className="py-16 md:py-20 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4 uppercase leading-tight">
            The Architect of Mastery:{" "}
            <span className="text-gold">Guided by Grand Master Akshar</span>
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
            <div className="flex justify-center">
              <Image
                src={`${IMG}/dd/d56a1b78674c52af9a0cc833ec2605/GM-image-for-Water-Healing-LP.jpg`}
                alt="Grand Master Akshar"
                width={500}
                height={600}
                className="rounded-xl w-full max-w-md h-auto glow-gold"
              />
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Forged in the sacred heights of the Himalayas,{" "}
                <strong className="text-white">
                  Himalayan Siddhaa Akshar (Grand Master Akshar)
                </strong>{" "}
                is more than a spiritual guide&mdash;he is recognized for his
                expertise in the absolute pinnacle of human discipline,
                seamlessly uniting the uncorrupted power of ancient Himalayan
                wisdom with the exact precision of modern science.
              </p>
              <p>
                He is a supreme authority on mind mastery and human performance.
                He does not simply teach from the sidelines; he commands the
                attention of the world stage. His unparalleled expertise has
                made him a highly sought-after global leader, featured across{" "}
                <span className="text-gold font-semibold">
                  Forbes, Vogue, The Times of India,
                </span>{" "}
                and multiple{" "}
                <span className="text-gold font-semibold">TED Talks</span>.
              </p>
              <p>
                A true master is defined by the limits he shatters. Holding
                multiple{" "}
                <span className="text-gold font-semibold">
                  Guinness World Records&trade;
                </span>{" "}
                for staggering physical and mental endurance, he is a living
                testament to the very power he teaches.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-gold/[0.08] border border-gold/30">
                <p className="mb-3">
                  <strong className="text-gold">Grand Master Akshar</strong>{" "}
                  believes you possess the inherent ability to achieve
                  absolutely everything you seek in this life, and he provides
                  the exact mental blueprint to claim it.
                </p>
                <p className="text-gold italic">
                  He leads by example. Now, he extends a rare invitation for
                  you to stand beside him, master your reality, and write your
                  own name into history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-gap">
        <div className="section-divider" />
      </div>

      {/* Your Journey / How It Works */}
      <section className="py-16 md:py-20 px-4 bg-navy-dark">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase leading-tight">
            Your Journey to the Attempt:{" "}
            <span className="text-gold">How It Works</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gray-300 text-lg mb-2">
            Taking part in this official Guinness World Records&trade; attempt
            is simple.
          </p>
          <p className="text-gray-400 mb-12">
            No prior meditation experience is required, and participants of all
            experience levels are welcome.
          </p>

          {/* Journey Infographic */}
          <div className="mb-10">
            <Image
              src={`${IMG}/54/c78e5653bb4019b95040acc1c0bc804a/ChatGPT-Image-Jun-2-2026-08_48_37-PM.png`}
              alt="Your Journey to a Guinness World Record - Steps"
              width={900}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Steps Grid — 4 top + 3 bottom */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              {[
                { step: "1", title: "REGISTER", desc: "Complete your registration form" },
                { step: "2", title: "RECEIVE INSTRUCTIONS", desc: "Get participation instructions via email" },
                { step: "3", title: "RECORD VIDEO", desc: "Record your 2-minute Tratak session" },
                { step: "4", title: "SUBMISSION APPROVAL", desc: "Submit for verification with guidelines" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="step-badge">{item.step}</div>
                  <p className="text-xs font-bold text-gold mb-1">{item.title}</p>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { step: "5", title: "UPLOAD ON INSTAGRAM", desc: "Post to Instagram as a public post" },
                { step: "6", title: "REVIEW & VERIFICATION", desc: "Submission is reviewed and verified" },
                { step: "7", title: "RECEIVE CERTIFICATE", desc: "Get your participation certificate" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="step-badge">{item.step}</div>
                  <p className="text-xs font-bold text-gold mb-1">{item.title}</p>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form Area */}
          <div id="register" className="max-w-4xl mx-auto scroll-mt-8">
            <Image
              src={`${IMG}/79/aa17fb2d3046f7828b010667eceb04/ChatGPT-Image-Jun-2-2026-08_52_13-PM.png`}
              alt="Registration details"
              width={900}
              height={500}
              className="w-full h-auto rounded-xl mb-8"
            />

            {/* Registration Form */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 leading-snug">
                  International Day of Yoga 2026 | Online Guinness World Record
                  Attempt
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  For any enquiries or assistance, feel free to reach out to us
                </p>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>&#9993; info@aksharyogaonline.com</p>
                  <p>&#9742; +91 99861 21226 | +91 98533 55514</p>
                  <p>&#9742; +91 8553333111</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-gold mb-4">
                  Registration details
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  Complete your registration by providing these details.
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                    readOnly
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    readOnly
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                    readOnly
                  />
                  <p className="text-xs text-gray-500 italic pt-1">
                    Registrations are currently closed. Contact us for more info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Benefits — with decorative gold top border */}
      <div className="gold-bar py-1" />
      <section className="py-16 md:py-20 px-4 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            <span className="text-gold">Participation Benefits</span>
          </h2>
          <div className="section-divider mb-8" />

          <p className="text-gray-300 text-center mb-10">
            Akshar Yoga Kendraa has organized and participated in multiple large
            scale yoga and meditation events. We invite you to take part in this
            official Guinness World Records&trade; attempt for Tratak Meditation.
          </p>

          <div className="space-y-6 text-gray-300 text-center">
            <p>
              <strong className="text-gold">
                Participation Certificate:
              </strong>{" "}
              All eligible participants who successfully meet the event
              requirements will receive a Participation Certificate from
              Akshar Yoga Kendraa.
            </p>
            <p>
              <strong className="text-gold">
                Guinness World Records&trade; Certificate:
              </strong>{" "}
              If the attempt is successfully verified by Guinness World
              Records&trade;, eligible participants only then have the
              opportunity to apply for Guinness World Records&trade;
              personalized certificate, subject to Guinness World Records
              policies, eligibility requirements, and applicable fees.
            </p>
            <p>
              <strong className="text-gold">
                Certificate Processing:
              </strong>{" "}
              Any Guinness World Records&trade; documentation will be
              processed according to the official Guinness World Records
              verification timeline and procedures.
            </p>
          </div>
        </div>
      </section>

      <div className="section-gap">
        <div className="section-divider" />
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Disclaimer */}
      <section className="py-6 px-4 bg-[#ebebeb] border-t border-[#ddd]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Participation in this event does not
            guarantee recognition as a Guinness World Records&trade; title
            holder. Any Guinness World Records&trade; certificate,
            documentation, or recognition is subject to Guinness World
            Records&trade; official review process, eligibility requirements,
            and applicable policies.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 bg-navy-dark text-center">
        <div className="max-w-3xl mx-auto">
          <a
            href="#register"
            className="cta-button text-lg md:text-xl"
          >
            UPLOAD MY VIDEO & CLAIM MY RECORD
            <br />
            <span className="text-xs font-normal opacity-80">
              Limited Spots Available
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8 px-4 text-center border-t border-white/10">
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-4 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-gold transition-colors"
          >
            TERMS & CONDITIONS
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="text-gray-400 hover:text-gold transition-colors"
          >
            PRIVACY POLICY
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          All Rights Reserved 2026 &copy; Copyright AKSHAR YOGA ONLINE
        </p>
      </footer>
    </main>
  );
}
