function propertyListModal(imageId) {
          const modal = document.getElementById("myModal");
          const modalTitle = document.getElementById("modalTitle")
          const modalContent = document.getElementById("modalContent");

          let imgHTML = "";
          let caption = "";
          let title = "";

          switch (imageId) {
            case 'img1':
                title =`<div class="modal-header">
                <h5 class="modal-title">Appartment</h5>`;
              imgHTML = `
                <span type="button" class="btn-close" onclick="closeModal()"></span>
              </div>
                  <div class="container-xxl py-2">
                    <div class="container">
                      <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow" data-wow-delay="0.1s">
                          <div class="about-img position-relative overflow-hidden p-5 pe-0">
                            <img class="img-fluid w-100" src="src/img/property-1.jpg">
                          </div>
                        </div>`;
              caption = `
                        <div class="col-lg-6 wow scroll-column" data-wow-delay="0.5s" style='margin-top: 10%;'>
                          <h6 class="mb-4">#1 Place To Find The Perfect Property</h6>
                          <p class="mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br><br> 

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </p>
                        </div>
                      </div>
                    </div>
                  </div>
            `;

              break;
            case 'img2':
              imgHTML = "<img src='img2.jpg' alt='Image 2' style='width: 100%;'>";
              caption = "<p>This is Image 2's modal.</p>";
              break;
            default:
              caption = "<p>Unknown image.</p>";
          }

          modalContent.innerHTML = `
            ${title}
            <span class="close" onclick="closeModal()"></span>
            ${imgHTML}
            ${caption}
          `;

          document.body.style.overflow = "hidden"; // Prevent background scroll
          modal.style.display = "block";
        }

        function closeModal() {
          document.getElementById("myModal").style.display = "none";
          document.body.style.overflow = ""; // Restore scroll
        }
         function myFunction(e) {
          e.preventDefault(); // Stops the refresh
          console.log("Link clicked, but no refresh!");
        }
