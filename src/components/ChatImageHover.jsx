import React, { useContext } from 'react';
import { reqForDeletingImg } from '../utils/auth';
import { PiDownloadSimpleBold, PiShareFatBold } from "react-icons/pi";

import { MdDeleteOutline, MdOutlinePublicOff, MdOutlinePublic } from "react-icons/md";
import { toast } from 'react-toastify';
import { AppContext } from '../context/appContext';
import axios from 'axios';


const ChatImageHover = ({ otherData }) => {
    const { userChatDataArr, setUserChatDataArr, } = useContext(AppContext)

    const { _id, prompt, imageUrl, isPublic, createdAt } = otherData;

    const handelDeletingImg = async (imageId) => {
        console.log(userChatDataArr);

        const result = await reqForDeletingImg(imageId);
        if (result) {
            toast.success('Image Deleted..!');
            setUserChatDataArr(prev => prev.filter(item => item._id !== _id))
        } else {
            toast.error('Sorry, Image not Deleted..!');
        }
    }


    const copyToClipboard = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            toast.success('Image link copied! Share now')
        } catch (err) {
            toast.error("Failed to copy image link");
        }
    };



    const handelImgPublic = async (_id) => {
        try {
            const { data } = await axios.post('/api/image/public-private',
                { imageId: _id },
                { Headers: { 'Content-Type': 'application/json' } },
            )
            if (data.success) {
                // console.log(data.updatedImage);
                setUserChatDataArr(prev => prev.map(item => item._id == _id ? { ...item, isPublic: data.updatedImage.isPublic } : item))
            } else {
                toast.error('This feature is not working now.')
            }
        } catch (error) {
            toast.error('This feature is not working now.')
            console.log('delete error', error);
        }
    }

    return (
        <div className='pr-2 pb-1 border-0 absolute bottom-0 right-0
            transform translate-y-full opacity-0 
            group-hover:translate-y-0 group-hover:opacity-100 
            transition-all duration-300 ease-in-out '
        >
            <a href={imageUrl} download className="hoverLinkSize "><PiDownloadSimpleBold /></a>
            <div onClick={() => handelDeletingImg(_id)} className="hoverLinkSize "><MdDeleteOutline /></div>
            <div onClick={() => copyToClipboard(imageUrl)} className="hoverLinkSize "><PiShareFatBold /></div>
            <div onClick={() => handelImgPublic(_id)} className="hoverLinkSize">
                {
                    isPublic ? <MdOutlinePublic /> : <MdOutlinePublicOff />
                }
            </div>
            <style>
                {`
                    .hoverLinkSize{
                        height: 40px;
                        width: 40px;
                        margin-block: 4px;
                        font-size: 22px;
                        color: black;
                        background: white;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}

export default ChatImageHover






// import React, { useState } from 'react';

// function CopyLinkButton() {
//   const [copied, setCopied] = useState(false);
//   const link = "https://yourwebsite.com/page-to-share";

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(link);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
//     } catch (err) {
//       console.error("Failed to copy link: ", err);
//     }
//   };

//   return (
//     <div>
//       <button onClick={copyToClipboard}>
//         {copied ? "Copied!" : "Copy Link"}
//       </button>
//     </div>
//   );
// }

// export default CopyLinkButton;
