"use client";

import React, { useEffect, useState } from 'react';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import { Button } from './ui/button';
import Tus from '@uppy/tus';
import useUser from '@/app/hook/useUser';
import { supabaseBrowser } from '@/lib/supabase/browser';


export default function Uploader() {

    // for the request policy so we need to make a Header Request Valid
    const onBeforeRequest = async (req: any) => {
        const supabase = supabaseBrowser();
        const { data } = await supabase.auth.getSession();
    
        // for every section session we go through this header requirement
        req.setHeader("Authorization", `Bearer ${data.session?.access_token}`);
    };
    

    // create a hook
    const { data: user } = useUser();

    // make uppy to only upload one image at the time and max size 5mb
    const [uppy] = useState(() => new Uppy(
        {
            restrictions:{
                maxNumberOfFiles: 1,
                allowedFileTypes: ["image/*", ],
                maxFileSize: 5 * 1000 * 1000,
            },
        }).use(Tus, { 
            endpoint: 
                process.env.NEXT_PUBLIC_SUPABASE_URL + 
                "/storage/v1/upload/resumable",
                onBeforeRequest,
            allowedMetaFields: [
                "bucketName",
                "objectName",
                "contentType",
                "cacheControl",
            ],
        })
    );

    //
    uppy.on("file-added", (file) => {
        file.meta = {
            ...file.meta,
            bucketName: "images",
            contentType: file.type,
        };
    });

    //
    const handleUpload = () => {

        const randomUUID = crypto.randomUUID();

        // here we only accept one file as we adjusted in the supabase bucket
        uppy.setFileMeta(uppy.getFiles()[0].id, {
            objectName: user?.id + "/" + randomUUID + "/" + uppy.getFiles()[0].name,
        });

        uppy.upload();
    };


    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button id='upload-trigger'></button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Daily Upload</DialogTitle>
                        <DialogDescription>
                            Please select a photo to upload
                        </DialogDescription>
                    </DialogHeader>
                    <div className='space-y-5'>
                        <Dashboard uppy={uppy} hideUploadButton/>
                        <Button className='w-full' onClick={handleUpload}>Upload</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );

};
