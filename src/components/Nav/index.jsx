import React from 'react';
import './style.css'

function Navbar(){
    return(
      <nav class="navbar navbar-expand-md fixed-top navbar-dark">

        <a id='murphMan' class="navbar-brand" href="#"></a>
        <button class="burger-btn navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01"
            aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse justify-content-md-center" id="navbarsExample01">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="home nav-link float-right mr-2" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link float-right mr-2" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link float-right mr-2" href="#">About</a>
                </li>
                </ul>
        </div>
    </nav>



      //   <nav class="navbar navbar-expand-md fixed-top navbar-light ">
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
      //     <ul class="navbar-nav">
      //       <li class="nav-item active">
      //         <a class="home nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">About</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Projects</a>
      //       </li>
      //     </ul>
         
      //   </div>

      // </nav>
    )
}

export default Navbar;