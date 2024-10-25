import React from 'react'

const ViewMedPost = () => {
  return (
    <div>
         <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 xl-12 col-xxl-12">
                                        <div class="card mb-3" >
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" class="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h1 class="card-title">{value.name}</h1>
                                                        <h1 class="card-title">{value.dob}</h1>
                                                        <h1 class="card-title">{value.gender}</h1>
                                                        <h1 class="card-title">{value.address}</h1>
                                                        <h1 class="card-title">{value.city}</h1>
                                                        <h1 class="card-title">{value.phone}</h1>
                                                        <h1 class="card-title">{value.email}</h1>
                                                        <h1 class="card-title">{value.medhistory}</h1>
                                                        <h1 class="card-title">{value.PostedDate}</h1>
                                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                        <p class="card-text"><small class="text-body-secondary">posted on{value.postedDate}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewMedPost