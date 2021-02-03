
import React from "react";

import {fullName} from "../global";

const footpathBackground = "/footpath-background.jpg"
const lighthouseBackground = "/lighthouse-background.jpg"
const avatar = null

const LandingData = {
    core: {
        header: fullName,
        body: "Family Therapist & Counsellor",
        background: lighthouseBackground,
    },
    aboutMe: {
        header: "Professional Profile",
        subHeader: "A snapshot of myself",
        about: {
            header: `My name is ${fullName},`,
            subHeader: "I am a Family Therapist & Counsellor ",
            para: [
                "I am a highly experienced counsellor and family therapist in private practice.",
                "My passion is to understand and help people. " +
                "I believe that authenticity and empathy are the most important skills of a therapist. " +
                "In my practice, I provide a safe, respectful environment which allows my clients to experience a healing & supportive relationship during counselling. " +
                "I encourage my clients to actively participate in the counselling process by setting goals and building on their strengths.",
                "Although everyone has their own coping strategies to manage life's challenges, it is often beneficial to get professional help. " +
                "A counsellor can help clients gain clarity and insight into the issues they are struggling with. " +
                "Counselling can help clients develop strategies to build resilience and move forward positively in their lives.",
                "In my practice I see individuals, couples and families.",
            ]
        },
        avatar: avatar,
    },
    qualifications: {
        header: "Qualifications",
        para: [
            "Diploma of Psychology, Psychotechnical Institute Antwerp/Belgium, 1985",
            "Post graduate Training in Psychoanalytical psychotherapy with a member of the Societe Psychoanalytique de Bruxelles/Belgium, 1988",
            "Graduate Diploma in social Science - Family Therapy, Swinburne University Melbourne/Australia, 2003",
            "Masters of Social Science - Family Therapy, Swinburne University Melbourne, Australia, 2012",
            "Clinical member of Australian Association of Family Therapists (AAFT).",
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
            "I incorporate Psychodynamic theory, Solution-focused theory, Mindfulness techniques and Acceptance and Commitment therapy (ACT).",
            "When working with couples and families my approach includes Family of Origin and Attachment theory."
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
        header: "FAQ",
        para: [
            "No GP referral required.",
            "Sliding scale of fees.",
            "Sessions by zoom or video call available in Melbourne, interstate and internationally."
        ]
    }
}

export default LandingData
