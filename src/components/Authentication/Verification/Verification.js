import React from 'react';
import chilliChicken from '../../../images/LoginPage/kisspng-chilli-chicken-chicken-nugget-chili-pepper-free-spicy-shredded-chicken-pull-png-image-5a694f269b66d3 1.png';
import friedChicken from '../../../images/LoginPage/PngJoy_kfc-bucket-crispy-fried-chicken-png-download_9851047 1.png';
import salad from '../../../images/LoginPage/IMGBIN_greek-salad-vegetable-greek-cuisine-stock-photography-png_CeXLnZBK 1.png';
import kfcChicken from '../../../images/LoginPage/PngJoy_kfc-chicken-kfc-fried-chicken-png-png-download_7322209 2.png';

const Verification = () => {
    return (
        <div className="backgroundStyle text-white">
            <img src={kfcChicken} className="kfcChicken" alt=""/>
            <img src={salad} className="salad" alt=""/>
            <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-8 col-sm-8 col-md-5 col-lg-5 col-xl-5 pt-5">
                    <h4 className="text-center mb-5">Verification</h4>
                    <form className="mt-3">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter verification code</label>
                            <input type="email" className="form-control inputBox" id="exampleInputEmail1" placeholder="Check your email & enter the code" />
                        </div>
                        <div className="d-grid gap-2 mt-5">
                            <button className="btn btn-danger rounded-pill py-2" type="button"><b>Next</b> </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <img src={chilliChicken} className="chilliChicken" alt=""/>
            <img src={friedChicken} className="friedChicken" alt=""/>
        </div>
    );
};

export default Verification;