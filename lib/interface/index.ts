import { pdfDetails } from "../defintion"
import { promptResPair } from "../defintion"
import { contractDetails } from "../defintion"

export interface RootLayoutProps {
	children: React.ReactNode
}

export interface SmallUploadBoxProps{
    boxType : string
}

export  interface aiResponseProps {
    response : string,
    isRecent : boolean,
    index : number
}

export interface promptTextProps{
    prompt : string,
    pdfDetails : contractDetails | null 
}
export interface promptTextProps1{
    prompt : string,
    pdfDetails : pdfDetails[] | null | undefined
}



export interface ChatScreenProps{
    reqResPair : promptResPair[]
}

export interface InsightsCardProps{
    data : {
        head : string,
        body : string
    }
}

export interface AuthoringUserPromptProps{
    userResponse : string
}

export interface AuthoringAiResponseProps {
    aiResponse : string,
    isRecent : boolean,
    index : number
}