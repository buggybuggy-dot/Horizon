import React, { useState, useRef, useEffect } from 'react';

const teamData = [
  {
    name: 'Our Dedicated Team',
    title: 'Leaders in Compassionate Care',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/TeamDoctors.jpeg',
    description: `The strength of Horizon lies in the synergy of our medical team.

Each physician is a leader in their field, united by a singular focus: you.

We are committed to providing sophisticated, effective healthcare solutions tailored to your individual needs.

Experience the new standard of care.`,
    details: [],
  },
  {
    name: 'Dr. Josh Jurawan',
    title: 'Specialist Ear, Nose & Throat (ENT) Surgeon',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/Doctor1.jpeg',
    description: 'A dedicated and compassionate ENT specialist with over a decade of experience in providing quality, patient-centered care.',
    details: [
      { heading: 'Experience', items: ['10+ Years in the field of Otorhinolaryngology', 'Associate Clinical Instructor (ENT) at the University of the West Indies'] },
      { heading: 'Education & Credentials', items: ['Doctor of Medicine (Otorhinolaryngology): University of the West Indies', 'Member of the Royal College of Surgeons (MRCS ENT)', 'Bachelor of Medicine, Bachelor of Surgery (M.B.B.S.): University of the West Indies'] },
      { heading: 'Key Areas of Expertise', items: ['Paediatric & Adult ENT Care', 'Sinus & Allergy Conditions', 'Obstructive Sleep Apnoea', 'Dizziness & Vertigo', 'Thyroid Conditions', 'Tonsillitis & Ear Infections'] },
    ],
  },
  {
    name: 'Dr. Kirbi Rampersad',
    title: 'Specialist in Adult Psychiatry',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/Doctor2.jpeg',
    description: 'An empathetic and experienced psychiatrist dedicated to providing holistic, patient-centered care to support long-term mental wellness.',
    details: [
        { heading: 'Experience', items: ['11+ Years of Clinical Experience in Adult Psychiatry']},
        { heading: 'Education & Credentials', items: ['Doctor of Medicine (Psychiatry): University of the West Indies', 'Bachelor of Medicine, Bachelor of Surgery (M.B.B.S.): University of the West Indies']},
        { heading: 'Key Areas of Expertise', items: ['Depression & Bipolar Disorder', 'Anxiety & Trauma-Related Conditions', 'Psychotic & OCD-Related Disorders', 'Substance Use Disorders', 'Stress-Related Conditions']}
    ]
  },
  {
    name: 'Dr. Viren Solomon',
    title: 'Specialist in Orthopaedic & Trauma Surgery',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/Doctor3.jpeg',
    description: 'A highly skilled and experienced orthopaedic surgeon with 14 years of practice, dedicated to providing advanced solutions for bone, joint, and soft tissue conditions.',
    details: [
        { heading: 'Experience', items: ['14+ Years of Practice in Orthopaedics']},
        { heading: 'Education & Credentials', items: ['Doctor of Medicine (Orthopaedics): University of the West Indies', 'Bachelor of Medicine, Bachelor of Surgery (M.B.B.S.): University of the West Indies']},
        { heading: 'Key Areas of Expertise', items: ['Joint Replacement Surgery (Arthroplasty)', 'Arthroscopic Knee & Shoulder Surgery', 'Fracture & Trauma Management', 'Regenerative Medicine (PRP Injections)', 'Hand & Wrist Surgery (Carpal Tunnel, Trigger Finger)', 'Minor Soft Tissue Surgery']}
    ]
  },
  {
    name: 'Dr. Fawwaz Mohammed',
    title: 'FRCS (Eng), FACS Specialist General & Hepato-Pancreato-Biliary (HPB) Surgeon',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/Doctor4.jpeg',
    description: 'An internationally trained and accredited surgeon specializing in complex liver, pancreas, and cancer surgery, who is deeply committed to the sacred trust between patient and physician.',
    details: [
        { heading: 'International Credentials', items: ['Fellow of the Royal College of Surgeons (FRCS), England', 'Fellow of the American College of Surgeons (FACS)', 'HPB Fellowship (Liver & Pancreas Cancer Surgery): Manchester, UK']},
        { heading: 'Education & Academic Role', items: ['Bachelor of Medicine, Bachelor of Surgery (M.B.B.S.): University of the West Indies', 'Associate Clinical Instructor, Dept. of Surgery, University of the West Indies']},
        { heading: 'Key Areas of Expertise', items: ['Liver, Pancreas & Biliary Surgery (HPB)', 'Surgical Oncology (Cancer Surgery)', 'Advanced General & Laparoscopic Surgery']}
    ]
  },
  {
    name: 'Dr. Wesley T. Ramcharan',
    title: 'MBBS, FRCS (Neurosurgery) Eng. Consultant Adult & Paediatric Neurosurgeon',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/Doctor5.jpeg',
    description: 'An elite, Bristol and Oxford fellowship-trained neurosurgeon specializing in complex brain, spine, and skull base surgery for both adults and children.',
    details: [
        { heading: 'Elite Fellowship Training', items: ['University of Oxford, UK', 'Bristol, UK']},
        { heading: 'Credentials & Qualifications', items: ['Fellow of the Royal College of Surgeons (Neurosurgery), England', 'Bachelor of Medicine, Bachelor of Surgery (MBBS)']},
        { heading: 'Sub-specialty Interests', items: ['Endoscopic Endonasal Skull Base & Pituitary Surgery', 'Awake Surgical Neuro-oncology (Brain Tumors)', 'Paediatric Epilepsy Surgery']}
    ]
  },
  {
    name: 'Dr. Giana de Verteuil',
    title: 'Board-Certified Paediatrician',
    image: 'https://file.garden/aPl_DrvVb0z0KEfd/Doctor6.jpeg',
    description: 'A compassionate and highly qualified paediatrician dedicated to providing excellent, family-centered medical care, with a special interest in managing allergic conditions in children.',
    details: [
        { heading: 'Certification & Credentials', items: ['Board-Certified, General Paediatrics: American Academy of Paediatrics (2013)', 'Post-Graduate Certificate in Allergy: Imperial College London']},
        { heading: 'Education', items: ['Bachelor of Medicine, Bachelor of Surgery (MBBS): University of the West Indies']},
        { heading: 'Key Areas of Focus', items: ['General Paediatric & Newborn Care', 'Childhood Vaccinations & Wellness Visits', 'Diagnosis & Management of Paediatric Allergies', 'Acute & Chronic Illness in Children']}
    ]
  }
];

