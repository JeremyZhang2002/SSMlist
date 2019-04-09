var proxy = "SOCKS5 127.0.0.1:1086; SOCKS 127.0.0.1:1086; DIRECT;";

var domains = [
	"s-sm.org",
	"delta.com",
	"selco.info",
	"sirsi.net",
	"nike.com",
	"adidas.com",
	"abercrombie.com"
];

function FindProxyForURL(url, host) {
    for (var i = domains.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains[i])) {
            return "DIRECT";
    	}
    }
    return proxy;
}
