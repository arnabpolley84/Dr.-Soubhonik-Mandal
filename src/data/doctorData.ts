import { DoctorInfo, ReviewItem, SpecialtyItem, GalleryImage } from '../types';

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. Souvonik Mandal",
  bengaliName: "ডাঃ সৌভনিক মন্ডল",
  specialization: "Medicine Specialist & Diabetologist",
  bengaliSpecialization: "মেডিসিন স্পেশালিস্ট অ্যান্ড ডায়াবেটোলজিস্ট ইন সাউথ কলকাতা",
  location: "South Kolkata",
  clinic: "Arnay Medical",
  address: {
    line1: "351, Kalitala Rd",
    line2: "North Purbachal, Haltu",
    area: "Haltu",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700078",
    plusCode: "G94W+HV Kolkata, West Bengal"
  },
  phone: "094338 27531",
  phoneRaw: "+919433827531",
  whatsappUrl: "https://wa.me/919433827531?text=" + encodeURIComponent("Hello, I would like to enquire about an appointment with Dr. Souvonik Mandal."),
  profilePhoto: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA",
  profilePhotoLocal: "/images/profile_mandal.png",
  googleRating: 4.9,
  totalReviews: 80,
  googleListingStatus: "Closed · Opens 5 PM Friday (Please contact clinic to confirm appointment & visiting arrangements)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Arnay Medical 351 Kalitala Rd North Purbachal Haltu Kolkata West Bengal 700078")
};

export const CORE_HEALTH_SOLUTIONS = [
  {
    id: "diabetes",
    title: "Uncontrolled Diabetes",
    bengaliTitle: "অনিয়ন্ত্রিত ডায়াবেটিস",
    subtitle: "High Blood Sugar & HbA1c Fluctuations",
    description: "Struggling with rising fasting sugars, elevated HbA1c, constant thirst, frequent urination, or unexplained weight changes? Get personalized medication titration, diet guidance, and comprehensive metabolic monitoring.",
    iconName: "Activity",
    tag: "High Blood Sugar",
    remedy: "Targeted glycemic control, personalized medicine schedule, and organ protection."
  },
  {
    id: "hypertension",
    title: "Hypertension & BP Spikes",
    bengaliTitle: "উচ্চ রক্তচাপ ও হৃদরোগ ঝুঁকি",
    subtitle: "High Blood Pressure & Cardiovascular Risk",
    description: "Dealing with erratic high blood pressure readings, morning dizziness, heaviness in the head, or palpitations? Evidence-based pressure regulation designed to protect heart, kidney, and brain health.",
    iconName: "HeartPulse",
    tag: "Blood Pressure",
    remedy: "Comprehensive cardiovascular assessment and steady BP stabilization."
  },
  {
    id: "fatigue-thyroid",
    title: "Chronic Fatigue & Thyroid",
    bengaliTitle: "অবিরাম ক্লান্তি ও থাইরয়েড",
    subtitle: "Low Energy, Thyroid & Metabolic Disorders",
    description: "Feeling constantly exhausted, suffering from low energy despite sleeping, unexpected weight gain or loss, and sluggish metabolism? Detailed hormonal profile evaluation and restorative treatment.",
    iconName: "ZapOff",
    tag: "Energy & Metabolism",
    remedy: "Thyroid function workup, vitamin/mineral screening, and systemic vitality restoration."
  },
  {
    id: "infections-fevers",
    title: "Recurrent Fever & Infections",
    bengaliTitle: "বারবার জ্বর ও সংক্রমণ",
    subtitle: "Seasonal Viral Illness & Adult Internal Medicine",
    description: "Suffering from lingering viral fever, persistent cough, gut infections, or unexplained body aches? Attentive physical assessment, precise lab evaluation, and focused antibiotic/medical therapy.",
    iconName: "Thermometer",
    tag: "General Illness",
    remedy: "Thorough diagnostic investigation, targeted therapy, and recovery plan."
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "review-1",
    author: "Anurina Tarafdar",
    rating: 5,
    text: "Dr. Souvonik Mandal is one of the most compassionate and knowledgeable physicians I’ve ever consulted. He listens patiently and explains everything in detail.",
    source: "Google Review",
    verifiedTheme: "Compassionate & Patient Listening"
  },
  {
    id: "review-2",
    author: "Vinita Yadav",
    rating: 5,
    text: "Really polite behavior and a great doctor. Thank you doctor for your full support.",
    source: "Google Review",
    verifiedTheme: "Polite Behavior & Attentive Care"
  },
  {
    id: "review-3",
    author: "Indrajit Mahata",
    rating: 5,
    text: "Dr. Souvonik Mandal is a very good doctor of general medicine. His care and expertise helped my father recover.",
    source: "Google Review",
    verifiedTheme: "General Medicine Expertise"
  }
];

