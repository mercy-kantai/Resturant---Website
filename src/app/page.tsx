import Image from "next/image";
import Navbar from "./components";

export default function Home() {
  return (
    <main>
      <Navbar/>
         <div className="text-1xl">
        <div className="flex bg-[#FFF9EF] items-center p-8">
       <div className="flex-1 ml-[8%] mt-[6%] mr-[5%]">
       <h1 className="font-bold text-7xl leading-tight font-sans">Enjoy Delicious</h1>
       <h1 className="font-bold text-7xl leading-tight font-sans">
      Food in <span className="text-[#FFC624] font-sans">Healthy Life</span>
      </h1>
      <p className="w-8/12 text-lg mt-10 text-2xl font-sans">
      Tandoori masala is an Indian spice blend consisting of a variety of spices.
      Tandoori masala is an Indian spice blend consisting of a variety of spices.
      </p>
      <button className="mt-10 bg-[#FFC624] text-white w-[200px] h-[65px] text-[25px] rounded-lg font-mono">
      ORDER NOW
      </button>
     </div>
      <div className="flex-1">
    <img src="/images/delicious.png" className="ml-auto mr-[8%]" />
    </div>
   </div>



      <div className="text-center font-bold mt-40">
        <p className="font-curly-bold">Online store</p>
        <h3 className="font-bold text-6xl mt-8">Popular Foods</h3>
      </div>
      <div className="flex justify-center mt-[150px] gap-40 mb-10">
  <div className="text-center">
    <img src="/images/chicken_in.png" className="mx-auto"/>
    <h1 className="mt-5 text-4xl font-sans">Fruit dish</h1>
    <p className="mt-6 font-sans">Dinko Food</p>
    <p className="mt-6 ">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="mt-8 bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[15px] rounded-lg font-sans">Add to Cart  $696</button>
  </div>
  <div className="text-center">
    <img src="/images/chips.png" className="mx-auto"/>
    <h1 className="mt-5 text-4xl font-sans">Fruit dish</h1>
    <p className="mt-6 font-sans">Dinko Food</p>
    <p className="mt-6">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="mt-8 bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[15px] rounded-lg font-sans">Add to Cart $696</button>
  </div>
  <div className="text-center">
    <img src="/images/nyama.png" className="mx-auto"/>
    <h1 className="mt-5 text-4xl font-sans">Sea fish dish</h1>
    <p className="mt-6 font-sans">Dinko Food</p>
    <p className="mt-6">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="mt-8 bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[15px] rounded-lg font-sans">Add to Cart $696</button>
  </div>
  <div className="text-center">
    <img src="/images/pizza.png" className="mx-auto rounded-full"/>
    <h1 className="mt-5 text-4xl font-sans">Sea fish dish</h1>
    <p className="mt-6 font-sans">Dinko Food</p>
    <p className="mt-6">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="mt-8 bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-[15px] rounded-lg font-sans">Add to Cart $696</button>
  </div>
</div>

<div className="bg-[#FFF9EF] mt-60">
  <div className="flex items-center ml-60 gap-40">
    <div className=" flex-col justify-center space-y-6">
      <div className="flex items-center space-x-2">
        <div className="bg-yellow-500 text-white px-2 py-1 rounded">-50%</div>
      </div>
      <h1 className="font-bold text-6xl font-sans">Our Special Offer</h1>
      <p className="max-w-lg font-sans text-2xl">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
      <button className="mt-8 bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[60px] text-2xl rounded-lg font-sans">See All Menu</button>
     
    </div>
    <div className="relative ml-80 mt-10">
      <img src="/images/chipo.jpeg" alt="Food Image" className="rounded-full shadow-lg w-80"/>
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
        <img src="/images/lady.jpg" alt="User 1" className="w-10 h-10 rounded-full"/>
        <div className="mt-2">
          <p className="font-bold font-sans">Cristio Maria</p>
          <p className="text-sm font-sans">Healthy and delicious pizza</p>
          <div className="flex space-x-1 mt-1">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
        <img src="/images/lady.jpg" alt="User 2" className="w-10 h-10 rounded-full"/>
        <div className="mt-2">
          <p className="font-bold font-sans">Srah Ali Khan</p>
          <p className="text-sm font-sans">Healthy and delicious pizza</p>
          <div className="flex space-x-1 mt-1">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>



      <div className="text-center mt-60">
        <p className="text-2xl font-sans mt-8">Quality Food</p>
        <h1 className="font-bold text-6xl font-sans">Get The Best Offers</h1>
        <p className="text-center mx-auto max-w-prose leading-relaxed text-2xl mt-10 font-sans">The food at your doorstep.Why starve when you have us.You hunger partner.Straight out of the oven to your doorstep</p>
      </div>
      <div className="flex ml-60 gap-40 mr-60 mt-40">
      <div className="flex ">
        <div >
          <h1 className="text-bold text-3xl font-mono">Any day offer</h1>
          <p className="text-2xl font-mono">New Phenomena Burger Taste</p>
          <p className="text-2xl text-[#FFC624] font-mono">$12.90</p>
        </div>
        <div className="text-center">
          <img src="/images/humberger.jpeg"className=""/>
        </div>
      </div>
      <div className="flex">
      <div  className="">
          <h1 className="text-3xl text-bold font-mono">Other flavors</h1>
          <p className="text-2xl font-mono">Save room We made salats</p>
          <p className="text-2xl text-[#FFC624] font-mono">$12.90</p>
        </div>
        <div className="">
          <img src="/images/salad.jpeg"className=""/>
        </div>
      </div>
      <div className="flex">
      <div>
        <h1 className="text-3xl text-bold font-mono">Find a poco store near you</h1>
      </div>
      <div>
        <img src="/images/location.jpeg"/>
      </div>
      </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-6xl mt-60">Our Service</h1>
      </div>

      <div className="flex ml-60 gap-80 mt-40 mr-60">
  <div className="flex flex-col items-center text-center">
    <img src="/images/resturant.png" className="w-45 h-30 object-cover mb-2" alt="55+ Restaurants"/>
    <h1 className="text-lg font-semibold">55+ Restaurants</h1>
  </div>
  <div className="flex flex-col items-center text-center">
    <img src="/images/quality.png" className="w-42 h-33 object-cover mb-2" alt="Good Quality"/>
    <h1 className="text-lg font-semibold">Good Quality</h1>
  </div>
  <div className="flex flex-col items-center text-center">
    <img src="/images/discount.png" className="w-42 h-35 object-cover mb-2" alt="Discount System"/>
    <h1 className="text-lg font-semibold">Discount System</h1>
  </div>
  <div className="flex flex-col items-center text-center">
    <img src="/images/delivery.png" className="w-45 h-37 object-cover mb-2" alt="Fast Delivery"/>
    <h1 className="text-lg font-semibold">Fast Delivery</h1>
  </div>
</div>

      <div className="text-center mt-40">
        <p className="text-center text-bold text-2xl">Testimonials</p>
        <h1 className="font-bold text-5xl">What Our Clients Say</h1>
        <p className="text-center mx-auto max-w-prose leading-relaxed text-2xl">Lorem ipsum dolor sit amaet,consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation uliamco laboris nisi ut aliquip ex ea commodo</p>
      </div>

      <div className="flex pl-80 gap-10 mt-40 justify-center mr-32">
  <div className="flex items-center justify-center">
    <img src="/images/mitgan.png" className="w-32 h-32 object-cover rounded-full mb-2" alt="Mitgan"/>
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/kelly.png" className="w-32 h-32 object-cover rounded-full mb-2" alt="Kelly"/>
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/matej.png" className="w-32 h-32 object-cover rounded-full mb-2" alt="Matej"/>
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/david.png" className="w-32 h-32 object-cover rounded-full mb-2" alt="David"/>
  </div>
  <div className="flex items-center justify-center">
    <img src="/images/john.png" className="w-32 h-32 object-cover rounded-full mb-2" alt="John"/>
  </div>
</div>


      <div className="text-center mt-10">
        <p className="font-bold text-4xl">Mitchell Marsh</p>
        <p>CEO,Bexon Agency</p>
      </div>

      <div className="flex gap-60 ml-72 bg-[#FFF9EF] mt-60 ">
        <div>
          <img src="/images/myphone.jpeg"  className="w-60"/>
        </div>
        <div>
        <div>
          <p className=" font-bold text-3xl text-[#FFC624]">Download Our App</p>
          <h1 className="font-bold text-6xl mt-10">It's all here</h1>
          <h1 className="font-bold text-6xl mt-10">All in one app.</h1>
          <p className=" w-8/12 text-lg mt-10 text-2xl font-sans">Discover local,on-demand delivery or pickup from restauramts,nearly grocery and convenience stores,and more.</p>
          <button className="my-[60px] bg-black text-white min-w-[200px] min-h-[65px] text-[25px] rounded-lg mr-[60px]">App Store</button>
          <button className="my-[60px] bg-black text-white min-w-[200px] min-h-[65px] text-[25px] rounded-lg mr-[60px]">Google Play</button>
        </div>
        </div>
      </div>
      
      <div className="flex pl-60 bg-[#FFF9EF] mt-60 gap-60">
        <div>
          <p className="font-bold text-4xl">Subscribe Our Newsletter</p>
          <p>Subscribe on  our newsletter to get our news</p>
        </div>
        <div className="flex">
        <button className="ml-32 bg-white text-black min-w-[400px] min-h-[40px] text-[15px] rounded-lg mr-[30px]">Your Email Address</button>
          <button className=" ml-20 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Subscribe</button>
        </div>
      </div>
      <div className="flex pl-60 gap-60 bg-[#180606] text-white mt-20">
        <div>
          <div className="flex">
          <h1 className="font-bold text-4xl mt-20">FoodHouse</h1> <h3 className="xl-3 text-amber-500">.</h3>
          </div>
          <p className="w-60 mt-10">Best cooks and best delivery guys all at your service.Hot tasty food will reach you in 60minutes</p>
        </div>
        <div>
          <p className="font-bold text-4xl mt-20">Company</p>
          <p className="mt-10">Career</p>
          <p>About us</p>
          <p>Blog</p>
          <p>Press Info</p>
          <p>Features</p>
        </div>
        <div>
          <p className="font-bold text-4xl mt-20">Fudo</p>
          <p className="mt-10">Why Fudo</p>
          <p>How it works</p>
          <p>Why choose Us</p>
          <p> Client storie</p>
          <p>Gallery</p>
        </div>
        <div>
          <p className="font-bold text-4xl mt-20">Menu</p>
          <p className="mt-10">Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Fast Foods</p>
          <p>Drinks</p>
        </div>
      </div>
        </div>
     
    </main>
  );
}
