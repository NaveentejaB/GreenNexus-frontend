export type SideNavItem = {
    title: string;
    path: string;
    icon_path:string;
    subMenu?: boolean;
    subMenuItems?: SideNavItem[];
  };


export interface pdfDetails {
    base64Str : string | ArrayBuffer,
    pdf_name : string,
    mimeType : string
}

export interface pdfComparisonInputType{
    comparisonDoc : pdfDetails | null,
    masterDoc : pdfDetails | null
}

// export interface previousChat {
//     chatHeading : string
// }
export interface promptOpt {
    promptStr : string,
    isNotChecked : boolean
}

export interface promptResPair {
    prompt : string,
    pdfData ?: pdfDetails[] | null | undefined,
    response : string
}
export interface searchInputType {
    pdfData ?: pdfDetails,
    input ?: string
}
// 
export interface contractDetails{
    pdf_data : File,
    pdf_name : string,
    mimeType : string
}

export interface contractDetails1{
    base64Str : string | ArrayBuffer,
    pdf_name : string,
    mimeType : string
}

export interface AuthoringResponsePair{
    user : string,
    ai : string
}
export interface SummarisationResponsePair{
    user : string,
    contractData : contractDetails | null,
    ai : string
}