export const TRUST_THEMES = [
  {
    title: "Compassionate Care",
    desc: "Patients consistently describe Dr. Mandal's empathetic and supportive approach to their medical concerns."
  },
  {
    title: "Patient Listening",
    desc: "Dedicated time during consultations to understand symptoms thoroughly without rushing."
  },
  {
    title: "Knowledgeable Guidance",
    desc: "Careful medical evaluations and clear explanations so patients and families understand every step."
  },
  {
    title: "Polite & Respectful",
    desc: "Courteous consultation environment where questions are welcomed and answered reassurance."
  }
];

export const VALUE_CARDS = [
  {
    number: "01",
    title: "Patient-Centered Consultation",
    description: "Time to listen, understand concerns and discuss the next steps clearly.",
    highlight: "Unhurried attention"
  },
  {
    number: "02",
    title: "Thoughtful Medical Evaluation",
    description: "A structured approach to understanding symptoms, health history and individual needs.",
    highlight: "Thorough assessment"
  },
  {
    number: "03",
    title: "Diabetes Care",
    description: "Support for individuals seeking professional guidance for diabetes management and related health concerns.",
    highlight: "Personalized guidance"
  },
  {
    number: "04",
    title: "Clear Communication",
    description: "Medical information explained in a simple, understandable and reassuring manner.",
    highlight: "Transparent guidance"
  }
];

export const SPECIALTIES_DATA: SpecialtyItem[] = [
  {
    id: "general-medicine",
    title: "General / Internal Medicine",
    bengaliTitle: "জেনারেল / ইন্টারনাল মেডিসিন",
    subtitle: "Comprehensive health consultation for adult medical concerns",
    description: "Comprehensive medical consultation for adults, with attention to symptoms, health history and overall wellbeing.",
    points: [
      "Evaluation of acute symptoms and recurring health concerns",
      "Holistic assessment taking into account prior medical history",
      "Guidance on preventive health, lifestyle, and adult wellness",
      "Coordination of routine health screenings and investigations"
    ],
    icon: "Stethoscope"
  },
  {
    id: "diabetes-care",
    title: "Diabetes Care",
    bengaliTitle: "ডায়াবেটিস কেয়ার ও পরামর্শ",
    subtitle: "Structured guidance for blood glucose management & metabolic wellbeing",
    description: "Professional consultation and ongoing guidance for individuals managing diabetes and related metabolic health concerns.",
    points: [
      "Personalized discussions on blood glucose trends and monitoring",
      "Practical guidance on nutrition, daily routine, and physical activity",
      "Support in understanding medications and lifestyle adjustments",
      "Periodic reviews to adapt care plans to individual health goals"
    ],
    icon: "Activity"
  }
];

export const DIABETES_STEPS = [
  {
    step: "01",
    title: "Understand Your Condition",
    description: "A clear, reassuring discussion on how diabetes affects your daily vitality and body metrics."
  },
  {
    step: "02",
    title: "Review Your Health History",
    description: "Careful review of past records, blood glucose tests, family history, and existing medications."
  },
  {
    step: "03",
    title: "Discuss Lifestyle Factors",
    description: "Realistic conversation about daily nutrition, work schedules, sleep, and physical activity."
  },
  {
    step: "04",
    title: "Create An Appropriate Care Plan",
    description: "Formulating a personalized, evidence-informed roadmap tailored to your specific circumstances."
  },
  {
    step: "05",
    title: "Monitor Progress With Guidance",
    description: "Structured periodic check-ins to review parameters and make thoughtful adjustments."
  }
];

