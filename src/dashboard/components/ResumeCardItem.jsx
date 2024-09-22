import { Notebook } from "lucide-react"
import { Link } from "react-router-dom"

const ResumeCardItem = ({ resume }) => {


  return (
    <Link to={'/dashboard/resume/'+resume.id+"/edit"}>
    <div className="flex-col mx-3 gap-3">
      <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border-primary border-dashed border rounded-lg hover:scale-[1.03] transition-all hover:shadow-md shadow-primary duration-300">
        <Notebook/>
      </div>
      <h2 className="text-center my-1 uppercase">{resume.attributes.title} </h2>
      </div>
      </Link>
  )
}

export default ResumeCardItem
