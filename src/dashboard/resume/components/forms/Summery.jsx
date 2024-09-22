import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from "@/context/ResumeInfoContext"
import { useContext, useEffect, useState } from "react"
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { useParams } from "react-router-dom";
import { Bot, LoaderCircle } from "lucide-react";

function Summery({ enableNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const [summery, setSummery] = useState();

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
                            variant="outline"
                            size="sm"
                            type="button"
                            className="border-primary border-2 text-primary gap-2"
                        >
                        <Bot/>
                            Generate from AI
                        </Button>
                    </div>
                    <Textarea required className="mt-5" onChange={(e) => setSummery(e.target.value)} />
                    <div className="mt-2 flex justify-end">
                        <Button  type="submit" className="text-white"> {loading ? <LoaderCircle className='animate-spin' /> : "Save"}</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Summery