import React, { useState } from "react";
// Assuming these components are from shadcn/ui or a similar library
// Make sure these paths are correct for your project structure
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
 
// Using standard <img> tag
// Define the HomePage component
export default function HomePage() {
 // State for the Contact Form
 const [contactForm, setContactForm] = useState({
   name: "",
   email: "",
   message: "",
 });
 
 // State for the Newsletter Subscription Form
 const [newsletterEmail, setNewsletterEmail] = useState("");
 
 // Handles changes in the contact form input fields
 const handleContactChange = (e) => {
   const { name, value } = e.target;
   setContactForm((prevFormState) => ({
     ...prevFormState,
     [name]: value,
   }));
 };
 
 // Handles the submission of the contact form
 const handleContactSubmit = (e) => {
   e.preventDefault(); // Prevent default form submission behavior
   // TODO: Replace console.log with actual API call to submit form data
   console.log("Contact Form Data:", contactForm);
   // Show a placeholder confirmation message
   alert("Thank you for your message! We'll be in touch soon. (Placeholder)");
   // Reset the form fields
   setContactForm({ name: "", email: "", message: "" });
 };
 
 // Handles the submission of the newsletter subscription form
 const handleNewsletterSubmit = (e) => {
   e.preventDefault(); // Prevent default form submission behavior
   // TODO: Replace console.log with actual API call to subscribe email
   console.log("Newsletter Subscription Email:", newsletterEmail);
   // Show a placeholder confirmation message
   alert(`Thank you for subscribing with ${newsletterEmail}! (Placeholder)`);
   // Reset the email field
   setNewsletterEmail("");
 };
 
 // Placeholder URLs for images
 const logoUrl = "https://placehold.co/180x50/1E3A8A/FFFFFF?text=EquiCore+Nexus&font=raleway";
 const heroBgUrl = "https://placehold.co/1920x1080/2D3748/E2E8F0?text=Financial+Strategy+Visualization";
 const serviceIcons = {
   deal: "https://placehold.co/64x64/3B82F6/FFFFFF?text=M%26A&font=fontawesome",
   model: "https://placehold.co/64x64/3B82F6/FFFFFF?text=Model&font=fontawesome",
   investor: "https://placehold.co/64x64/3B82F6/FFFFFF?text=Invest&font=fontawesome",
 };
 const projectImages = {
   evModel: "https://placehold.co/600x400/A0AEC0/FFFFFF?text=EV+Leasing+Project",
   hotel: "https://placehold.co/600x400/A0AEC0/FFFFFF?text=Hotel+Investment+Project",
 };
 const blogImagePlaceholder = "https://placehold.co/600x350/CBD5E0/FFFFFF?text=Blog+Insight";
 
 
 return (
   <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
     {/* Header Section */}
     <header className="bg-white shadow-lg p-5 sticky top-0 z-50">
       <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
         <div className="flex items-center space-x-3 mb-4 sm:mb-0">
           <img src={logoUrl} alt="EquiCore Nexus Logo" style={{height: '40px', width: 'auto'}} />
         </div>
         <nav className="space-x-5 text-sm sm:text-base">
           <a href="#about" className="text-slate-600 hover:text-blue-700 transition-colors duration-300 font-medium">About</a>
           <a href="#services" className="text-slate-600 hover:text-blue-700 transition-colors duration-300 font-medium">Services</a>
           <a href="#portfolio" className="text-slate-600 hover:text-blue-700 transition-colors duration-300 font-medium">Portfolio</a>
           <a href="#feedback" className="text-slate-600 hover:text-blue-700 transition-colors duration-300 font-medium">Testimonials</a>
           <a href="#blog" className="text-slate-600 hover:text-blue-700 transition-colors duration-300 font-medium">Blog</a>
           <a href="#contact" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 text-sm font-medium">Contact Us</a>
         </nav>
       </div>
     </header>
 
     {/* Hero Section */}
     <section
       id="hero"
       className="relative min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center py-20"
       style={{ backgroundImage: `url("${heroBgUrl}")` }}
       role="banner"
       aria-labelledby="hero-title"
     >
       <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
       <div className="relative z-10 text-white p-6 container mx-auto">
         <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
           Strategic Capital. <span className="text-blue-400">Intelligent Solutions.</span>
         </h1>
         <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-slate-200">
           EquiCore Nexus empowers your global investment decisions with expert advisory and bespoke capital solutions. We navigate complexity, you achieve growth.
         </p>
         <div>
           <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform duration-300 inline-block transform hover:scale-105">
             Explore Our Services
           </a>
         </div>
       </div>
     </section>
     
     {/* About / Who We Are Section */}
     <section id="about" className="py-16 sm:py-24 bg-white">
       <div className="container mx-auto px-6 text-center">
         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Pioneering Financial Strategies</h2>
         <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
           At EquiCore Nexus, we are dedicated to providing insightful financial advisory that drives success. Our expertise spans across critical financial domains, ensuring your objectives are met with precision and strategic foresight.
         </p>
          {/* This can be expanded or linked to a more detailed about page */}
       </div>
     </section>
 
     {/* Services Section (Evolved from old "About") */}
     <section id="services" className="py-16 sm:py-24 bg-slate-100">
       <div className="container mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Our Core Expertise</h2>
           <p className="text-lg text-slate-600 max-w-xl mx-auto">Tailored financial services designed to elevate your business.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
           <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
             <CardContent className="p-8 text-center">
               <img src={serviceIcons.deal} alt="M&A Advisory Icon" className="h-16 w-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
               <h3 className="text-2xl font-semibold text-slate-800 mb-3">M&A Advisory</h3>
               <p className="text-slate-600 leading-relaxed">Strategic guidance for mergers, acquisitions, and divestitures, executed with precision and deep market insight.</p>
             </CardContent>
           </Card>
           <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
             <CardContent className="p-8 text-center">
               <img src={serviceIcons.model} alt="Financial Modeling Icon" className="h-16 w-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
               <h3 className="text-2xl font-semibold text-slate-800 mb-3">Financial Modeling</h3>
               <p className="text-slate-600 leading-relaxed">Robust and dynamic financial models for valuation, fundraising, and strategic planning to forecast your success.</p>
             </CardContent>
           </Card>
           <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
             <CardContent className="p-8 text-center">
               <img src={serviceIcons.investor} alt="Investor Outreach Icon" className="h-16 w-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
               <h3 className="text-2xl font-semibold text-slate-800 mb-3">Investor Outreach</h3>
               <p className="text-slate-600 leading-relaxed">Connecting visionary clients with the right capital partners through strategic positioning and targeted outreach.</p>
             </CardContent>
           </Card>
         </div>
       </div>
     </section>
 
     {/* Portfolio Section */}
     <section id="portfolio" className="py-16 sm:py-24 bg-white">
       <div className="container mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Impactful Engagements</h2>
           <p className="text-lg text-slate-600 max-w-xl mx-auto">Showcasing our success in delivering tangible results for our clients.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
             <img src={projectImages.evModel} alt="EV Leasing Model Project Showcase" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
             <CardContent className="p-6">
               <h3 className="text-xl font-semibold text-slate-800 mb-2">EV Leasing Model - UAE</h3>
               <p className="text-slate-600 mb-4">Developed and scaled an innovative per-km revenue model for a pioneering electric vehicle fleet startup.</p>
               {/* <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">View Case Study &rarr;</Button> */}
             </CardContent>
           </Card>
           <Card className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
             <img src={projectImages.hotel} alt="4-Star Hotel Project Showcase" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
             <CardContent className="p-6">
               <h3 className="text-xl font-semibold text-slate-800 mb-2">4-Star Hotel Project - Kerala</h3>
               <p className="text-slate-600 mb-4">Structured comprehensive feasibility studies, financial projections, and investor presentations for a major hospitality expansion.</p>
               {/* <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">View Case Study &rarr;</Button> */}
             </CardContent>
           </Card>
         </div>
       </div>
     </section>
 
     {/* Testimonials Section */}
     <section id="feedback" className="py-16 sm:py-24 bg-blue-700 text-white">
       <div className="container mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold mb-3">Trusted by Leaders</h2>
           <p className="text-lg text-blue-200 max-w-xl mx-auto">Our clients' success stories are a testament to our commitment and expertise.</p>
         </div>
         <div className="grid md:grid-cols-2 gap-8">
           <Card className="bg-blue-600 p-8 rounded-xl shadow-xl">
             <CardContent className="p-0">
               <blockquote className="text-xl italic text-blue-100 mb-4">
                 “EquiCore Nexus’ analysis and modeling were spot on—instrumental in helping us secure $1M in seed funding. Their insights are invaluable.”
               </blockquote>
               <p className="font-semibold text-blue-50">– CEO, US Tech Startup</p>
             </CardContent>
           </Card>
           <Card className="bg-blue-600 p-8 rounded-xl shadow-xl">
             <CardContent className="p-0">
               <blockquote className="text-xl italic text-blue-100 mb-4">
                 “The incredible detail and strategic thinking in their M&A advisory work have made EquiCore Nexus our go-to finance partner.”
               </blockquote>
               <p className="font-semibold text-blue-50">– Managing Director, Global PE Firm</p>
             </CardContent>
           </Card>
         </div>
       </div>
     </section>
 
     {/* Blog Preview Section */}
     <section id="blog" className="py-16 sm:py-24 bg-slate-100">
       <div className="container mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Latest Financial Insights</h2>
           <p className="text-lg text-slate-600 max-w-xl mx-auto">Stay informed with our expert analysis on market trends and strategies.</p>
         </div>
         <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto"> {/* Simplified to one column for preview */}
           <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group flex flex-col md:flex-row">
             <img src={blogImagePlaceholder} alt="Blog post illustration" className="w-full md:w-1/3 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"/>
             <CardContent className="p-6 flex flex-col justify-center">
               <h3 className="text-xl font-semibold text-slate-800 mb-2">5 Red Flags in Early-Stage Fundraising</h3>
               <p className="text-slate-600 mb-4 text-sm">Knowing what to avoid can significantly improve your chances of closing better deals with smarter positioning.</p>
               <a href="/blog/5-red-flags" className="text-blue-600 hover:text-blue-700 font-semibold self-start group-hover:underline">Read More &rarr;</a>
             </CardContent>
           </Card>
           {/* Add more blog previews if needed, or a link to a full blog page */}
         </div>
         <div className="text-center mt-12">
           <Button variant="outline" asChild className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300 py-3 px-6 text-lg rounded-lg">
               <a href="/blog">View All Insights</a>
           </Button>
         </div>
       </div>
     </section>
     
     {/* Call to Action Section */}
     <section className="py-16 sm:py-24 bg-blue-800 text-white">
       <div className="container mx-auto px-6 text-center">
         <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Elevate Your Financial Strategy?</h2>
         <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
           Let's discuss how EquiCore Nexus can partner with you to achieve your most ambitious financial goals.
         </p>
         <a href="#contact" className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-slate-100 transition-colors duration-300 inline-block transform hover:scale-105">
           Get In Touch
         </a>
       </div>
     </section>
 
 
     {/* Contact Form Section */}
     <section id="contact" className="py-16 sm:py-24 bg-slate-50">
       <div className="container mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Let’s Connect</h2>
           <p className="text-lg text-slate-600 max-w-xl mx-auto">We're here to answer your questions and explore opportunities.</p>
         </div>
         <form onSubmit={handleContactSubmit} className="space-y-6 max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
           <div>
             <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
             <Input
               id="name"
               name="name"
               placeholder="e.g. Jane Doe"
               value={contactForm.name}
               onChange={handleContactChange}
               required
               className="w-full text-base p-3 rounded-lg border-slate-300 focus:ring-blue-500 focus:border-blue-500"
             />
           </div>
           <div>
             <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
             <Input
               id="email"
               name="email"
               type="email"
               placeholder="e.g. jane.doe@example.com"
               value={contactForm.email}
               onChange={handleContactChange}
               required
               className="w-full text-base p-3 rounded-lg border-slate-300 focus:ring-blue-500 focus:border-blue-500"
             />
           </div>
           <div>
             <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
             <Textarea
               id="message"
               name="message"
               placeholder="How can we help you today?"
               value={contactForm.message}
               onChange={handleContactChange}
               required
               rows={5}
               className="w-full text-base p-3 rounded-lg border-slate-300 focus:ring-blue-500 focus:border-blue-500"
             />
           </div>
           <Button type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-800 text-lg py-3 rounded-lg font-semibold transition-colors duration-300">
             Send Message
           </Button>
         </form>
       </div>
     </section>
 
     {/* Newsletter Subscription Section */}
     <section className="py-16 bg-slate-200">
       <div className="container mx-auto px-6 text-center max-w-2xl">
         <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">Stay Ahead with EquiCore Insights</h3>
         <p className="mb-6 text-slate-600">Subscribe to our newsletter for monthly updates on deals, strategy, and financial trends.</p>
         <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
           <label htmlFor="newsletter-email" className="sr-only">Enter your email</label>
           <Input
             id="newsletter-email"
             type="email"
             placeholder="Your best email address"
             value={newsletterEmail}
             onChange={(e) => setNewsletterEmail(e.target.value)}
             required
             className="flex-grow text-base p-3 rounded-lg border-slate-300 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
           />
           <Button type="submit" className="bg-blue-700 text-white hover:bg-blue-800 text-lg py-3 px-6 rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto">
             Subscribe Now
           </Button>
         </form>
       </div>
     </section>
 
     {/* Chatbot Placeholder Button */}
     <div className="fixed bottom-6 right-6 z-40">
       <Button
           className="rounded-full shadow-xl bg-blue-700 text-white p-0 h-16 w-16 flex items-center justify-center text-3xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 hover:scale-110"
           aria-label="Chat with us"
           onClick={() => alert("Chatbot functionality to be implemented!")} // Placeholder action
       >
         💬
       </Button>
     </div>
 
     {/* Footer Section */}
     <footer className="text-center p-8 sm:p-12 text-sm text-slate-400 bg-slate-800">
       <div className="mb-4">
           <img src={logoUrl} alt="EquiCore Nexus Logo - Footer" style={{height: '30px', width: 'auto', margin: '0 auto 20px auto', filter: 'brightness(0) invert(1)'}} />
       </div>
       <div className="flex justify-center space-x-6 mb-6">
         <a href="https://linkedin.com/in/shubhamkansalca" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">LinkedIn</a>
         <a href="mailto:kansal.shubham@outlook.com" className="hover:text-blue-400 transition-colors duration-300">Email</a>
         <a href="tel:+919990080161" className="hover:text-blue-400 transition-colors duration-300">Phone</a>
       </div>
       <div className="mb-4 text-slate-500">© {new Date().getFullYear()} EquiCore Nexus. All rights reserved.</div>
       
       <div className="text-xs text-slate-500 max-w-3xl mx-auto space-y-2 mb-4">
         <p>
           This website and its content do not constitute a solicitation or offer to buy or sell securities. EquiCore Nexus is not a registered investment advisor or broker-dealer. All information provided herein is for informational purposes only and should not be construed as financial, legal, or tax advice.
         </p>
       </div>
       <div className="text-xs text-slate-500">
         <p className="mb-1">
           Developed by <a href="https://www.linkedin.com/in/shubhamkansalca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">Shubham Kansal</a> • Powered by React, Tailwind CSS.
         </p>
         <p>
           Website hosted by <a href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">GoDaddy</a>.
         </p>
       </div>
       <div className="mt-6 text-xs text-slate-500">
         <a href="/terms" className="underline hover:text-blue-400">Terms of Service</a> | <a href="/privacy" className="underline hover:text-blue-400 ml-2">Privacy Policy</a>
       </div>
     </footer>
   </div>
 );
}