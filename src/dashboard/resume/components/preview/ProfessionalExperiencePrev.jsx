/* eslint-disable react/prop-types */

import exp from "constants"

const ProfessionalExperiencePrev = ({resumeInfo}) => {
  return (
      <div className='my-6'>
          <h2 className='text-center font-bold text-sm mb-2'
              style={{
              color:resumeInfo?.themeColor
          }}>
          Professional Experience 
          </h2>
          <hr className="border-spacing-0 mt-4 shadow-sm my-2" />
          {
              resumeInfo?.experience.map((experience, index) => (
                  <div key={index} className="my-5">
                      <h2 className="text-sm font-bold">
                          {experience?.title}
                      </h2>
                      <h2 className="text-sm flex justify-between">
                          {experience?.companyName},
                          {experience?.city},
                          {experience?.state} 
                          <span>
                           {experience?.startDate} 
                           {""}
                          {experience?.currentlyWorking ? " Present" : experience?.endDate} 
                          </span>
                      </h2>
                      <p className="text-xs my-2">
                          {experience?.workSummery}
                      </p>
                  </div>
              ))
          }
      </div>
  )
}

export default ProfessionalExperiencePrev