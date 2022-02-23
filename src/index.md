---
layout: home
title: Homepage

---
# Welcome to Shoebox Finds

Whether you are looking for sports cards, gaming cards, comics, or autographed memorabilia, our dedicated staff of professionals is here to assist you with your collecting need

<div id='collection-component-1645615463900'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shoeboxfindsnz.myshopify.com',
      storefrontAccessToken: '323719b2beef3eb06289a57256d5e5a7',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '401943331058',
        node: document.getElementById('collection-component-1645615463900'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(33.33333% - 30px)",
          "margin-left": "30px",
          "margin-bottom": "50px",
          "width": "calc(33.33333% - 30px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "font-size": "16px"
      },
      "button": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#464646"
        },
        "background-color": "#292929",
        ":focus": {
          "background-color": "#464646"
        },
        "border-radius": "0px",
        "padding-left": "54px",
        "padding-right": "54px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-30px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#464646"
        },
        "background-color": "#292929",
        ":focus": {
          "background-color": "#464646"
        },
        "border-radius": "0px",
        "padding-left": "54px",
        "padding-right": "54px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#464646"
        },
        "background-color": "#292929",
        ":focus": {
          "background-color": "#464646"
        },
        "border-radius": "0px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#292929",
        ":hover": {
          "background-color": "#464646"
        },
        ":focus": {
          "background-color": "#464646"
        }
      },
      "count": {
        "font-size": "14px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>