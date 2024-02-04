import React from "react";

export type OnboardingData = Array<OnboardingItem>

export type OnboardingItem = {
    id: number;
    title: string;
    subTitle: string;
    image: React.FunctionComponent<React.SVGAttributes<React.ReactSVGElement>>;
}