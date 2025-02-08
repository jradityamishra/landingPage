import globeImage from '../public/Group_133.png';
const Contact = () => {
    return (
        <>
         <section className="container pt-16 mx-auto px-4 mb-16 grid md:grid-cols-2 gap-12 mt-40">  
         <div className="relative">
           <div className="absolute inset-0 opacity-10">
           <img src={globeImage} alt="Globe" className="w-full h-full object-cover text-white" />
           </div>
          
         </div>
        <div >
        <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
             <p className="text-gray-400 mb-8">
               A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem
             </p>
           </div>
           <form className="space-y-4">
           <input
             type="email"
             placeholder="Your Email"
             className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
           />
           <input
             type="text"
             placeholder="Name"
             className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
           />
           <textarea
             placeholder="Message"
             rows={4}
             className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
           />
           <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
             Send Message
           </button>
         </form>
            </div> 
         
       </section>
        </>
    );
};
export default Contact;