import { OnboardingData } from "./OnboaringTypes";
import OnboardingBg1 from '../../../assets/img/onboarding/onboarding1Bg.svg';
import OnboardingBg2 from '../../../assets/img/onboarding/download.svg';
import OnboardingBg3 from '../../../assets/img/onboarding/population.svg';
import OnboardingBg4 from '../../../assets/img/onboarding/laptop.svg';

export const onboardingData: OnboardingData = [
    {
        id: 1,
        title: "Unlimeted en\ntertainment,\none low price",
        subTitle: "All of Netflix, starting at just\n₹149.",
        image: OnboardingBg1,
    },
    {
        id: 2,
        title: "Download and watch offline",
        subTitle: "Always have something to watch.",
        image: OnboardingBg2,
    },
    {
        id: 3,
        title: "Cancel online anytime",
        subTitle: "Join today, no reason to wait.",
        image: OnboardingBg3,
    },
    {
        id: 4,
        title: "Watch everywhere",
        subTitle: "Stream on your phone, tablet, laptop, TV and more.",
        image: OnboardingBg4,
    },
];