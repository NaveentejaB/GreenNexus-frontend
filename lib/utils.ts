import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { pdfDetails } from "./defintion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
  const fileReader = new FileReader();
 
  
  fileReader.readAsDataURL(file);

  fileReader.onload = () => {
      resolve(fileReader.result);
      console.log("fileReader",fileReader);
  };

  fileReader.onerror = (error) => {
      reject(error);
  };
  });
};

export const convertToString = (pdfDC: pdfDetails) => {
  const pdf = pdfDC.base64Str.toString();
  const res = pdf.replace("data:application/pdf;base64,", "")
  return res;
}