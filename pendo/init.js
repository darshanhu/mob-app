(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
        // This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
        // Call this function after users are authenticated in your app and your visitor and account id values are available
        // Please use Strings, Numbers, or Bools for value types.

        pendo.initialize({
            visitor: {
                id: "propertyUser-new",
                full_name: "Darshan Hulswar",
                pendoId: 99,
                listProperty: ["128", "129", "130", "131", "240"],
                numericList: [400, 500, 600, 700, 800],
                birthDate: "1999-11-28",
                uniqueClientId: 99294858,
                typeTesting: true,
                serverUrl: "https://mob-site.netlify.app/"
            },
        
            account: {
                id: "MobSite-Latest-Account",
                name: "MOB_SITE_ACCOUNT",
                DAU: 99
            },
            events: {
                ready: function () {
                    console.log("Yes, now it will show the guide")
                    window.pendo.showGuideById("ljF1w0DV486z1bp09uR0PWkpauI")
                    console.log("No it's not showing")
                }
            },
        });

})('43994d6b-66ea-49fc-71f1-31077e387150');

let styles = `
    ._pendo-badge_ { 
  display: none !important;
}
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles

if(window.location.href === "https://mob-site.netlify.app/") {
    document.head.appendChild(styleSheet)
}
