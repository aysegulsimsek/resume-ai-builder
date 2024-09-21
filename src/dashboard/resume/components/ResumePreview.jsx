import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import  { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummaryPreview'
import ProfessionalExperiencePrev from './preview/ProfessionalExperiencePrev'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
const ResumePreview = () => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  return (
      <div className={`shadow-lg h-full p-14 border-t-[20px] rounded-t-lg  `}
      style={{borderColor:resumeInfo?.themeColor}}
      >
          {/* Personal Detail */}
          <PersonalDetailPreview resumeInfo={resumeInfo} />

          {/* Summary */}
          <SummaryPreview resumeInfo={resumeInfo} />

          {/* Professional Exp */}
          <ProfessionalExperiencePrev resumeInfo={resumeInfo} />

          {/* Educational */}
          <EducationalPreview resumeInfo={resumeInfo} />

          {/* Skills */}
          <SkillsPreview resumeInfo={resumeInfo} />

    </div>
  )
}

export default ResumePreview