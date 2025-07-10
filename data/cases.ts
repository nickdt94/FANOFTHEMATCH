export interface CaseStudy {
    image: string;
    category: string;
    title: string;
    description: string;
    longDescription: string;
    url: string;
}

export const caseStudies: CaseStudy[] = [
    {
        image: "https://a.storyblok.com/f/174314/1080x1080/7c30f1349e/screen1.jpg/m/800x0/filters:format(webp):quality(80)",
        category: "Manchester City",
        title: "Interactive in-stadium quiz",
        description: "Fan of the Match is a live engagement platform designed specifically for the dedicated fans of Manchester City FC. It provides an array of interactive features, including quizzes, polls, votings, games, lotteries, and fan cams, all within the dynamic atmosphere of the stadium.",
        longDescription: "Fan of the Match is a live engagement platform designed specifically for the dedicated fans of Manchester City FC. It provides an array of interactive features, including quizzes, polls, votings, games, lotteries, and fan cams, all within the dynamic atmosphere of the stadium. The platform is designed to be accessible without any app installation, ensuring maximum participation.",
        url: "https://www.wecreatewaves.com/ourwork/manchester-city-fan-of-the-match"
    },
    {
        image: "https://a.storyblok.com/f/174314/1920x721/adb3675340/header.png/m/1500x0/filters:format(webp):quality(80)",
        category: "ESPN",
        title: "Man of the Match platform",
        description: "Looking for a way to activate their Man of the Match concept, ESPN and Eredivisie sponsor KPN turned to us to develop a fully automated voting platform. We set out to create a solution that would allow ESPN to seamlessly integrate the Man of the Match concept into their Eredivisie broadcasts.  With several matches every weekend, a manual solution simply wouldn't cut it for ESPN. That's why we developed a platform that would automatically gather all the necessary information, including line-ups, substitutions, and stats, via an API connection with data provider StatsPerform.",
        longDescription: "Looking for a way to activate their Man of the Match concept, ESPN and Eredivisie sponsor KPN turned to us to develop a fully automated voting platform. We set out to create a solution that would allow ESPN to seamlessly integrate the Man of the Match concept into their Eredivisie broadcasts. With several matches every weekend, a manual solution simply wouldn't cut it. That's why we developed a platform that would automatically gather all the necessary information, including line-ups, substitutions, and stats, via an API connection with data provider StatsPerform.",
        url: "https://www.wecreatewaves.com/ourwork/espn-man-of-the-match"
    },
    {
        image: "https://a.storyblok.com/f/174314/700x519/ebe9979890/img_1.jpg/m/800x0/filters:format(webp):quality(80)",
        category: "Heineken Player 0.0",
        title: "Interactive race game with Max Verstappen",
        description: "The Player 0.0 initiative is part of Heineken's global responsible consumption platform, When You Drive, Never Drink, which was conceived to champion responsible consumption, expanding to new audiences in the world of virtual racing. Underscoring that the best drivers are those who choose not to drink.",
        longDescription: "The Player 0.0 initiative is part of Heineken's global responsible consumption platform, 'When You Drive, Never Drink', which was conceived to champion responsible consumption, expanding to new audiences in the world of virtual racing. In a unique collaboration, we developed an interactive racing game that allowed fans to compete virtually against Max Verstappen, reinforcing the message that the best drivers are those who choose not to drink. The activation was a huge success, generating massive engagement and positive brand association for Heineken.",
        url: "https://www.livewall.be/cases/heineken-player-0-0-race-game-activatie"
    },
    {
        image: "https://a.storyblok.com/f/174314/1080x1080/32f0653db7/knvb-gallery-2.png/m/800x0/filters:format(webp):quality(80)",
        category: "KNVB - Dutch Football Association",
        title: "Interactive content platform",
        description: "Introducing the electrifying Fan of the Match quiz, the ultimate interactive experience for every fervent supporter of the Dutch national team and the Orange Lionesses! Witness the Amsterdam Arena transform into an unyielding Orange stronghold, pulsating with the energy of thousands of ecstatic fans.",
        longDescription: "Introducing the electrifying Fan of the Match quiz, the ultimate interactive experience for every fervent supporter of the Dutch national team and the Orange Lionesses! Witness the Amsterdam Arena transform into an unyielding Orange stronghold, pulsating with the energy of thousands of ecstatic fans. Our platform allowed the KNVB to engage directly with fans in the stadium and at home, delivering real-time content, polls, and exclusive insights.",
        url: "https://www.wecreatewaves.com/knvb-dutch-football-asociation"
    },
    {
        image: "https://a.storyblok.com/f/174314/5760x2160/9a3e422d96/header-rbr-honda.jpg/m/1500x0/filters:format(webp):quality(80)",
        category: "Red Bull Racing & Honda",
        title: "Mobile race game",
        description: "Honda and Red Bull Racing wanted to activate their successful partnership digitally in an innovative way towards Formula 1 fans in the US with a fun mobile race game.",
        longDescription: "Honda and Red Bull Racing have a successful partnership in Formula 1. The sport has grown in popularity in the United States in recent years. Honda USA and Red Bull therefore wanted to activate their partnership digitally in an innovative way towards Formula 1 fans in the US. Red Bull Racing and Honda are innovative brands. This was also reflected in the challenge they gave us: develop a striking campaign with a mobile game that is innovative but also exudes 'fun & entertainment'. The game served a wide audience of fans and not just die-hard Formula 1 fans.",
        url: "https://www.wecreatewaves.com/ourwork/Red-Bull-Racing"
    },
    {
        image: "https://a.storyblok.com/f/174314/1920x750/ddf73d2f55/header.png/m/1500x525/filters:format(webp):quality(80)",
        category: "BWT Alpine F1 Team",
        title: "Rush Racers",
        description: "With the launch of their new RISE+ platform, Alpine set out to redefine how they connect with fans, reintroducing the fan-favorite racing game, Rush Racers, as a key interactive feature.",
        longDescription: "With the launch of their new RISE+ platform, Alpine set out to redefine how they connect with fans—offering exclusive content, experiences, and rewards all in one place. As part of this bold move, they needed to refresh and reintroduce Rush Racers, the fan-favorite racing game, as a key interactive feature within the platform. The challenge for Wave was to evolve the game for a new season while ensuring it aligned perfectly with the creative vision and branding of RISE+. It needed to be fun, competitive, and immediately recognizable as part of the BWT Alpine Formula One Team universe—all while integrating smoothly into the new loyalty ecosystem powered by Alpine's Fan Engagement team.",
        url: "https://www.wecreatewaves.com/ourwork/alpine-f1-race-game"
    }
];

// Function to create URL-friendly slugs
export const createSlug = (title: string, category: string): string => {
    const combined = `${category}-${title}`;
    return combined
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};