export const CONSULTATION_JOURNEY = [
  {
    step: "01",
    title: "Book Your Appointment",
    subtitle: "Simple Booking",
    description: "Submit an online enquiry or call Arnay Medical to schedule your consultation slot."
  },
  {
    step: "02",
    title: "Discuss Your Health Concerns",
    subtitle: "Attentive Listening",
    description: "Spend dedicated time explaining your symptoms, past medical reports, and concerns."
  },
  {
    step: "03",
    title: "Receive Professional Medical Guidance",
    subtitle: "Clear Explanation",
    description: "Get a thoughtful clinical evaluation with clear explanations of next steps and advice."
  },
  {
    step: "04",
    title: "Continue Your Care",
    subtitle: "Ongoing Support",
    description: "Follow up as recommended to ensure steady progress and ongoing health peace of mind."
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/images/img1.png",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdC4brDEGpID-w0hz9w_6QH-Qff-UaIx0lvaGAesTzoj-5F8PfXXv7Fcj4kzv_CEa3piBbpphMQMBQnWTxSskGg0H2zGcPGEv7-QO03m7NaSff1DQeAwK6PlJdqT6K-Dz1VJA",
    alt: "Dr. Souvonik Mandal - Medicine Specialist & Diabetologist",
    label: "Doctor Portrait",
    aspect: "aspect-square",
    description: "Dr. Souvonik Mandal, Medicine Specialist & Diabetologist in South Kolkata"
  },
  {
    id: 10,
    src: "/images/img10.jpg",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIfgS48rKWGqgaFTjUTZyB-zEeqbfvyfaiHSIT9wP13zxemjbERtlr_aKJ2x99rjWt8q8EybK9tZcyBUN2DL4ohRgg9rztlDTYumuDxX1bqf58SC6iCBWR30LnhswriUwVJsWH",
    alt: "Arnay Medical clinic exterior & entrance in Haltu",
    label: "Clinic Building",
    aspect: "aspect-[4/3]",
    description: "Arnay Medical, 351 Kalitala Rd, North Purbachal, Haltu, Kolkata"
  },
  {
    id: 2,
    src: "/images/img2.png",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA",
    alt: "Consultation space at Arnay Medical",
    label: "Consultation Space",
    aspect: "aspect-video",
    description: "Quiet, comfortable consultation room designed for patient privacy"
  },
  {
    id: 3,
    src: "/images/img3.png",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSALG22NisF_1mXWMxkEpBn--SIegtfwoQEBiLkwjHlDzKf4hBK7B3TgpUtI8Nuo2M8XaSX5SWpEG5QOFI_Bn6h5OaUarcSESc0y_CpjoOOWMkQXDxF2tFUCeXLENGKrumBsIj",
    alt: "Patient desk and consultation chamber",
    label: "Doctor's Chamber",
    aspect: "aspect-video",
    description: "Chamber setup equipped for patient evaluation and discussion"
  },
  {
    id: 4,
    src: "/images/img4.png",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRoKF4kSYI0Be34rs-zc_hGqe0SHOo4VwqRRl2eDQLTFmWuAQQK3LRv7LQIFtxbEKXkQGWTEzTPiB__tBq-83Elpzm3r1V9JjGQJ98d6guUJ0UEj9ASob8CKCMqHUs4HWNXEr8",
    alt: "Clinic environment at Arnay Medical",
    label: "Clinic Environment",
    aspect: "aspect-video",
    description: "Clean, hygienic premises adhering to medical standards"
  },
  {
    id: 11,
    src: "/images/img11.png",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9FJdIuKHQS7fcjevDt2mHE2ZJYUSu1mmNXEQ3F8uv1mHPjGco_p8kEIUA4O8fXZNT4VDxWgijh_DRwLJQKNnVwtOFDdElD8w2sy0QI5mTup_jtayfugYfDvPBJLwoHM-oFCpX",
    alt: "Dr. Souvonik Mandal during consultation",
    label: "Physician Care",
    aspect: "aspect-[3/4]",
    description: "Focused on listening and patient understanding"
  },
  {
    id: 12,
    src: "/images/img12.jpg",
    fallbackSrc: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkkohPGUNsd5Dr4phdZ3tYtUBn5c15JL_HJX4wKAxjfiuhxBmNU7RPdwccpPZtUHBRrBOKHHiTF-id0FB5OtxnqFV_F-YRVhrgyvqknAidjOEPsc2JHrqJuKgvrPdHPNHR6fKdT",
    alt: "Clinical interaction and evaluation",
    label: "Clinical Care",
    aspect: "aspect-square",
    description: "Thorough diagnostic review and guidance"
  }
];

export const FAQS = [
  {
    question: "Where is Dr. Souvonik Mandal’s clinic located?",
    answer: "Dr. Souvonik Mandal consults at Arnay Medical, located at 351, Kalitala Rd, North Purbachal, Haltu, Kolkata, West Bengal 700078 in South Kolkata (Google Maps Plus Code: G94W+HV Kolkata)."
  },
  {
    question: "Is Dr. Souvonik Mandal a Medicine Specialist?",
    answer: "Yes, Dr. Souvonik Mandal is a Medicine Specialist and Diabetologist providing adult medical consultations, general medicine assessments, and metabolic health management."
  },
  {
    question: "Does the doctor provide diabetes-related consultation?",
    answer: "Yes, diabetes care is one of the doctor's primary areas of medical practice, including blood glucose evaluation, lifestyle and dietary consultation, and ongoing medical management."
  },
  {
    question: "How can I contact the clinic?",
    answer: "You can reach Arnay Medical directly by phone at 094338 27531 (tel:09433827531) or send a message via WhatsApp at +91 94338 27531."
  },
  {
    question: "How can I request an appointment?",
    answer: "You can use the 'Book an Appointment' button on this website to send an appointment enquiry, or call the clinic directly at 094338 27531 to check current available timings."
  },
  {
    question: "Do I need to call before visiting?",
    answer: "Please contact the clinic to confirm appointment and visiting arrangements before visiting, as consultation hours may vary."
  }
];
