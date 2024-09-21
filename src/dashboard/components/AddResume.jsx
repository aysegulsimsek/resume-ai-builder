import { Loader2, PlusSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/clerk-react"
import GlobalApi from "../../../service/GlobalApi"
import { useNavigate } from "react-router-dom"
const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [loading, setLoading] = useState(false)
  const { user } = useUser();
  const navigate = useNavigate();
  const onCreate = () => {
    setLoading(true)
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName
        // password:user?.passwordEnabled
      }
    }
    GlobalApi.CreateNewResume(data).then(resp => {
      
      if (resp) {
        setLoading(false);
        navigate('/dashboard/resume/'+resp.data.data.attributes.resumeId+"/edit")
      }
    }, (error) => {
      setLoading(false)
    }
    )
  }
  return (
    <div>
      <div className="p-14 py-24 border items-center flex justify-center bg-slate-100 rounded-lg h-[280px] hover:scale-[1.02] duration-500 cursor-pointer transition-all hover:shadow-md border-dashed" onClick={() => setOpenDialog(true)}>
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Add a title for your new resume
              <Input className="my-2 custom-input" placeholder="Exp. Full Stack Resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button
                onClick={() => setOpenDialog(false)}
                variant="ghost"
                className="hover:bg-slate-100">Cancel</Button>
              <Button disabled={!resumeTitle||loading}
                onClick={() => onCreate()}
                className="text-white">
                {
                  loading ? (
                    <Loader2  className="animate-spin"/>
                  ) : ("Create")
                }
                </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddResume

