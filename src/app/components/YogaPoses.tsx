import Image from "next/image";

const IMG = "https://www.train.aksharyogaonline.com/hosted/images";

const foundationPoses = [
  { name: "Gomukhasana (Cow Face Pose)", img: `${IMG}/6d/654dcdd40445888b85f790fd074ecd/Cow-Face-yoga-pose-Gomukhasana-.jpg` },
  { name: "Parsvakonasana (Side Angle Pose)", img: `${IMG}/83/3eeeb9a9d4451997ad8c44be388dd7/Side-angle-yoga-pose-Parsvakonasana-.jpg` },
  { name: "Prasarita Padottanasana (Wide Leg Forward Bend)", img: `${IMG}/ab/91b0978f384c85ab86a3523eef4266/Wide-leg-forward-bend-yoga-pose-Prasarita-padottanasana-.jpg` },
  { name: "Parivrtta Parsvakonasana (Revolved Side Angle)", img: `${IMG}/75/b72516edf64d908d03a1591b2a4687/Revolved-side-angle-pose-Parivrtta-Parsvakonasana-.jpg` },
  { name: "Parivrtta Trikonasana (Revolved Triangle)", img: `${IMG}/e4/f25d7576e34daf96826e1fa816fcca/Revolved-triangle-yoga-pose-Parivrtta-Trikonasana-.jpg` },
  { name: "Supta Vajrasana (Reclined Thunderbolt)", img: `${IMG}/82/8ed7377c524ea59320cea6dbb882cc/Reclined-Thunderbolt-yoga-pose-Supta-Vajrasana-.jpg` },
  { name: "Padahastasana (Hand to Foot)", img: `${IMG}/b6/3a9af7bd0244a28fcacf7f0c4ae4e1/Hand-to-foot-yoga-pose-Padahastasana-.jpg` },
  { name: "Janu Sirsasana (Head to Knee)", img: `${IMG}/65/707c6bf6d24c4f95bb006a1783d8f5/Head-to-knee-yoga-pose-Janu-Sirsasana-.jpg` },
];

const poses30s = [
  { name: "Kakasana (Crow Pose)", img: `${IMG}/df/48c4a2cc5d4c86822d8c38b9078b47/Kakasana30Secs.jpg`, desc: "A balancing arm posture where the body is lifted off the ground by placing the knees on the upper arms while supporting the body weight on the palms.", benefit: "Strengthens the wrists, arms, shoulders, and core while improving balance, focus, and body control." },
  { name: "Ardha Chandrasana (Half Moon Pose)", img: `${IMG}/4e/ccf04c2f544b55aece1ef5606d1df9/Ardha-Chandrasana-30sec.jpg`, desc: "A standing balance pose with one leg extended behind and torso opened to the side.", benefit: "Improves balance, coordination, and strengthens legs, ankles, and core." },
  { name: "Surya Yantrasana (Compass Pose)", img: `${IMG}/4a/31621346a3464b931ddbe7ad3c664c/SuryaYantrasana30secs.jpg`, desc: "A seated pose with one leg extended behind the shoulder while the opposite hand holds the foot.", benefit: "Deeply opens the hamstrings, shoulders, and side body." },
  { name: "Uthita Baddha Ekapadasana (Standing Bound One-Legged Pose)", img: `${IMG}/ec/0676fd7951457bbea7ee29e59718a4/UthitaBaddhaEkpadasana30Secs.jpg`, desc: "A standing balance pose with one leg bound and extended.", benefit: "Enhances balance, hip flexibility, and concentration." },
  { name: "Bhujpidasana (Shoulder-Pressing Pose)", img: `${IMG}/fc/f7d98f6d294a39abde8925d69bc786/Bhujpidasana30Secs.jpg`, desc: "An arm balance where the thighs press against the upper arms.", benefit: "Builds arm and core strength, improves balance." },
];

