
// Arrays for counting jobs
let interviewList=[];
let rejectedList=[];
let currentView = 'all'; 
// ---------------


// Handles Interview, Reject, and Delete button actions--------------

const mainSection=document.querySelector('main');
mainSection.addEventListener('click',function(event){

if(event.target.classList.contains('interview')){
  const parent=event.target.parentNode.parentNode;

  const company=parent.querySelector('.company').innerText;
  const role=parent.querySelector('.role').innerText;
  const offer=parent.querySelector('.offer').innerText;
  const status=parent.querySelector('.status ').innerText;
  const  description=parent.querySelector('.description ').innerText;

  
  // Create Card Object
const cardInfo={
company,
role,
offer,
status:'Interview',
description
}




const companyExist = interviewList.find(item=> item.company==cardInfo.company)
parent.querySelector('.status').innerText='Interview'

if(!companyExist){
interviewList.push(cardInfo);
}

// Remove from rejected list -----------------------------------------------
rejectedList = rejectedList.filter(item => item.company !== cardInfo.company);

// Update the current view--------------------------------
if(currentView === 'interview'){
  dataInterview();
} else if(currentView === 'rejected'){
  dataReject();
}
calulateJob();
}
 else if(event.target.classList.contains('reject')){
      const parent=event.target.parentNode.parentNode;

  const company=parent.querySelector('.company').innerText;
  const role=parent.querySelector('.role').innerText;
  const offer=parent.querySelector('.offer').innerText;
  const status=parent.querySelector('.status ').innerText;
  const  description=parent.querySelector('.description ').innerText;

  
  // Create job object -----
const cardInfo={
company,
role,
offer,
status:'Rejected',
description
}
// -------------------



const companyExist = rejectedList.find(item=> item.company==cardInfo.company)
parent.querySelector('.status').innerText='Rejected'

if(!companyExist){
rejectedList.push(cardInfo);
}


interviewList = interviewList.filter(item => item.company !== cardInfo.company);

// Update the current view-------------------------------------------------------------------
if(currentView === 'interview'){
  dataInterview();
} else if(currentView === 'rejected'){
  dataReject();
}
calulateJob();  //count total job
}
 else if(event.target.classList.contains('delete-btn') || event.target.closest('.delete-btn')){

  const deleteBtn = event.target.closest('.delete-btn');
  if (!deleteBtn) return;
  
  const parent = deleteBtn.parentElement;
  const company = parent.querySelector('.company').innerText;
  
 
  interviewList = interviewList.filter(item => item.company !== company);
  rejectedList = rejectedList.filter(item => item.company !== company);
  

  if(currentView === 'interview'){
    dataInterview();
  } else if(currentView === 'rejected'){
    dataReject();
  } else if(currentView === 'all'){

    parent.remove();
    
    // if all jobs are deleted-
    if(job.children.length === 0){
      job.classList.add('hidden');
      noJobSection.classList.remove('hidden');
    }
  }
  calulateJob(); // Update all jobs cards sections
}

})
// --------------------------------------------------------------------

//Data rendering --------------------------------------------------------------------------
const filterSection=document.getElementById('filter-section');
const noJobSection=document.getElementById('no-job-section');

