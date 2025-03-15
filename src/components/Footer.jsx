import React from 'react'

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto py-8 px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-black">
   
              
            <div>
                <h3 className="font-semibold text-lg">About us</h3>
                <ul className="mt-2 space-y-1">
                    <li>Our Mission</li>
                    <li>How It Works</li>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Press & Media</li>
                    <li>Blog</li>
                </ul>
            </div>
            
       
            <div>
                <h3 class="font-semibold text-lg">Support</h3>
                <ul class="mt-2 space-y-1">
                    <li>Help Center</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                    <li>Community Guidelines</li>
                </ul>
            </div>
            
        
            <div>
                <h3 class="font-semibold text-lg">Legal</h3>
                <ul class="mt-2 space-y-1">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                    <li>Trust & Safety</li>
                    <li>Cookie Policy</li>
                    <li>Compliance</li>
                </ul>
            </div>
            
            <div>
                <h3 class="font-semibold text-lg">Discover</h3>
                <ul class="mt-2 space-y-1">
                    <li>Success Stories</li>
                    <li>Event & Webinars</li>
                    <li>Projects We Love</li>
                </ul>
            </div>
            
   
            <div>
                <h3 class="font-semibold text-lg">Follow us on</h3>
                <div class="mt-2 flex flex-col space-y-2">
                    <img src="linkedin.png" alt="LinkedIn" class="w-6 h-6"/>
                    <img src="./facebook-icon" alt="Facebook" class="w-6 h-6"/>
                    <img src="instagram.png" alt="Instagram" class="w-6 h-6"/>
                </div>
            </div>
        </div>
        
        <div class="border-t border-black mt-6 pt-4 text-center text-sm">
            <p>Copyright &copy; 2024, ComicVast.com. All rights reserved.</p>
                  </div>
           
    </footer>
  )
}

export default Footer
