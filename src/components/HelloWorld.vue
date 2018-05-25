<template>
  <div>
    <!-- navigation area -->
    <div>
      <!-- primary navigation area -->
      <div class="bg-blue-dark">
        <div class="container mx-auto">
            <div class="px-4 flex sm:justify-between items-center py-4">
            <div class="w-1/4 sm:hidden">
              <i class="material-icons text-white">menu</i>
            </div>
      
            <div class="w-1/2 sm:w-auto text-center text-white text-2xl">
              Cointoad
            </div>
      
            <div class="w-1/4 sm:flex text-right">
              <img src="static/avatar.png" class="inline-block w-8 h-8 rounded-full" alt="">
              <div class="hidden sm:block sm:flex sm:items-center ml-2">
                <span class="text-white text-sm mr-1">Kudakwashe Paradzayi</span>
                <i class="material-icons text-white opacity-50">keyboard_arrow_down</i>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- secondary nav -->
      <div class="hidden sm:block bg-blue-dark sm:bg-white sm:border-b">
        <div class="sm:flex container mx-auto px-4">
          <div class="flex -mb-px mr-6">
            <a class="no-underline text-white sm:text-blue-dark flex item-center py-4 border-b border-blue-dark" href="#">
              <i class="material-icons w-4 h-4 mr-4">dashboard</i> <span class="mt-1">Dashboard</span>
            </a>
          </div>
  
          <div class="flex -mb-px mr-6">
            <a class="no-underline text-white opacity-50  sm:text-grey-dark sm:opacity-100 flex item-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-grey-dark" href="#">
              <i class="material-icons w-4 h-4 mr-4">swap_horiz</i> <span class="mt-1">Buy/Sell</span>
            </a>
          </div>
  
          <div class="flex -mb-px mr-6">
            <a class="no-underline text-white opacity-50  sm:text-grey-dark sm:opacity-100 flex item-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-grey-dark" href="#">
              <i class="material-icons w-4 h-4 mr-4">account_balance_wallet</i> <span class="mt-1">Accounts</span>
            </a>
          </div>
  
          <div class="flex -mb-px mr-6">
            <a class="no-underline text-white opacity-50  sm:text-grey-dark sm:opacity-100 flex item-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-grey-dark" href="#">
              <i class="material-icons w-4 h-4 mr-4">work</i> <span class="mt-1">Tools</span>
            </a>
          </div>
  
          <div class="flex -mb-px">
            <a class="no-underline text-white opacity-50  sm:text-grey-dark sm:opacity-100 flex item-center py-4 border-b border-transparent hover:opacity-100 sm:hover:border-grey-dark" href="#">
              <i class="material-icons w-2 h-2 mr-4">settings</i> <span class="mt-1">Settings</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto sm:px-4 pt-6 pb-8">
      <div class="bg-white border sm:rounded shadow mb-6">
        <div class="flex justify-between border-b px-6">
          <div class="md:hidden py-4 text-blue-dark text-lg">Price Charts</div>
          <div class="hidden md:flex currencies -my-px">
            <button type="button" class="py-4 text-blue-dark border-b border-blue-dark mr-6">
              Bitcoin &middot; ZIM$21,423.56
            </button>

            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6">
              Ethereum &middot; ZIM$889,335.64
            </button>

            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-6">
              Litecoin &middot; ZIM$201,893.01
            </button>
          </div>
          <div class="timeline flex text-sm -my-px">
            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
              1H
            </button>
            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
              1D
            </button>
            <button type="button" class="py-4 text-blue-dark border-b border-blue-dark hover:border-grey-dark mr-3">
              1W
            </button>
            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-4">
              1M
            </button>
            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark mr-3">
              1Y
            </button>
            <button type="button" class="py-4 text-grey-dark border-b border-transparent hover:border-grey-dark">
              ALL
            </button>

          </div>
        </div>

        <div class="flex md:hidden items-center px-6">
          <div class="flex-grow flex-no-shrink py-6">
              <div class="text-grey-darker ">
                <span class="text-xl align-top">ZIM$</span>
                <span class="text-3xl">21,423</span>
                <span class="text-xl align-top">.56</span>
              </div>
              <div>
              <span class="text-sm text-green-light mt-3">
                &uarr;
                ZIM$21,423.56 (90.23%)
              </span>
              </div>
          </div>
          <div class="flex-shrink w-32 inline-block relative">
            <select name="" id="" class="block appearance-none w-full bg-white border border-grey-hint hover:border-grey px-4 pr-8 py-2 rounded">
              <option value="">BTC</option>
              <option value="">ETH</option>
              <option value="">LTC</option>
            </select>

            <div class="pointer-events-none absolute flex pin-t pin-r items-center px-2 py-1 text-grey">
              <i class="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
        </div>

        <div class="hidden md:flex">
          <div class="w-1/3 text-center py-6">
            <div class="border-r">
              <div class="text-grey-darker ">
                <span class="text-3xl align-top">ZIM$</span>
                <span class="text-5xl">21,423</span>
                <span class="text-3xl align-top">.56</span>
              </div>
              <div class="uppercase text-grey-dark">Bitcoin price</div>
            </div>
          </div>

          <div class="w-1/3 text-center py-6">
            <div class="border-r">
              <div class="text-grey-darker ">
                <span class="text-3xl align-top"> <span class="text-green align-top">+</span> ZIM$</span>
                <span class="text-5xl">10,232</span>
                <span class="text-3xl align-top">.16</span>
              </div>
              <div class="uppercase text-grey-dark">Since last month (CAD)</div>
            </div>
          </div>

          <div class="w-1/3 text-center py-6">
            <div>
              <div class="text-grey-darker ">
                <span class="text-3xl align-top"><span class="text-green">+</span></span>
                <span class="text-5xl">90.23</span>
                <span class="text-3xl align-top">%</span>
              </div>
              <div class="uppercase text-grey-dark">Since last month (%)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4 flex flex-col">
          <div class="flex-grow flex flex-col bg-white border shadow w-full sm:rounded">
            <div class="flex justify-between items-center border-b px-6">
              <h3 class="text-blue text-lg font-normal align-center">Your portfolio</h3>
              <div class="-mb-px">
                <button class="py-4 border-b border-blue-dark text-blue-dark mr-3">List</button>
                <button class="py-4 border-b border-transparent text-grey hover:border-grey">Chart</button>
              </div>
            </div>

            <div class="flex-grow flex py-4 px-6 text-grey-darker text-lg items-center border-b">
              <div class="w-1/4 flex items-center">
                <div class="rounded-full bg-orange inline-flex p-2 mr-2">
                  <i class="material-icons text-white block">attach_money</i>
                </div>
                <span>Bitcoin</span>
              </div>
              <div class="w-1/4 flex items-center">
                <div class="bg-orange h-2 rounded-full flex-grow mr-2"></div>
                100%
              </div>
              <div class="w-1/4 text-right">
                0.00133 BTC
              </div>
              <div class="w-1/4 text-right text-grey">
                ZIM$21.23
              </div>
            </div>

            <div class="flex-grow flex py-4 px-6 text-grey-darker text-lg items-center border-b">
              <div class="w-1/4 flex items-center">
                <div class="rounded-full bg-blue-light inline-flex p-2 mr-2">
                  <i class="material-icons text-white block w-6 h-6 text-center">L</i>
                </div>
                <span>Litecoin</span>
              </div>
              <div class="w-1/4 flex items-center">
                <div class="bg-blue-light h-2 w-2 rounded-full mr-2"></div>
                0%
              </div>
              <div class="w-1/4 text-right">
                0 LTC
              </div>
              <div class="w-1/4 text-right text-grey">
                ZIM$0.00
              </div>
            </div>

            <div class="flex-grow flex py-4 px-6 text-grey-darker text-lg items-center border-b">
              <div class="w-1/4 flex items-center">
                <div class="rounded-full bg-indigo inline-flex p-2 mr-2">
                  <i class="material-icons text-white block">account_balance_wallet</i>
                </div>
                <span>Ethereum</span>
              </div>
              <div class="w-1/4 flex items-center">
                <div class="bg-indigo h-2 w-2 rounded-full mr-2"></div>
                0%
              </div>
              <div class="w-1/4 text-right">
                O ETH
              </div>
              <div class="w-1/4 text-right text-grey">
                ZIM$0.00
              </div>
            </div>

            <div class="py-4 text-center text-grey-dark">
              Total Balance &asymp; ZIM$21.23
            </div>
          </div>        
        </div>
        <div class="w-full md:w-1/2 px-4">
          <div class="bg-white border shadow w-full sm:rounded">
            <div class="flex justify-between items-center border-b px-6">
              <h3 class="text-blue text-lg py-4 font-normal align-center">Recent Activity</h3>
            </div>
            <div>
              <div class="text-center py-6 px-8">
                <div class="mb-4">
                    <i class="material-icons text-grey" style="font-size:70px">flight</i>
                </div>
                <p class="text-2xl font-medium text-grey-darker mb-4">
                  No buys of sells yet
                </p>
                <p class="text-grey-dark max-w-xs mx-auto">You've succesfully linked a payment method and can start buying digital currency</p>
              </div>

              <div class="flex justify-around mb-8">
                <button class="bg-blue-dark py-4 px-6 text-white rounded mx-auto">Buy now</button>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
