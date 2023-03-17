
import { RiDeleteBinFill } from "react-icons/ri";

export function ShoppingCart() {
    return (
        <>

            <div className="d-flex py-2 px-1 ">
                <div className="flex-grow-1">
                    <input class="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" hmtlFor="flexCheckDefault">
                        Pilih semua
                    </label>
                </div>
                <div>
                    <span className="p-3 ">
                        (10) items
                    </span>
                </div>
            </div>
            <div className="">
                <div className=" ">
                    <div className=" ">
                        <div className=" ">
                            <form >
                                <ul className="list-group mx-auto">
                                    <li className="list-group-item">
                                        <div className="container my-2 px-2">
                                        <div className="row justify-content-center mb-2"> 
                                                    <div class="d-flex justify-content-end">
                                                        <RiDeleteBinFill />
                                                    </div> 
                                                </div> 
                                            <div className="row">

                                                <div className="col col-md-3 col-lg-2 g-0" >
                                                    <div className="me-1">
                                                        <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />

                                                        <img className="ms-4" src={require("./lifeOfPi.jpg")} width="75px" height="75px" /></div>
                                                </div>

                                                <div className="col mx-3">
                                                    <div className="row">
                                                        <div className="col-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3 p-0 mb-1">
                                                            <span className="cart">Atomic Habits: Perubahan  </span>
                                                        </div>
                                                        <div className="col-12 col-md-3 col-lg-3 col-xl-1 col-xxl-1 p-0 mb-1">
                                                            <div className="d-flex flex-row">
                                                                <button type="button" className="btn btn-light btn-cart">-</button>
                                                                <div className="cartcount mt-1 px-4">
                                                                    12
                                                                </div>
                                                                <button type="button" className="btn btn-light btn-cart">+</button></div>
                                                        </div>
                                                        <div className="col p-0">
                                                            <span className="disc">Disc 5%</span>
                                                        </div>
                                                        <div className="col">
                                                            <p className="py-1 cart">Rp 75.000</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="container my-2 px-2">
                                            <div className="row justify-content-center mb-2">
                                                <div class="d-flex justify-content-end">
                                                    <RiDeleteBinFill />
                                                </div>
                                            </div>
                                            <div className="row">

                                                <div className="col col-md-3 col-lg-2 g-0" >
                                                    <div className="me-1">
                                                        <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />

                                                        <img className="ms-4" src={require("./bukuanak.jpg")} width="75px" height="75px" /></div>
                                                </div>

                                                <div className="col mx-3">
                                                    <div className="row">
                                                        <div className="col-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3 p-0 mb-1">
                                                            <span className="cart">Alhamdulillah` Allah Maha Melindungiku  </span>
                                                        </div>
                                                        <div className="col-12 col-md-3 col-lg-3 col-xl-1 col-xxl-1 p-0 mb-1">
                                                            <div className="d-flex flex-row">
                                                                <button type="button" className="btn btn-light btn-cart">-</button>
                                                                <div className="cartcount mt-1 px-4">
                                                                    12
                                                                </div>
                                                                <button type="button" className="btn btn-light btn-cart">+</button></div>
                                                        </div>
                                                        <div className="col p-0">
                                                            <span className="disc">Disc 5%</span>
                                                        </div>
                                                        <div className="col">
                                                            <p className="py-1 cart">Rp 75.000</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="d-flex checkout">
                <div className="flex-grow-1 p-2" >
                    <p className="text-end">Total  Rp. 199.000</p>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Checkout </button>
                </div>

            </div>


        </>
    )
}