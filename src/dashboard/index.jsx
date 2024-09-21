import { useUser } from "@clerk/clerk-react"
import AddResume from "./components/AddResume"
import GlobalApi from "./../../service/GlobalApi";
import { useEffect, useState } from "react";
import ResumeCardItem from "./components/ResumeCardItem";
import { Skeleton } from "@/components/ui/skeleton"
const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    user && GetResumeList();
  }, [user])

  const GetResumeList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => {
      setResumeList(resp.data.data)
      setLoading(false)

    })
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>
        My Resume
      </h2>
      <p>Start Creating AI Resume to your next Job  role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 ">
        <AddResume />
        {
          loading ? (
            <div className="flex">
              <div className="flex ml-3 w-full">
                <Skeleton className="px-14  py-24 border items-center flex justify-center bg-slate-100 rounded-lg h-[280px] w-[400px] " />
              </div>
              <div className="flex ml-3  w-full">
                <Skeleton className="px-14  py-24 border items-center flex justify-center bg-slate-100 rounded-lg h-[280px] w-[400px] " />
              </div>
              <div className="flex ml-3  w-full">
                <Skeleton className="px-14  py-24 border items-center flex justify-center bg-slate-100 rounded-lg h-[280px] w-[400px] " />
              </div>
            </div>
          ) : (
            resumeList.length > 0 && resumeList.map((resume, index) => (
              <ResumeCardItem resume={resume} key={index} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
