'use client'
import { getDatabase,ref,set } from "firebase/database";
import { useState } from "react";

interface userInputs{
  userId: string;
  name:string;
  email:string;
  imageUrl:string;
}

function writeUserData(userId:userInputs["userId"], name:userInputs["name"], email:userInputs["email"], imageUrl:userInputs["imageUrl"]) {
  const database= getDatabase();
  set(ref(database, 'users/'+userId),{
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

export default function SubmitButton(){
  const [IDvalue,IDsetValue]=useState('') 
  const [NAMEvalue,NAMEsetValue]=useState('')
  const [EMAILvalue,EMAILsetValue]=useState('')
  const [IMGvalue,IMGsetValue]=useState('')
  const [temp,setTemp] =useState({
    ID:[] as string[],
    NAME:[] as string[],
    EMAIL:[] as string[],
    IMG:[] as string[]
  });

const clearAll = ()=>{
  IDsetValue('')
  NAMEsetValue('')
  EMAILsetValue('')
  IMGsetValue('')

}
  return(
    <div className="max-w-sm p-6">

      <div 
        className=" overflow-auto border border-black p-2 rounded-md flex flex-col bg-slate-500 border-t-blue-800 border-l-blue-800 pt-4">
          <form className="border border-black p-2 rounded-md flex flex-col bg-slate-400 shadow-lg border-t-white border-l-white text-black">

            <input 
              placeholder="userID"
              className="rounded-md p-1 dark:text-white my-2"
              value={IDvalue} //needed as IDvalue gets cleared after Submitting. If we skip this line and submit the previous values remain
              onChange={(event)=>IDsetValue(event.target.value)}
              required
              /> <br/>
              
              <input
              placeholder="name"
              className="rounded-md p-1 dark:text-white my-2"
              value={NAMEvalue}
              onChange={(event)=>NAMEsetValue(event.target.value)}
              required
              /> <br/>

              <input
              placeholder="email"
              className="rounded-md p-1 dark:text-white my-2"
              value={EMAILvalue}
              onChange={(event)=>EMAILsetValue(event.target.value)}
              required/> <br/>

              <input
              placeholder="imgURL"
              className="rounded-md p-1 dark:text-white my-2"
              value={IMGvalue}
              onChange={(event)=>IMGsetValue(event.target.value)}
              required/> <br/>
              
              <button
              className="border border-black rounded-lg w-max p-1 self-center bg-slate-200"
              onClick={()=>{
                if (IDvalue!=""&&NAMEvalue!=""&&EMAILvalue!=""&&IMGvalue!="") {
                  setTemp({
                    ...temp,
                    ID:[...temp.ID,IDvalue],
                    NAME:[...temp.NAME,NAMEvalue],
                    EMAIL:[...temp.EMAIL,EMAILvalue],
                    IMG:[...temp.IMG,IMGvalue]///chad code
                  }); 
                  clearAll();
                } 
                else console.log("Empty form detected. :D");
                  
              }
              }>
                Submit {/*on the future perhaps replace this button with a submit form input and make it do some things in the backend. Doing so now would simply refresh the page and we wouldnt notice anything.*/}
                </button>

          </form>
      
      </div>
      <div className="border border-black  rounded-md p-1 bg-amber-300 dark:bg-amber-700 dark:bg-opacity-65 mt-6 text-black">
        <p className="text-center">
          The last info you submitted is: <br/>
          ID: {temp.ID[temp.ID.length-1]} <br/> 
          Name: {temp.NAME[temp.NAME.length-1]} <br/>
          Email: {temp.EMAIL[temp.EMAIL.length-1]} <br/>
          IMG: {temp.IMG[temp.IMG.length-1]} 
        </p>
      </div>
      <div className="border border-black  rounded-md p-1 bg-amber-300 dark:bg-amber-700 dark:bg-opacity-65 mt-6 text-black">
        <p className="text-center">
          All of the info you have submitted so far is: <br/>
          ID: {JSON.stringify(temp.ID)} <br/> 
          Name: {JSON.stringify(temp.NAME)} <br/>
          Email: {JSON.stringify(temp.EMAIL)} <br/>
          IMG: {JSON.stringify(temp.IMG)} 
        </p>
        <p className="text-center"> 
          This was especially hard to implement using React. :)
        </p>
      </div>


    </div>

  )

  

  
}