"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="text-gold text-xl">{open ? "−" : "+"}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

const faqSections = [
  {
    title: "The Practice",
    items: [
      {
        question: "Can I blink during Tratak?",
        answer:
          "Yes. Blinking is completely natural and allowed during the attempt. Just keep your gaze steady, comfortable, and relaxed.",
      },
      {
        question: "What equipment do I need?",
        answer:
          "All you need is a stable internet connection, a smartphone to record yourself, an active Instagram account, and the simple Tratak setup we will email you.",
      },
      {
        question: "Will I be taught what to do?",
        answer:
          "Absolutely. Once registered, you will receive clear, step-by-step instructions on how to set up, record, and submit your attempt.",
      },
    ],
  },
  {
    title: "Global Participation",
    items: [
      {
        question: "Can anyone in the world join?",
        answer: "Yes. This is a truly global online event.",
      },
      {
        question: "Can children participate?",
        answer:
          "Yes. Children are welcome to join, provided parents or guardians assist with the registration and video upload.",
      },
      {
        question: "Can I register for both the offline and online records?",
        answer:
          "Yes. You may register separately for our offline events as well as this online Tratak record.",
      },
    ],
  },
  {
    title: "Recording & Instagram Rules",
    items: [
      {
        question: "Do I need a new Instagram account?",
        answer:
          'No, you can use your current account. It just needs to be set to "Public" during the verification process so the judges can see it. You can change it back afterward.',
      },
      {
        question: "Can my friend and I use the same Instagram account?",
        answer:
          "No. Each person needs their own individual Instagram account to be counted.",
      },
      {
        question: "Can I delete the video after uploading it?",
        answer:
          "Please keep the video public on your profile until the official verification process is entirely complete.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-navy-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <div className="section-divider mb-12" />

        {faqSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h3 className="text-xl font-bold text-gold mb-4">
              {section.title}
            </h3>
            {section.items.map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        ))}

        <div className="mt-10 p-6 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
          <h3 className="text-xl font-bold text-gold mb-4">
            Event Guidelines & Terms
          </h3>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>
              This Online Guinness World Record Attempt is proudly sponsored by
              Akshar Yoga Kendraa and is 100% free to enter.
            </li>
            <li>
              Please ensure you complete the official registration and follow
              the simple guidelines sent to your email.
            </li>
            <li>
              This registration is specifically for the Online Tratak Attempt.
              Offline events require separate registration.
            </li>
            <li>
              To ensure your video counts toward the world record, all
              submission deadlines and Instagram posting rules must be followed
              carefully.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
