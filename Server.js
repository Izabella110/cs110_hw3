const MEDICAL_PLANTS = require('http');

const httpServer = MEDICAL_PLANTS.createServer(function(req, res) {


	if(req.url === '/Acacia') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Acacia nilotica has a wealth of medicinal uses. It is used for stomach upset and pain, the bark is chewed to protect against scurvy, an infusion is taken for dysentery and diarrhoea.\n');
     } 
      else if (req.url === '/Aloe') {
     	res.writeHead(202, {'Content-Type' : 'text/plain'});
     	res.end('The roots are used in traditional medicine for asthma and tuberculosis. The plant has been tested for bioactivity against the malaria parasite and inflammatory responses.\n');
     }	
     else if (req.url === '/Pineapple') {
    	res.writeHead(202, {'Content-Type' : 'text/plain'});
    	res.end('Native Americans have used pineapple medicinally against parasitic worms and amoebic parasites.\n'); 
     }	
     else if(req.url === '/Dandelion') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Contains a large number of pharmacologically active compounds, and has been used for centuries as an effective laxative and diuretic, and as a treatment for bile or liver problems.\n');
     } 
     else if(req.url === '/Cinchona') {
    	res.writeHead (202, {'Content-Type' : 'text/plain'});
    	res.end('The bark of the cinchona tree contains quinine, which today is a widely prescribed treatment for malaria, especially in countries that cannot afford to purchase the more expensive antimalarial medications.\n');
     } 
     else if(req.url === '/Garlic') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end(' Garlic supplementation helps to prevent and reduce the severity of common illnesses like the flu and common cold.\n');
     } 
        else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Nothing Found');
    }
});

httpServer.listen(3016);  