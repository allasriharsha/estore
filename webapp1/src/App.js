
import ActionAreaCard from './ActionAreaCard';
function App() {
  return (
    <div className="Content bg-dark fg-white">
      <header className="Content-header">


<div class="p-20">


          <div class="row " >
                  <div class="cell-6 px-40"><div>
                  <h1 class="text-center">BlueNest Soft Inc</h1>
               <h3 class="text-center">Managed Cloud Service Provider</h3>
              <div class="text-center"> <img src="Assets/logomain.png" width="60%"/></div>

                  <h1>Welcome !</h1>
                  <p>
                  Welcome to Bluenest Soft, your trusted partner for cutting-edge managed cloud services.
                  We specialize in delivering scalable, secure, and reliable cloud solutions tailored to meet the unique needs of your business.

                  </p>
                  <div class="pt-10"><button class="button primary default rounded">Get Started</button></div>
                  </div></div>






                  <div class="cell-6">
                  <div class="h-100 bg-white fg-dark win-shadow border bd-default">


                  <h2 class="text-light p-10">Login to service</h2>
                  <div data-role="cube"></div>

                  <form class="login-form bg-white p-6 mx-auto  "
                         data-role="validator"
                         action="javascript:"
                         data-clear-invalid="2000"
                         data-on-error-form="invalidForm"
                         data-on-validate-form="validateForm">
                       <span class="mif-vpn-lock mif-4x place-right" ></span>


                       <hr class="thin mt-4 mb-4 bg-white"/>
                       <div class="form-group">
                           <input type="text" data-role="input" data-prepend="<span class='mif-envelop'>" placeholder="Enter your email..." data-validate="required email" />
                       </div>

                       <div class="form-group">
                           <input type="password" data-role="input" data-prepend="<span class='mif-key'>" placeholder="Enter your password..." data-validate="required minlength=6" />
                       </div>

                       <div class="form-group mt-10">
                           <input type="checkbox" data-role="checkbox" data-caption="Remember me" class="place-right" />
                           <button class="button">Login</button>
                       </div>
                   </form>

                   </div>


                  <div></div></div>

              </div>


</div>

      </header>

    </div>



  );
}

export default App;
