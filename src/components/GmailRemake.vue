<template>
  <div class="bg-white py-4">

    <!-- The top menu with the search and notificatin icons -->
   <div class="flex justify-between items-center border-b-2 border-grey-lighter py-2">
     <!-- logo + search bar -->
     <div class="flex items-center">
       <div class="w-64 flex justify-center">
         <img src="/static/gmail_logo.png" alt="">
       </div>
       <div class="bg-grey-lightest border-2 border-grey-lighter py-2 px-4 rounded flex justify-between">
         <input type="text" class="bg-grey-lightest w-64" placeholder="Search mail">
         <i class="material-icons">search</i>
       </div>
     </div>

     <!-- apps + notifications + profile -->
     <div class="flex items-center pr-8">
       <i class="material-icons mr-4">apps</i>
       <i class="material-icons mr-4">notifications</i>
       <img class="rounded-full bg-red h-12 w-12" src="https://avatars1.githubusercontent.com/u/13519184?s=460&v=4">
     </div>
   </div>


   <!-- The main body -->
   <div class="flex">
    <div class="w-64 border-r-2 border-grey-lighter h-screen pb-4">
      <div class=" pl-8 py-4">
        <button class="bg-red shadow text-white rounded-full px-6 py-3 uppercase tracking-wide">Compose</button>
      </div>
      <div class="flex items-center pl-8 text-red border-l-2 border-red py-2">
        <i class="material-icons mr-2">inbox</i> Inbox(1)
      </div>
      <div class="flex items-center pl-8 py-2">
        <i class="material-icons mr-2">star</i> Starred
      </div>
      <div class="flex items-center pl-8 py-2">
        <i class="material-icons mr-2">access_time</i> Snoozed
      </div>
      <div class="flex items-center pl-8 py-2">
        <i class="material-icons mr-2">label</i> Important
      </div>
      <div class="flex items-center pl-8 py-2">
        <i class="material-icons mr-2">send</i> Sent Mail
      </div>

      <div class="w-full border-b-2 border-grey-lighter my-4"></div>

      <div class="flex items-center pl-8 py-2">
        <i class="material-icons text-orange mr-2">label</i> Clients
      </div>
      <div class="flex items-center text-blue pl-8 py-2">
        <i class="material-icons mr-2">label</i> Expenses
      </div>
      <div class="flex items-center text-green pl-8 py-2">
        <i class="material-icons mr-2">label</i> Report
      </div>
      <div class="flex items-center text-red pl-8 py-2">
        <i class="material-icons mr-2">label</i> Team
      </div>
      <div class="flex items-center text-black pl-8 py-2">
        <i class="material-icons mr-2">label</i> Travel
      </div>
      <div class="flex items-center pl-8 py-2">
        <i class="material-icons mr-2">keyboard_arrow_down</i> More
      </div>
    </div>

    <!-- The inbox view -->
    <div class="flex-1 bg-white">
      <div class="flex justify-between border-b-2 border-grey-lighter  py-3 px-8">
       
        <!-- the refresh buttons -->
        <div class="flex items-center">
          <buttons class="flex items-center border rounded p-1 bg-grey-lightest mr-2">
            <input type="checkbox">
            <i class="material-icons">keyboard_arrow_down</i></buttons>
          <buttons class="flex items-center border rounded p-1 bg-grey-lightest mr-2"><i class="material-icons">refresh</i></buttons>
          <buttons class="flex items-center border rounded p-1 bg-grey-lightest"><i class="material-icons">more_vert</i></buttons>
        </div>

        <!--  and pagination -->
        <div class="flex items-center">
          <buttons class="flex items-center border rounded p-1 bg-grey-lightest mr-2"><i class="material-icons">keyboard_arrow_left</i></buttons>
          <span class="mr-2">1 - 07 of 455</span>
          <buttons class="flex items-center border rounded p-1 bg-grey-lightest mr-2"><i class="material-icons">keyboard_arrow_right</i></buttons>
          <buttons class="flex items-center rounded p-1 bg-black mr-2"><i class="material-icons text-white">settings</i></buttons>
        </div>
      </div>

      <!-- The message list -->
     <div class="flex justify-between border-b-2 border-grey-lighter py-1 px-8">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <i class="material-icons mr-4">star_border</i>
          <img class="rounded-full bg-grey-lightest-dark flex items-center text-white h-12 w-12 mr-4" src="https://avatars1.githubusercontent.com/u/13519184?s=460&v=4">
          <div>
            <div class="flex">
              <label class="text-lg font-bold mb-2">Kudakwashe Paradzayi</label><i class="material-icons text-red ml-2">label</i>
            </div>
            <p>
              Lorem ipsum dummy text for the printing
              <span class="text-grey ml-3">- May publishing applications an web editors now use</span>
            </p>
          </div>
        </div>
        
        <div class="p-8">03:15 AM</div>
      </div>

      <div class="flex justify-between border-b-2 border-grey-lighter  py-1 px-8">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <i class="material-icons mr-4">star_border</i>
          <img class="rounded-full bg-purple-dark flex items-center text-white h-12 w-12 mr-4" src="https://media.gettyimages.com/photos/beautiful-young-african-american-woman-smiling-picture-id531267313?b=1&k=6&m=531267313&s=612x612&w=0&h=QNlgGUbQMoHkwh_KDNLetXAj99R1bfwTp49l_TKW4uI=">
          <div>
            <div class="flex">
              <label class="text-lg font-bold mb-3">Shayleen</label><i class="material-icons text-grey-light ml-2">label</i>
            </div>
            <p>
              Lorem ipsum dummy text for the printing
              <span class="text-grey ml-3">- May publishing applications an web editors now use</span>
            </p>
          </div>
        </div>
        
        <div class="p-8">03:15 AM</div>
      </div>

      <div class="flex justify-between border-b-2 border-grey-lighter   py-1 px-8">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <i class="material-icons mr-4">star_border</i>
          <div class="rounded-full bg-blue-dark flex items-center text-white h-12 w-12 mr-4"><span class="ml-4">F</span></div>
          <div>
            <div class="flex">
              <label class="text-lg font-bold mb-3">Facebook</label><i class="material-icons text-orange ml-2">label</i>
            </div>
            <p>
              Lorem ipsum dummy text for the printing
              <span class="text-grey ml-3">- May publishing applications an web editors now use</span>
            </p>
          </div>
        </div>
        
        <div class="p-8">03:15 AM</div>
      </div>

      <div class="flex justify-between border-b-2 border-grey-lighter   py-1 px-8">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <i class="material-icons mr-4">star_border</i>
          <img class="rounded-full bg-purple-dark flex items-center text-white h-12 w-12 mr-4" src="https://thumb9.shutterstock.com/mosaic_250/1849259/575234476/stock-photo-good-looking-man-in-glasses-portrait-575234476.jpg">
          <div>
            <div class="flex">
              <label class="text-lg font-bold mb-3">Steven Branson</label><i class="material-icons text-orange ml-2">label</i>
            </div>
            <p>
              Lorem ipsum dummy text for the printing
              <span class="text-grey ml-3">- May publishing applications an web editors now use</span>
            </p>
          </div>
        </div>
        
        <div class="p-8">03:15 AM</div>
      </div>

      <div class="flex justify-between border-b-2 border-grey-lighter   py-1 px-8">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <i class="material-icons mr-4">star_border</i>
          <div class="rounded-full bg-red-dark flex items-center text-white h-12 w-12 mr-4"><span class="ml-4">G</span></div>
          <div>
            <div class="flex">
              <label class="text-lg font-bold mb-3">Gmail</label><i class="material-icons text-grey-light ml-2">label</i>
            </div>
            <p>
              Lorem ipsum dummy text for the printing
              <span class="text-grey ml-3">- May publishing applications an web editors now use</span>
            </p>
          </div>
        </div>
        
        <div class="p-8">03:15 AM</div>
      </div>

      <div class="flex justify-between border-b-2 border-grey-lighter   py-1 px-8">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2">
          <i class="material-icons mr-4">star_border</i>
          <img class="rounded-full bg-green-dark flex items-center text-white h-12 w-12 mr-4" src="https://avatars2.githubusercontent.com/u/30317862?s=400&v=4">
          <div>
            <div class="flex">
              <label class="text-lg font-bold mb-3">Tailwind css</label><i class="material-icons text-red ml-2">label</i>
            </div>
            <p>
              Lorem ipsum dummy text for the printing
              <span class="text-grey ml-3">- May publishing applications an web editors now use</span>
            </p>
          </div>
        </div>
        
        <div class="p-8">03:15 AM</div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
