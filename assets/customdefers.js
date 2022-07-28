  
  //PINTEREST
  !function(e){if(!window.pintrk){window.pintrk = function () {
   window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
   n=window.pintrk;n.queue=[],n.version="3.0";var
   t=document.createElement("script");t.async=!0,t.src=e;var
   r=document.getElementsByTagName("script")[0];
                                 r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
 pintrk('load', '2613438925839', {em: "{{ cutomer.email }}"});
                                  pintrk('page');
                                  pintrk('track', 'pagevisit', {
                                    line_items: [
                                      {
                                        product_id: "{{ product.id }}",
                                        product_category: "{{ product.type }}"
                                      }
                                    ]
                                  });

                                  function atcPin(){
                                    pintrk('track', 'addtocart', {
                                      value: '{{ product.price | money_without_currency }}',
                                      currency: '{{ shop.currency }}',
                                      order_quantity: 1, 
                                      line_items: [
                                      { 
                                      product_id: '{{product.id}}', 
                                      product_category: '{{collection.title}}' 
                                    }
                                           ]
                                           });
                                  }


