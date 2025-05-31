
class SpecialHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML =`
        <!-- Navbar Start -->
	<div class="container-fluid nav-bar bg-transparent">
	    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
	        <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
	            <img class="img-fluid" src="src/img/ayalalandpremier.jpg" alt="Icon" style="width: 250px; height: 30px;">
	        </a>
	        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
	            <span class="navbar-toggler-icon"></span>
	        </button>
	        <div class="collapse navbar-collapse" id="navbarCollapse">
	            <div class="navbar-nav ms-auto">
	                <a href="index.html" class="nav-item nav-link">Home</a>
	                <a href="about.html" class="nav-item nav-link">About</a>
	                <div class="nav-item dropdown">
					  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="dropdownLink">Property</a>
					  <div class="dropdown-menu rounded-0 m-0">
					    <a href="#" class="dropdown-item" onclick="loadPage('ParkCentralTowers.html')" data-value="ParkCentralTowers">Park Central Towers</a>
					    <a href="#" class="dropdown-item" onclick="loadPage('ArborLanes.html')" data-value="ArborLanes">Arbor Lanes</a>
					    <a href="#" class="dropdown-item" onclick="loadPage('GardencourtResidences.html')" data-value="GardencourtResidences">Property Agent</a>
					  </div>
					</div>
	                <div class="nav-item dropdown">
	                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
	                    <div class="dropdown-menu rounded-0 m-0">
	                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
	                        <a href="404.html" class="dropdown-item">404 Error</a>
	                    </div>
	                </div>
	                <a href="contact.html" class="nav-item nav-link">Contact</a>
	            </div>
	            <a href="" class="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
	        </div>
	    </nav>
	</div>
	        <!-- Navbar End -->
			`
		}
	}

	class SpecialFooter extends HTMLElement {
		connectedCallback() {
			this.innerHTML =`
				<!-- Footer Start -->
	        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
	            <div class="container py-5">
	                <div class="row g-5">
	                    <div class="col-lg-3 col-md-6">
	                        <h5 class="text-white mb-4">Get In Touch</h5>
	                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Roxas Triangle, Makati City</p>
	                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
	                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
	                        <div class="d-flex pt-2">
	                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
	                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
	                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
	                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
	                        </div>
	                    </div>
	                    <div class="col-lg-3 col-md-6">
	                        <h5 class="text-white mb-4">Quick Links</h5>
	                        <a class="btn btn-link text-white-50" href="">About Us</a>
	                        <a class="btn btn-link text-white-50" href="">Contact Us</a>
	                        <a class="btn btn-link text-white-50" href="">Our Services</a>
	                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
	                        <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
	                    </div>
	                    <div class="col-lg-3 col-md-6">
	                        <h5 class="text-white mb-4">Photo Gallery</h5>
	                        <div class="row g-2 pt-2">
	                            <div class="col-4">
	                                <img class="img-fluid rounded bg-light p-1" src="src/img/property-1.jpg" alt="">
	                            </div>
	                            <div class="col-4">
	                                <img class="img-fluid rounded bg-light p-1" src="src/img/property-2.jpg" alt="">
	                            </div>
	                            <div class="col-4">
	                                <img class="img-fluid rounded bg-light p-1" src="src/img/property-3.jpg" alt="">
	                            </div>
	                            <div class="col-4">
	                                <img class="img-fluid rounded bg-light p-1" src="src/img/property-4.jpg" alt="">
	                            </div>
	                            <div class="col-4">
	                                <img class="img-fluid rounded bg-light p-1" src="src/img/property-5.jpg" alt="">
	                            </div>
	                            <div class="col-4">
	                                <img class="img-fluid rounded bg-light p-1" src="src/img/property-6.jpg" alt="">
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-lg-3 col-md-6">
	                        <h5 class="text-white mb-4">Newsletter</h5>
	                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
	                        <div class="position-relative mx-auto" style="max-width: 400px;">
	                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
	                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="container">
	                <div class="copyright">
	                    <div class="row">
	                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
	                            &copy; <a class="border-bottom" href="#">AyalaLand Premier</a>, All Right Reserved. 
								
								<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
								Designed By <a class="border-bottom" href="#">AyalaLand Official Page</a>
	                        </div>
	                        <div class="col-md-6 text-center text-md-end">
	                            <div class="footer-menu">
	                                <a href="">Home</a>
	                                <a href="">Cookies</a>
	                                <a href="">Help</a>
	                                <a href="">FQAs</a>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
        <!-- Footer End -->

		`
	}
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

   