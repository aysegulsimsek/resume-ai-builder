import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid />
          Theme</Button>
        <div className='flex'>
          {
            activeFormIndex > 1 && <Button size="sm"className="flex gap-2 mr-2 text-white"  onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft />Prev </Button>
          }
          <Button className="flex gap-2 text-white" size="sm" onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Details  */}
      <div>
            {activeFormIndex == 1 ? 
      <PersonalDetail />
    :(null)  
    }
          </div>
      {/* Summery */}

      {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}
    </div>
  )
}

export default FormSection