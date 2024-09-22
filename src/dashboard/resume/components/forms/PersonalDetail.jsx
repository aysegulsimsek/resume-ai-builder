/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';

const PersonalDetail = ({ enableNext }) => {
    const params = useParams();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    useEffect(() => {
        console.log("Resume ID:", params?.resumeId); 
    }, [params]);

    const handleInputChange = (e) => {
        enableNext(false);
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setResumeInfo({
            ...resumeInfo,
            [name]: value
        });
    };

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: formData
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
        console.log("Form Data:", formData);
    };

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Details</h2>
            <p>Get Started with the basic information.</p>

            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-sm'>
                            First Name
                        </label>
                        <Input defaultValue={resumeInfo?.firstName} className="custom-input" name="firstName" required onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>
                            Last Name
                        </label>
                        <Input defaultValue={resumeInfo?.lastName} className="custom-input" name="lastName" required onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>
                            Job Title
                        </label>
                        <Input defaultValue={resumeInfo?.jobTitle} className="custom-input" name="jobTitle" required onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>
                            Address
                        </label>
                        <Input defaultValue={resumeInfo?.address} className="custom-input" name="address" required onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>
                            Phone
                        </label>
                        <Input defaultValue={resumeInfo?.phone} className="custom-input" name="phone" required onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>
                            Email
                        </label>
                        <Input className="custom-input" name="email" required onChange={handleInputChange} />
                    </div>
                </div>
                <div className='mt-3 flex justify-end text-white'>
                    <Button type="submit">
                        {loading ? <LoaderCircle className='animate-spin' /> : "Save"}
                    </Button>
                </div>
            </form>

        </div>
    );
}

export default PersonalDetail;
