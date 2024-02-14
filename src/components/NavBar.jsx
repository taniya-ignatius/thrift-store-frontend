import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar bg-info ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src="https://classroomclipart.com/image/static7/preview2/one-open-book-with-plant-design-elements-55799.jpg" width="80" height="60" class="d-inline-block align-text-top"  /></a><b><h5><i>Book Thrift</i></h5></b>
                     
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#"><h5><i>Home</i></h5></a>
                            <a class="nav-link" href="#"><h5><i>Donate</i></h5></a>
                            <a class="nav-link" href="#"><h5><i>Login</i></h5></a>
                            <a class="nav-link" href="#"><h5><i>SignUp</i></h5></a>
                            <a class="nav-link" href="#"><h5><i>Cart</i></h5></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar