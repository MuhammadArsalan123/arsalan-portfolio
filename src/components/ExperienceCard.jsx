import React, { useState } from "react";
import { ExperiencesList } from "../data/ExperienceList";

function ExperienceCard() {
    const [showFullDescription, setShowFullDescription] = useState(null);
    const experiencesToDisplay = ExperiencesList.Experience.slice(0, 4);

    const toggleDescription = (index) => {
        console.log("clicking description", index);

        setShowFullDescription(index === showFullDescription ? null : index);
    };

    return (
        <>
            {experiencesToDisplay.map((experience, index) => (
                <div
                    key={index}
                    className="mb-8 h-auto rounded-lg bg-slate-50 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                    <h2 className="font-poppins mb-2 cursor-pointer text-base font-semibold lg:text-xl">
                        {experience.name}
                    </h2>
                    <p className="font-poppins text-sm text-gray-900">
                        {experience.description}
                    </p>
                    <button
                        onClick={() => {
                            window.open(experience.linkedInUrl);
                        }}
                        className="button-UI w-[120px] rounded-lg px-4 py-1.5 mt-2 font-bold tracking-wider text-black shadow-xl border-double border-4 border-black hover:text-black"
                    >
                        LinkedIn
                    </button>
                </div>
            ))}
        </>
    );
}

export default ExperienceCard;
