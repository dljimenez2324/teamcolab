'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from 'react-hook-form';



interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {

   const {register, control} = useForm<IssueForm>();
   console.log(register("title"))

  return (
    <>
    <div className='max-w-xl space-y-3'>
        <TextField.Root size="2" placeholder="title" {...register('title')} />
        <Controller
            name='description'
            control={control}
            render={(field) => <SimpleMDE placeholder="Description"  />}
        />
        
        <Button>Submit New Issue</Button>
    </div>
    </>
  )
}

export default NewIssuePage