const querystring = window.location.search;
console.log(querystring);
const queries = querystring.split("=");
const id = parseInt(queries[1]);

const product = document.querySelector(".product-details");
product.innerHTML = showProduct(id);

function showProduct(id) {
  return `
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                    <a href="#" class="heart-icon"
                      ><i class="icon_heart_alt"></i
                    ></a>
                  </div>
                  <div class="pd-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <span>(5)</span>
                  </div>
                  <div class="pd-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur ing elit, sed do
                      eiusmod tempor sum dolor sit amet, consectetur adipisicing
                      elit, sed do mod tempor
                    </p>
                    <h4>$495.00 <span>629.99</span></h4>
                  </div>
                  <div class="pd-color">
                    <h6>Color</h6>
                    <div class="pd-color-choose">
                      <div class="cc-item">
                        <input type="radio" id="cc-black" />
                        <label for="cc-black"></label>
                      </div>
                      <div class="cc-item">
                        <input type="radio" id="cc-yellow" />
                        <label for="cc-yellow" class="cc-yellow"></label>
                      </div>
                      <div class="cc-item">
                        <input type="radio" id="cc-violet" />
                        <label for="cc-violet" class="cc-violet"></label>
                      </div>
                    </div>
                  </div>
                  <div class="pd-size-choose">
                    <div class="sc-item">
                      <input type="radio" id="sm-size" />
                      <label for="sm-size">s</label>
                    </div>
                    <div class="sc-item">
                      <input type="radio" id="md-size" />
                      <label for="md-size">m</label>
                    </div>
                    <div class="sc-item">
                      <input type="radio" id="lg-size" />
                      <label for="lg-size">l</label>
                    </div>
                    <div class="sc-item">
                      <input type="radio" id="xl-size" />
                      <label for="xl-size">xs</label>
                    </div>
                  </div>
                  <div class="quantity">
                    <div class="pro-qty">
                      <input type="text" value="1" />
                    </div>
                    <a href="#" class="primary-btn pd-cart">Add To Cart</a>
                  </div>
                  <ul class="pd-tags">
                    <li>
                      <span>CATEGORIES</span>: More Accessories, Wallets & Cases
                    </li>
                    <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
                  </ul>
                  <div class="pd-share">
                    <div class="p-code">Sku : 00012</div>
                    <div class="pd-social">
                      <a href="#"><i class="ti-facebook"></i></a>
                      <a href="#"><i class="ti-twitter-alt"></i></a>
                      <a href="#"><i class="ti-linkedin"></i></a>
                    </div>
                  </div>`;
}