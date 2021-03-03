import React from "react";

import { fullName, title } from "../global";

const footpathBackground = "/footpath-background.jpg"
const avatar = "/avatar.jpg"

const LandingData = {
    core: {
        header: fullName,
        body: title,
        alt: "Finding New Pathways by Working Together",
        background: footpathBackground,
    },
    aboutMe: {
        about: {
            header: `Professional Profile`,
            para: [
                "I am a highly experienced counsellor and family therapist in private practice.",
                "My experience includes working for 16 years in the counselling team at Jewish Care Victoria in Melbourne.",
                "My passion is to understand and help people. " +
                "I believe that authenticity and empathy are the most important skills of a therapist. " +
                "In my practice, I provide a safe, respectful and confidential environment which allows my clients to experience a healing & supportive relationship during counselling. " +
                "I encourage my clients to actively participate in the counselling process by setting goals and building on their strengths.",
                "Although everyone has their own coping strategies to manage life's challenges, it is often beneficial to get professional help. " +
                "A counsellor can help clients gain clarity and insight into the issues they are struggling with. " +
                "Counselling can help clients develop strategies to build resilience and move forward positively in their lives.",
                "In my practice, I see individuals, couples and families.",
            ]
        },
        avatar: avatar,
    },
    qualifications: {
        header: "Qualifications",
        para: [
            "Diploma of Psychology, Psychotechnical Institute Antwerp/Belgium, 1985",
            "Postgraduate training in Psychoanalytical Psychotherapy with a member of the Société Belge de Psychanalyse de Bruxelles, 1988",
            "Graduate Diploma in Social Science - Family Therapy, Swinburne University Melbourne/Australia, 2003",
            "Masters of Social Science - Family Therapy, Swinburne University Melbourne, Australia, 2012",
            "Clinical member of the Australian Association of Family Therapists (AAFT).",
        ]

    },
    specialities: {
        header: "Specialties",
        para: [
            "Anxiety/Depression",
            "Aged care issues, including Holocaust trauma",
            "Carer support",
            "Grief & Loss",
            "Fertility issues & IVF treatment support",
            "Life transition/Menopause",
            "Parenting support",
            "Relationship issues, including marital & pre-marital",
            "Stress management, Life-work balance, Self-esteem",
        ]
    },
    treatmentApproach: {
        header: "Treatment Approach",
        para: [
            "I use an eclectic approach to therapy which involves assessing what framework and techniques work best with each individual client, couple and family.",
            "I incorporate Psychodynamic theory, Solution-Focused theory, Mindfulness techniques and Acceptance and Commitment Therapy (ACT).",
            "When working with couples and families my approach includes both Family of Origin and Attachment theory."
        ]
    },
    languages: {
        header: "Languages",
        para: [
            "English",
            "German",
            "French",
        ]
    },
    generalInfo: {
        header: "Frequently Asked Questions",
        para: [
            "No GP referral required.",
            "Sliding scale of fees.",
            "Sessions are also available by zoom or video call in Melbourne, interstate and internationally.",
            "For inquiries and to make an appointment please contact me via my mobile number or e-mail address below.",
        ]
    }
}

export default LandingData
