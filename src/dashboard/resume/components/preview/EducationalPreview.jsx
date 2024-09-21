/* eslint-disable react/prop-types */

const EducationalPreview = ({ resumeInfo }) => {
    return (
        <div className="my-6">
            <h2 className="text-center font-bold text-sm mb-2"
                style={{ color: resumeInfo?.themeColor }}
            >
                Education
            </h2>
            <hr className="border-spacing-0 mt-4 shadow-sm my-2" />
            {
                resumeInfo?.education.map((education, index) => (
                    <div key={index} className="my-5">
                        <h2 className="text-sm font-bold"
                            style={{ color: resumeInfo?.themeColor }}>{education?.universityName} </h2>
                        <div className="flex justify-between items-center">
                        <h2 className="text-xs flex justify-between">{education?.degree} in {education?.major}  </h2>
                        <h2 className="text-xs font-bold">
                            <span>{education?.startDate}  - {education?.endDate}</span>
                        </h2>
                        </div>
                      
                        <p className="text-xs my-2">
                            {education?.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default EducationalPreview