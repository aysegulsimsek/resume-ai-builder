/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { useContext, useEffect, useState } from "react"
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { useParams } from "react-router-dom";
import { Bot, LoaderCircle } from "lucide-react";
import { AIChatSession } from "./../../../../../service/AIModal";


const prompt = "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
function Summery({ enableNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const [text,setText]=useState('')
    const params = useParams();

    const [summery, setSummery] = useState('');
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState()
    const GenerateSummeryFromAI = async () => {
        setLoading(true)
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
        console.log(PROMPT)
        const result = await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()))
        setAiGenerateSummeryList(JSON.parse(result.response.text()))
        setLoading(false)

    }

    useEffect(() => {
        summery && setResumeInfo({
            ...resumeInfo,
            summery:summery
        },[summery])
    })

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: {
                summery:summery
            }
        };
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log(resp);
            enableNext(true);
            setLoading(false);
            toast("Resume updated.")
        }).catch(error => {
            console.error("Error while updating resume:", error.response ? error.response.data : error.message);
            console.log("Resume ID:", params?.resumeId);
            setLoading(false);
        });
    }
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10 '>
                <h2 className='font-bold text-lg'>Summery</h2>
                <p>Add Summery for your job title.</p>

                <form className="mt-7" onSubmit={onSave}>
                    <div className="flex justify-between items-end ">
                        <label htmlFor="">Add Summery</label>
                        <Button
                            onClick={()=>GenerateSummeryFromAI()}
                            variant="outline"
                            size="sm"
                            type="button"
                            className="border-primary border-2 text-primary gap-2"
                        >
                        <Bot/>
                            Generate from AI
                        </Button>
                    </div>
                    <Textarea required className="mt-5 h-10" 
                    value={text}
                        onChange={(e) => setSummery(e.target.value)}
                    />
                    <div className="mt-2 flex justify-end">
                        <Button  type="submit" className="text-white"> {loading ? <LoaderCircle className='animate-spin' /> : "Save"}</Button>
                    </div>
                </form>
            </div>
            <div className="mt-3">
            {
                aiGeneratedSummeryList && <div>
                    <h2 className="font-bold text-lg text-center mt-2">Suggestions</h2>
                    {
                        aiGeneratedSummeryList.map((item, index) => (
                            <div
                            onClick={() => setText(item?.summary)}
                                className="my-2 border-2 border-slate-50 px-5 py-5 rounded-lg cursor-pointer hover:scale-[1.02] duration-300" key={index}>
                                <h2 className="font-bold">Level: {item?.experience_level}</h2>
                                <p>{item?.summary} </p>
                            </div>
                        ))
                    }
                </div>
            }
           </div>
        </div>
    )
}

export default Summery