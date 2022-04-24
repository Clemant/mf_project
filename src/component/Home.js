import home_data from "../data/data_home"
const Home =()=>{
    return (
        <div className="App">
           {/** Attention */}

<p className="title">Mariage et Bapteme</p>
    <div className="section_slide" uk-slider="autoplay:true; pause-on-hover:true">

    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
            <li>
                <div className="">
                    <div className="uk-">

                        <figure>
                         <img className="default_img" src="https://picsum.photos/700/400?random" width="200" height="1200" alt=""/>
                        </figure>
                       
                    </div>
                   
                </div>
            </li>
             <li>
                <div className="">
                    <div className="uk-">

                        <figure>

                        <img className="default_img" src="https://picsum.photos/700/300" width="200" height="1200" alt=""/>
                        </figure>
                    </div>
                   
                </div>
            </li>
             <li>
                <div className="">
                    <div className="uk-">

                        <figure>
                     <img className="default_img" src="https://picsum.photos/700/400?grayscale" width="200" height="1200" alt=""/>
                        </figure>
                       
                    </div>
                   
                </div>
            </li>
             <li>
                <div className="">
                    <div className="uk-">

                        <figure>
                         <img className="default_img" src="https://picsum.photos/300/400?random" width="200" height="1200" alt=""/>
                        </figure>
                       
                    </div>
                   
                </div>
            </li>
          
        </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next">Suiv.</a>

    </div>

    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>


        </div>
    )
}

export default Home;