const poses60s = [
  { name: "Upavistha Konasana (Seated Wide Angle Pose)", img: `${IMG}/af/248cc384194a059eecce37b75ff49e/UpavishtaKonasana60Secs.jpg` },
  { name: "Dwi Pada Viparita Dandasana (Two-Legged Inverted Staff)", img: `${IMG}/1d/0d93d20a144a619dbbb05a0c6e20be/DwiPadaViparitaDandasana60Secs.jpg` },
  { name: "Bala Parshva Bhuja Dandasana (Baby Grasshopper)", img: `${IMG}/a8/f0c5020f4746809aa29127eadae08b/BalaParshvaBhujaDandasana60Secs.jpg` },
  { name: "Kurmasana (Tortoise Pose)", img: `${IMG}/d9/dd861298cc4856930afa24c6a3a367/Kurmasana60Secs.jpg` },
  { name: "Bhunamanasana (Earth Pose)", img: `${IMG}/c9/851288cb744e01a4086e017cbfed79/Bhunamanasana60Secs.jpg` },
  { name: "Krounchasana (Heron Pose)", img: `${IMG}/ea/2c644e30f0408f91d8cfc68a818250/Krounchasana60Secs.jpg` },
];

const poses90s = [
  { name: "Matsyasana (Fish Pose)", img: `${IMG}/25/b87ffe99e64e438f094fb0dab8a9b2/Matsyasana90Secs.jpg` },
];

const poses120s = [
  { name: "Supta Vajrasana (Reclined Thunderbolt)", img: `${IMG}/37/ae00db8b25406c8503122123e51a80/SuptaVajrasana120Secs.jpg` },
  { name: "Parivrtta Parsvakonasana (Revolved Side Angle)", img: `${IMG}/53/3fe3546ce642829bb8f42c5befed7b/ParivrittaParsvakonasana120Secs.jpg` },
  { name: "Prasarita Padottanasana (Wide Leg Forward Bend)", img: `${IMG}/45/2f22dda8dd4625bf51e2a4f008a045/PrasaritaPadottanasana120Secs.jpg` },
  { name: "Parivrtta Trikonasana (Revolved Triangle)", img: `${IMG}/9a/9b05d1d39241a192538cf89b3a8c86/ParivrttaTrikonasana120Secs.jpg` },
  { name: "Gomukhasana (Cow Face)", img: `${IMG}/86/097f09ccf44d318939e544da2a7011/Gomukhasana120Secs.jpg` },
  { name: "Parsvakonasana (Side Angle)", img: `${IMG}/71/ea620194bd47e999b3598b20eb0e08/Parsvakonasana120secs.jpg` },
  { name: "Janu Sirsasana (Head to Knee)", img: `${IMG}/b7/98ef0f7ca7448d9724f5d383c6a0ce/JanuSirsasana120Secs.jpg` },
  { name: "Padahastasana (Hand to Foot)", img: `${IMG}/b8/44978fff2a49709b92bc04081bd43b/Padahastasana120Secs.jpg` },
];

function PoseGrid({ poses, holdTime }: { poses: { name: string; img: string; desc?: string; benefit?: string }[]; holdTime?: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {poses.map((pose) => (
        <div key={pose.name + (holdTime || "")} className="pose-card">
          <div className="relative w-full aspect-square">
            <Image
              src={pose.img}
              alt={pose.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="p-4">
            <h4 className="font-bold text-gold text-sm mb-1">{pose.name}</h4>
            {pose.desc && <p className="text-xs text-gray-400 mb-1">{pose.desc}</p>}
            {pose.benefit && <p className="text-xs text-gray-300"><strong>Benefit:</strong> {pose.benefit}</p>}
            {holdTime && <p className="text-xs text-gold-light mt-2 font-semibold">Hold Time: {holdTime}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function YogaPoses() {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          21 Asanas | 21 Guinness World Records | 1 Global Movement
        </h2>
        <div className="section-divider mb-16" />

        {/* Foundation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gold mb-8 text-center">Foundation Asanas</h3>
          <PoseGrid poses={foundationPoses} />
        </div>

        {/* 30 Seconds */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gold mb-8 text-center">30 Seconds Hold</h3>
          <PoseGrid poses={poses30s} holdTime="30 Seconds" />
        </div>

        {/* 60 Seconds */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gold mb-8 text-center">60 Seconds Hold</h3>
          <PoseGrid poses={poses60s} holdTime="60 Seconds" />
        </div>

        {/* 90 Seconds */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gold mb-8 text-center">90 Seconds Hold</h3>
          <PoseGrid poses={poses90s} holdTime="90 Seconds" />
        </div>

        {/* 120 Seconds */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gold mb-8 text-center">120 Seconds Hold</h3>
          <PoseGrid poses={poses120s} holdTime="120 Seconds" />
        </div>
      </div>
    </section>
  );
}
