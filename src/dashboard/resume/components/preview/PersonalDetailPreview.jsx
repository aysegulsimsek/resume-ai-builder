/* eslint-disable react/prop-types */

const PersonalDetailPreview = ({ resumeInfo }) => {
    return (
        <div className=''>
            <h2 className='font-bold text-xl text-center'
                style={{ color: resumeInfo?.themeColor }}
            >
                {resumeInfo?.firstName}{"  "}{resumeInfo?.lastName}
            </h2>
            <h2
                className='font-medium text-sm text-center capitalize'>
                {resumeInfo?.jobTitle}
            </h2>
            <h2
                className='font-medium text-xs text-center capitalize'>
                {resumeInfo?.address}
            </h2>
            <div className="flex justify-between">
                <h2 className="font-normal text-xs italic">
                    {resumeInfo?.phone}
                </h2>
                <h2 className="font-normal italic text-xs">
                    {resumeInfo?.email}
                </h2>
            </div>
            <hr  className="border-spacing-0 shadow-sm my-2"/>
        </div>
    )
}

export default PersonalDetailPreview