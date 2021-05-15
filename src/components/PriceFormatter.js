const priceFormatter = (price) => {
  if (price > 99999 && price < 10000000) {
    let dec = price.toString().slice(-5, -3);
    price = price.toString().slice(0, -5);
    return price + "." + dec + " L";
  } else if (price > 9999999) {
    let dec = price.toString().slice(-7, -5);
    price = price.toString().slice(0, -7);
    return price + "." + dec + " Cr";
  } else {
    return price;
  }
};

export default priceFormatter;