function dataInterview(){
  filterSection.innerHTML='';

  if(interviewList.length === 0){
    filterSection.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    return;
  }
  
  filterSection.classList.remove('hidden');
  noJobSection.classList.add('hidden');

  for(let interview of interviewList){
    console.log(interview);
    
    // create jobs dynamically by template literals
    let div=document.createElement('div');
    div.className='card-1 border-1 border-gray-100 bg-white py-8 px-5 space-y-3 rounded my-3 md:flex justify-between'
    div.innerHTML=`
            
     <div class="space-y-5  ">
       <div class="card-heading space-y-2">
        <h3 class="company  text-[#002C5C] text-2xl font-medium">${interview.company}</h3>
        <p class="role text-[#64748B] text-xl">${interview.role}</p>
       </div>
       <ul type="none" class="offer text-[#64748B] space-y-2 md:flex  gap-3">
         ${interview.offer}
       </ul>

       <div class="space-y-3">
        <p class="status bg-[#DCFCE7] text-[#10B981] max-w-[150px] text-center py-1 px-2 rounded">Interview</p>
        <p class="description">${interview.description}</p>
       </div>

       <div class="btn-2 flex gap-3">
         <button class="interview text-[#10B981] rounded py-1 px-2 border-1">Interview</button>
         <button class="reject text-[#EF4444] rounded py-1 px-2 border-1">Rejected</button>

       </div>

     

</div>
  <div class="delete-btn cursor-pointer"><img src="./Assets/delete.png "  alt=""></div>


    
    `
    filterSection.appendChild(div);
  }


}
function dataReject(){
  filterSection.innerHTML='';

  if(rejectedList.length === 0){
    filterSection.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    return;
  }
  
  filterSection.classList.remove('hidden');
  noJobSection.classList.add('hidden');

  for(let reject of rejectedList){
    console.log(reject);
    
    let div=document.createElement('div');
    div.className='card-1 border-1 border-gray-100 bg-white py-8 px-5 space-y-3 rounded my-3 md:flex justify-between'
    div.innerHTML=`
            
     <div class="space-y-5  ">
       <div class="card-heading space-y-2">
        <h3 class="company  text-[#002C5C] text-2xl font-medium">${reject.company}</h3>
        <p class="role text-[#64748B] text-xl">${reject.role}</p>
       </div>
       <ul type="none" class="offer text-[#64748B] space-y-2 md:flex  gap-3">
         ${reject.offer}
       </ul>

       <div class="space-y-3">
        <p class="status bg-[#FEE2E2] text-[#EF4444] max-w-[150px] text-center py-1 px-2 rounded">Rejected</p>
        <p class="description">${reject.description}</p>
       </div>

       <div class="btn-2 flex gap-3">
         <button class="interview text-[#10B981] rounded py-1 px-2 border-1">Interview</button>
         <button class="reject text-[#EF4444] rounded py-1 px-2 border-1">Rejected</button>

       </div>

     

</div>
  <div class="delete-btn cursor-pointer"><img src="./Assets/delete.png "  alt=""></div>

    `
    filterSection.appendChild(div);
  }
}
// -----------------------------------------------------------------------------------------------



// Total card count-----------------------------------
let Total=document.getElementById('Total');
let Interview=document.getElementById('Interview');
let Rejected=document.getElementById('Rejected');
let TotalJobs=document.getElementById('TotalJobs');
const job=document.getElementById('All-card')


function calulateJob(){
Total.innerText=job.children.length;
Interview.innerText=interviewList.length;
Rejected.innerText=rejectedList.length;
if (TotalJobs) {
  TotalJobs.innerText = job.children.length;
}

}  
calulateJob()
// -----------------------------------------------------









// button toggle----------------------------------
function filter(id){
    const allbtn=document.getElementById('all-btn');
    const Interbtn=document.getElementById('inter-btn');
    const rejectbtn=document.getElementById('reject-btn');



   allbtn.classList.remove('bg-[#3B82F6]', 'text-white');
   Interbtn.classList.remove('bg-[#3B82F6]', 'text-white');
   rejectbtn.classList.remove('bg-[#3B82F6]', 'text-white');

   allbtn.classList.add('bg-white', 'text-[#64748B]');
   Interbtn.classList.add('bg-white', 'text-[#64748B]');
   rejectbtn.classList.add('bg-white', 'text-[#64748B]');



const btnColor=document.getElementById(id);
btnColor.classList.remove('bg-white', 'text-[#64748B]');
btnColor.classList.add('bg-[#3B82F6]', 'text-white');


if(id=='inter-btn'){
  currentView = 'interview';
  job.classList.add('hidden');
  dataInterview();
}
else if(id=='all-btn'){
  currentView = 'all';
  filterSection.classList.add('hidden');
  
  if(job.children.length === 0){
    job.classList.add('hidden');
    noJobSection.classList.remove('hidden');
  } else {
    job.classList.remove('hidden');
    noJobSection.classList.add('hidden');
  }

}
else if(id=='reject-btn'){
  currentView = 'rejected';
  job.classList.add('hidden');
  dataReject();
}



}
//-------------------------------------------------