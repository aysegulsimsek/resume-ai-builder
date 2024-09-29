import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"
import RichTextEditor from "../RichTextEditor"


const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummery: '',
}
function Experience() {
    const [loading, setLoading] = useState(false);

    const [experienceList, setExperienceList] = useState([
        formField
    ])
    const handleChange = (index, event) => {

    }
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 '>
                <h2 className='font-bold text-lg'>Professional Experience</h2>
                <p>Add Your previous Job experience.</p>

                {
                    experienceList.map((item, index) => (
                        <div key={item.title}>
                            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                                <div>
                                    <label className="text-xs font-semibold select-none" >
                                        Position Title  </label>
                                    <Input name='title' onChange={(event) => handleChange(index, event)} />

                                </div>
                                <div>
                                    <label className="text-xs font-semibold select-none" >
                                        Company Name  </label>
                                    <Input name='companyName' onChange={(event) => handleChange(index, event)} />

                                </div>
                                <div>
                                    <label className="text-xs font-semibold select-none" >
                                        City  </label>
                                    <Input name='city' onChange={(event) => handleChange(index, event)} />

                                </div>
                                <div>
                                    <label className="text-xs font-semibold select-none" >
                                        State  </label><Input name='state' onChange={(event) => handleChange(index, event)} />

                                </div>
                                <div>
                                    <label className="text-xs font-semibold select-none" >
                                        Start Date  </label><Input type='date' name='startDate' onChange={(event) => handleChange(index, event)} />

                                </div>
                                <div>
                                    <label className="text-xs font-semibold select-none" >
                                        End Date
                                    </label><Input type='date' name='endDate' onChange={(event) => handleChange(index, event)} />

                                </div>
                                <div>
                                    {/* Work Summery */}
                                    <RichTextEditor/>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="flex justify-between">
                    <Button variant="outline" className="text-primary"> + Add More Experience</Button>
                    <Button type="submit" className="text-white"> {loading ? <LoaderCircle className='animate-spin' /> : "Save"}</Button>
                </div>
            </div>

        </div>
    )
}

export default Experience