import React from "react";
import MyNav from "../component/MyNav";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import {FiLink2} from "react-icons/fi"
import {BsQrCode} from "react-icons/bs"
import {BsCheck2Circle} from "react-icons/bs"
import {GiStickGrenade} from "react-icons/gi"
import BasicExample from "../component/BasicExample";
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import circle from "../assets/circle.png"
import inside from "../assets/in-side-box.png"
import {Logo} from "../assets/logo.png"


function Home (){
    return(
      <div >
        <MyNav/>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="main">
                <h1> Optimize Your Online Experience with Our Advanced <span className="blue-underline">URL Shortening</span> Solution</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
                  <div className="sub-main">
                      <h6>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</h6>
                  </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="btns">
                <button className="btn-1">Sign Up</button>
                <button className="btn-2">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="box">
                <div className="box1">

                </div>
                <div className="box2">
                  <div class="bracket-container">
                      <img src={inside} alt="" />
                  </div>
                  <div className="box2-word">
                    <h2>Seamlessly transform your long URLs into concise and shareable links with just few clicks.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="circle">
              <img src={circle} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
             <div className="main-2">
                <div className="one">
                  <h2>One Stop. <br /><span>Four Possibilities</span>.</h2>
                </div>
                <div className="two">
                  <h2>3M</h2>
                  <span> Active users</span>
                </div>
                <div className="two">
                  <h2>60M</h2>
                  <span>Links & QR <br /> codes created</span>
                </div>
                <div className="two">
                  <h2>1B</h2>
                  <span> Clicked & Scanned <br />connections</span>
                </div>
                <div className="two">
                  <h2>300K</h2>
                  <span> App Integrations</span>
                </div>
             </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="grid">
                <div className="grid-1">
                 <div className="grid-1-1">
                 <h1>Why choose <span>Scissors</span></h1>
                 </div>
                  <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p>
                </div>
                <div className="grid-2">
                 <div className="grid-2-2">
                 <div className="grid-2-1">
                  {<FiLink2 size={30} className="color"/>}
                  </div>
                 </div>
                 <div className="grid-2-3">
                 <h6>URL Shortening</h6>
                  <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                 </div>
                  
                </div>
                <div className="grid-2">
                 <div className="grid-2-2">
                 <div className="grid-2-1">
                  {<FiLink2 size={30} className="color"/>}
                  </div>
                 </div>
                  <h6>Custom URLs</h6>
                  <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                </div>
                <div className="grid-2">
                  
                </div>
                <div className="grid-2">
                 <div className="grid-2-2">
                 <div className="grid-2-1">
                  {<BsQrCode size={30} className="color"/>}
                  </div>
                 </div>
                  <h6>QR Codes</h6>
                  <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div className="grid-2">
                  <div className="grid-2-2">
                  <div className="grid-2-1">
                  {<FiLink2 size={30} className="color"/>}
                  </div>
                  </div>
                  <h6>Data Analytics</h6>
                  <p>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="sub">
                <h1>A <span> price perfect</span> for your needs.</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="sub-2">
                <p><p>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p></p>
                <br /><br />
              
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
                  <div className="box-main">
                    <div className="box-sub">
                      <h5>Basic</h5>
                      <h1>Free</h1>
                      <h2>Free plan for all users</h2>
                      <ul>
                        <li>Unlimited URL Shortening</li>
                        <li>Basic Link Analytics</li>
                        <li>Customizable Short Links</li>
                        <li>Standard Support</li>
                        <li>Ad-supported</li>
                      </ul>
                    </div>
                    <div className="box-sub">
                     <h5>Professional</h5>
                     <h1>$15/month</h1>
                     <h2>Ideal for business creators</h2>
                     <ul>
                        <li>Enhanced Link Analytics</li>
                        <li>Custom Branded Domains</li>
                        <li>Advanced Link Customization</li>
                        <li>Priority Support</li>
                        <li>Ad-free Experience</li>
                      </ul>
                    </div>
                    <div className="box-sub">
                      <h5>Teams</h5>
                      <h1>$25/month</h1>
                      <h2>Share with up to 10 users</h2>
                      <ul>
                        <li>Team Collaboration</li>
                        <li>User Roles and Permissions</li>
                        <li>Enhanced Security</li>
                        <li>API Access</li>
                        <li>Dedicated Account Manager</li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
            <div className="btns-2">
                <button className="btn-3">Get Custom Pricing</button>
                <button className="btn-4">Select Pricing</button>
              </div>
            </div>
          </div>
        </section>
        <div className="section4">
          <section>
            <div className="section2">
              <div className="section3">
              <div className="bx-container">
              <div className="bx">
                <input type="url" name="" id="url" required placeholder="Paste URL here..." />
                <div className="bx-2">
                <div className="bx2-1">
                <select  id="domain" type="text" name="Your country.." placeholder="Your country.." required>
                  <option value="Your Country..">Choose Your Domain</option>
                  <option value="Your Country..">Ghana</option>                                               <option value="Your Country..">Guinea</option>
                  <option value="Your Country..">Argentina</option>
                  <option value="Your Country..">Portugal</option>
                  <option value="Your Country..">Mali</option>
                  <option value="Your Country..">Brazil</option>                                                <option value="Your Country..">Morocco</option>
                </select>
                </div>
                <div className="bx-2-2">
                <input type="text" name="" id="alias" required placeholder="Type Alias here" />
                </div>
                </div>
                <button className="trim">Trim Url {<GiStickGrenade/>}</button>
                <p className="trin">By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use of Cookies.</p>
              </div>
              </div>
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="sub">
                <h3>FAQs</h3>  
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
              <div className="sub-4">
              <div className="basic">
              <BasicExample/> 
              </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section4">
          <section>
            <div className="section2">
              <div className="section3">
                <div className="sub">
                  <h4>Revolutionizing Link Optimization</h4>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section2">
              <div className="section3">
              <div className="sub-3">
                <button className="get">Get Started</button>
              </div>
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="section2">
            <div className="section3">
              <footer>
               <div className="cont-2">
               <div className="cont">
                  <img src={Logo}alt=""/>
                  <div className="cont-1">
                   <div className="cont-1-2">
                   {<AiOutlineTwitter className="max"/>}
                    {<AiOutlineInstagram className="max"/>}
                    {<AiFillLinkedin className="max" />}
                    {<AiFillFacebook className="max"/>}
                   </div>
                  </div>
                </div>
               </div>
                <div className="word-cont">
                  <h6>Why Scissor ?</h6>
                  <ul>
                    <li>Scissor 101</li>        
                    <li>Integrations & API</li>
                    <li>Pricing</li>
                  </ul>
                </div>
                <div className="word-cont">
                  <h6>Solutions</h6>
                  <ul>
                    <li> Social Media</li>        
                    <li>Digital Marketing</li>
                    <li>Customer Service</li>
                    <li>For Developers</li>
                  </ul>
                </div>
                <div className="word-cont">
                  <h6>Products</h6>
                  <ul>
                    <li>Link Management</li>        
                    <li>QR Codes</li>
                    <li>Link-in-bio</li>
                  </ul>
                </div>
                <div className="word-cont">
                  <h6>Company</h6>
                  <ul>
                    <li>About Scissor</li>        
                    <li>Careers</li>
                    <li>Partners</li>
                    <li>Press</li>
                    <li>Contact</li>
                    <li>Reviews</li>
                  </ul>
                </div>
                <div className="word-cont">
                 
                </div>
                <div className="word-cont">
                  <h6>Resources</h6>
                  <ul>
                    <li>Blog</li>        
                    <li>Resource Library</li>
                    <li>Developers</li>
                    <li>App Connectors</li>
                    <li>Support</li>
                    <li>Trust Center</li>
                    <li>Browser Extension</li>
                    <li>Mobile App</li>
                  </ul>
                </div>
                <div className="word-cont">
                  <h6>Features</h6>
                  <ul>
                  <li>Branded Links</li>        
                    <li>Mobile Links</li>
                    <li>Campaign</li>
                    <li>Management &</li>
                    <li>Analytics</li>
                    <li>QR Code generation</li>
                  </ul>
                </div>
                <div className="word-cont">
                  <h6>Legal</h6>
                  <ul>
                    <li>Privacy Policy</li>        
                    <li>Cookie Policy</li>
                    <li>Terms of Service</li>
                    <li>Acceptable Use Policy</li>
                    <li>Code of Conduct</li>
                  </ul>
                </div>
                <div className="word-cont">
                  
                </div>
              </footer>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <div className="section3">
            <div className="container">
            <div className="">
                  <div className="last">
                  <img src={Logo} alt=""/>
                  </div>
                  <br />
                  <br />
                    <div className="">
                    <div className="icon">
                    {<AiOutlineTwitter className="mase"/>}
                      {<AiOutlineInstagram className="mase"/>}
                      {<AiFillLinkedin className="mase" />}
                      {<AiFillFacebook className="mase"/>}
                    </div>
                    </div>
            </div>
          </div>
            </div>
          </div>
        </section>
      </div>
      
         
    )
}

export default Home