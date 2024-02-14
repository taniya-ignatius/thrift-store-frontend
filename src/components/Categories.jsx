import React from 'react'

const Categories = () => {
    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
                            <img src="https://i.pinimg.com/originals/1d/4e/c9/1d4ec91b7a6f3a8a627fda526cfc09ee.gif" height="250px" width="250px" alt="..."/>
                                <div class="card-body">
                                   <center><h4 class="card-title">HORROR</h4></center> 
                                   <center> <a href="#" class="btn btn-primary">EXPLORE</a></center>
                                </div>
                        </div>
                    </div>
                    <div className="col col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                    <div className="col col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                    <div className="col col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Categories