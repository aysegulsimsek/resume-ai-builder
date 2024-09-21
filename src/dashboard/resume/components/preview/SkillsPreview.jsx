/* eslint-disable react/prop-types */
import React from 'react'

const SkillsPreview = ({resumeInfo}) => {
  return (
    <div className="my-6">
    <h2 className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
    >
        Education
    </h2>
          <hr className="border-spacing-0 mt-4 shadow-sm my-2" />
          <div className='grid grid-cols-2 gap-3 my-4'>
    {
        resumeInfo?.skills.map((skills, index) => (
            <div key={index} className="flex items-center justify-between">
                <h2 className='text-xs'>{skills.name}</h2>
                <div className='h-2 bg-gray-200 w-[120px]'>
                    <div className='h-2'
                        style={{
                            backgroundColor: resumeInfo?.themeColor,width:skills?.rating+"%"
                    }}>

                    </div>
                </div>
            </div>
        ))
              }
              </div>
</div>
  )
}

export default SkillsPreview