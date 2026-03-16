import {TbTargetArrow} from "react-icons/tb"

export default function StatsSection({
        imageUrl = "join-cohort.jpeg",
        stat = "98%",
        label = "Success Rate",
        onQuickAction,
}){


    return(
        <section className="stats-section bg-[#0f0f0f] py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-md shadow-2xl">
                    {/*image*/}
                    <img src={imageUrl} alt="section visual"
                        className="w-full h-[320px] sm:h-[420px] object-cover"/>
                    {/*dark overlay*/}
                    <div className="absolute inset-0 z-10 bg-black/20"/>
                    {/*stats overlay (bottom left)*/}
                    <div className="absolute left-0 bottom-0 z-20 w-[260px] sm:w-[320px] bg-[#0d6efd] px-5 py-5 shadow-xl opacity-70">
                        <div className="flex items-center gap-4">
                            {/*bullseye icon*/}
                            <TbTargetArrow className="text-white text-5xl sm:text-6xl shrink-0"/>
                            <div className="text-white">
                                <div className="text-4xl sm:text-5xl font-extrabold leading-none">{stat}</div>
                                <div className="text-sm font-semibold mt-1 opacity-95">{label}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left pt-5 pb-5">
                <h2 className="text-white font-extrabold text-4xl leading-tight mt-2 whitespace-pre-line">Join the AGPN First Cohort</h2>
                <ul className="text-white leading-relaxed mt-5 text-md">
                    <li>Build in demand digital skills</li>
                    <li>Work on real projects</li>
                    <li>Grow professionally within a structured ecosystem</li>
                </ul>
                <p className="text-gray-300 mt-5 text-sm">
                    The first 50 registered participants will receive direct onboarding into the AGPN Workforce Community
                </p>
                <button className="mt-10 bg-[#1A2B6D] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md shadow-lg">
                    JOIN THE FIRST COHORT
                </button>
            </div>
        </section>
    )
}