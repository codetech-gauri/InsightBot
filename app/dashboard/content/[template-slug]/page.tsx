"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplatelistSection'
import Templates from '@/app/(data)/Templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AIModal'

import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import moment from 'moment'


interface PROPS{
  params:{
    'template-slug':string
  }
}

function CreateNewContent(props:PROPS) {
  const selectedTemplate :TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
  const [loading,setLoading] = useState(false);
  const [aiOutput,setaiOutput] = useState<string>(' ');

  const {user}=useUser();
  const GenerateAIContent = async(formData:any)=>{
    setLoading(true);
    const selectedPrompt=selectedTemplate?.aiPrompt;
    
    const FinalAIPrompt=JSON.stringify(formData)+" , "+ selectedPrompt;

    const result =  await chatSession.sendMessage(FinalAIPrompt);

    //console.log(result.response.text());
    setaiOutput(result?.response.text());
    await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
    setLoading(false);
  }
  const SaveInDb=async(formData:any , slug:any , aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/yyyy'),
    })
    console.log(result);
  }
  
  return (
    <div className='p-10'>
      <Link href={'/dashboard'}>
        <Button><ArrowLeft/>Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>GenerateAIContent(v)}
        loading={loading}
        />
        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent
