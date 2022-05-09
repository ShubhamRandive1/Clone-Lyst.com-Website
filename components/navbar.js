let navbar = () => {
    return `
    <div id="upperNav">
        <div id="in-us">IN-US$</div>
        <div class="dropdown">
            <button type="button" class="btn  " data-toggle="dropdown">Help&nbsp<i class="fa-solid fa-angle-down"></i></button>
            <div class="dropdown-menu">
                <div class="dropdown-item">Help Center</div>
                <div class="dropdown-item">About US</div>
                <div class="dropdown-item">Contact Us</div>
                <div class="dropdown-item">Careers</div>
            </div>
        </div>
        <div id="signin"> <a href="signin.html" class="sc"> Signin </a></div>
        <div id="signin"> <a href="cart.html" class="sc"> <i class="fa-solid fa-cart-shopping"></i> </a></div>
        <div><a   href="" id="join1">&nbsp&nbsp <b id="join">Join</b> &nbsp&nbsp</a></div>
    </div>
<div id="lowerNav">
    <h1 id="logo"><a  href="index.html">LYST</a></h1>


    <p><a id="women" href="women.html">WOMEN</a></p>
    <p ><a id="men" href="men.html">MEN</a></p>
    <div id="search"><i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" id="query" placeholder="SEARCH (E.G. VALENTINO DRESSES)">
    </div>
    <div id="mySearches" class="swa"><img src="./images/swallowtail.png" alt="" width="30" height="20">
    <p>MY SEARCHES</p>
    </div>
    <div id="wishlist" class="swa"><i class="fa-regular fa-heart"></i>
    <p>WISHLIST</p>
    </div>
    <div id="alerts" class="swa"><i class="fa-regular fa-bell"></i>
    <p>ALERT</p>
    </div>
</div>
    `;
}
export default navbar();