const reviews = [
    { name: 'Patrice huggins', rating: 5, text: `My go to GP Dr Roopchand is so good with his patients.

I recommend everyone to him because he was the only one able to correctly diagnose my issues and fix them.

The staff are really nice and accommodating and the space is clean and modern.` },
    { name: 'Nicholas David', rating: 5, text: `I haven't been at the dentist in a while mainly because of the bad experience I had the last time I did.

Nevertheless, then came Dr Lamorell to the rescue.

I received nothing but the best TLC at a dentist I have ever gotten.

Top tier performance by both the Dr and her assistant.

I highly recommend.` },
    { name: 'Kneckel Bruce', rating: 5, text: `Excellent Healthcare.

I suffered for years with an issue and checked multiple doctors for an illness I had.

After my second visit to Dr. Barry Roopchand, he figured out the issue and was able to give me treatment for it.` },
    { name: 'Cryssi Leumas', rating: 5, text: `Clean space and pleasant, professional staff.

State of the art technology.

Dr. Lamorell is an amazing family dentist.

Would definitely recommend.` },
    { name: 'Giorgio Gonzales', rating: 5, text: `This establishment is My entire family's health provider.

The doctor makes you feel at home and like you're talking to a friend.

I would recommend this place to everyone.` },
    { name: 'Camille Hernandez', rating: 5, text: `Excellent.

Dr. Barry is wonderful.

Service team is exceptional.` },
    { name: 'Darian Ruiz', rating: 5, text: `Excellent Service & Friendly Staff.

Highly Recommend to anyone seeking Medical Services.` },
    { name: 'Vinod Garness', rating: 5, text: `Excellent and prompt service.

Affordable rates.

Highly recommended!!!` },
    { name: 'Brandon -Boodoosingh', rating: 5, text: "Excellent service and doctors." },
    { name: 'Kim Ali', rating: 4, text: `Dr. Roopchand is the absolute best!

Excellent customer care from staff.

Short wait times.

Extremely clean environment.

Overall, Horizon is a fantastic health care facility with modern technology.` },
];

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const App: React.FC = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [isTeamSectionVisible, setIsTeamSectionVisible] = useState(false);
  const teamSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTeamSectionVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-100px 0px -100px 0px',
        threshold: 0.1
      }
    );

    const currentRef = teamSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentMember((prev) => (prev === 0 ? teamData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMember((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
  };

  const member = teamData[currentMember];

  return (
    <div 
      className="text-white animate-gradient bg-gray-900"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(12, 13, 89, 1) 8%, rgba(72, 35, 110, 1) 22%, rgba(133, 54, 60, 1) 52%, rgba(199, 96, 44, 1) 77%, rgba(255, 95, 31, 1) 97%)'
      }}
    >
      <header className="sticky top-0 z-20 p-4">
        <div className="container mx-auto px-8 py-3 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-lg rounded-full border border-white/20">
          <a href="#" className="text-2xl font-bold">HORIZON</a>
          <a href="tel:" className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all">
            Call Us
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-24 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 hero-heading" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.3)'}}>Healthcare that Feels Effortless</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
            Experience a new standard of healthcare, designed for your comfort and well being.
          </p>
          <a href="tel:" className="bg-white text-purple-600 font-bold py-4 px-10 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-2xl transform hover:scale-105 inline-block">
            Call us!
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl text-center bg-black/20 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
                <p className="text-gray-50 leading-relaxed text-lg" style={{whiteSpace: 'pre-line'}}>
                    {`At Horizon, we believe that exceptional healthcare is more than just treating symptoms.

It's about building a lasting relationship with you and your family, taking the time to listen to your concerns, and creating a personalized care plan that fits your unique needs and lifestyle.

We understand that visiting a doctor can be stressful.

That's why our dedicated and experienced team is committed to providing a warm, welcoming environment where you feel heard, respected, and confident in your care.

From routine check-ups to managing complex conditions, we are your partners on the path to lifelong wellness.`}
                </p>
            </div>
        </section>
        
        {/* Meet The Team Section */}
        <section id="team" ref={teamSectionRef} className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.3)'}}>Meet The Team</h2>
            <div className="max-w-5xl mx-auto">
              <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl overflow-hidden border border-white/20">
                <div className="md:w-1/2 flex-shrink-0 order-2 md:order-1">
                  <h3 className="text-4xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold text-orange-200 mb-4">{member.title}</p>
                  <p className="mb-6 text-gray-200" style={{whiteSpace: 'pre-line'}}>{member.description}</p>
                  {member.details.map((section, index) => (
                      <div key={index} className="mb-4">
                          <h4 className="font-bold text-white mb-2">{section.heading}</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-200">
                              {section.items.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                      </div>
                  ))}
                </div>
                <div className="md:w-1/2 w-full order-1 md:order-2 relative">
                  <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-lg shadow-lg aspect-square" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <div className="text-white font-medium">{currentMember + 1} / {teamData.length}</div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.3)'}}>Hear what other patients think</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mr-4 ring-2 ring-white/50">
                      <span className="text-xl font-bold text-white">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} filled={i < review.rating} />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 italic" style={{whiteSpace: 'pre-line'}}>"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/20 py-20 px-6">
          <div className="container mx-auto text-center">
            <p className="text-lg mb-4 text-gray-200">Book an appointment before it's too late!</p>
            <a href="tel:" className="bg-white text-purple-600 font-bold py-4 px-10 text-lg rounded-lg hover:bg-opacity-90 transition-all shadow-2xl transform hover:scale-105 inline-block mb-12">
              Call now
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Opening hours:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>Monday: 8 am–6 pm</li>
                  <li>Tuesday: 8 am–6 pm</li>
                  <li>Wednesday: 8 am–6 pm</li>
                  <li>Thursday: 8 am–6 pm</li>
                  <li>Friday: 8 am–6 pm</li>
                  <li>Saturday: 8 am–1 pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Location:</h3>
                <a 
                  href="https://www.google.com/maps/place/Horizon+Healthcare+Limited/@10.628783,-61.4518244,702m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8c35fdaf53aac81b:0x9a96dbb315966d70!8m2!3d10.628783!4d-61.4518244!16s%2Fg%2F11fm42d3b8?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-orange-200 underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/30 text-gray-300 py-6 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; Horizon 2025</p>
        </div>
      </footer>
      
      <button 
        onClick={handlePrev} 
        aria-label="Previous team member" 
        className={`fixed top-1/2 left-4 md:left-8 z-30 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 ease-in-out shadow-md backdrop-blur-sm hover:scale-110 ${isTeamSectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>

      <button 
        onClick={handleNext} 
        aria-label="Next team member" 
        className={`fixed top-1/2 right-4 md:right-8 z-30 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 ease-in-out shadow-md backdrop-blur-sm hover:scale-110 ${isTeamSectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};

export default App;
