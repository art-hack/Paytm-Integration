app.post('/generate_checksum',function(req,res){
  console.log(req.body.ORDER_ID);
  var paramarray = {};
        paramarray['MID'] = 'KRVHos43349349683725'; //Provided by Paytm
        paramarray['ORDER_ID'] = req.body.ORDER_ID; //unique OrderId for every request
        paramarray['CUST_ID'] = req.body.gid;  // unique customer identifier 
        paramarray['INDUSTRY_TYPE_ID'] = 'Retail109'; //Provided by Paytm
        paramarray['CHANNEL_ID'] = 'WEB'; //Provided by Paytm
        paramarray['TXN_AMOUNT'] = req.body.price//req.body.price; // transaction amount
        paramarray['WEBSITE'] = 'WEBPROD'; //Provided by Paytm
        paramarray['CALLBACK_URL'] = 'https://bazingacafe.in/txnstatus/'+req.body.ORDER_ID;//Provided by Paytm
        paramarray['EMAIL'] = req.body.email; // customer email id
        paramarray['MOBILE_NO'] = req.body.phone;// customer 10 digit mobile no
        paramarray['REQUEST_TYPE'] = 'DEFAULT';// R Type

        paytm_checksum.genchecksum(paramarray, paytm_config.MERCHANT_KEY, function (err, response) {
            // res.send(JSON.stringify(res));
            res.writeHead(200, {'Content-type' : 'text/json','Cache-Control': 'no-cache'});
            res.write(JSON.stringify(response));
            res.end();
          });
      });

