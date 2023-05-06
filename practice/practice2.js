// mission 2
const ApplePay = [];

let n = parseInt(prompt("몇번 결재?"))
while(n--){
    ApplePay[n] = {}
    ApplePay[n].User = prompt("user")
    ApplePay[n].Money = parseInt(prompt("머니"))
    ApplePay[n].sale = prompt("세일 여부")
}
for(let ap of ApplePay){
    ap.Money = !!ap.Money ? ap.Money : 0
    ap.event  = ap.sale < 20 ? false : true
    if(ap.User === "1") ap.Money = Infinity;
    if(ap.Money < 20000 && ap.sale < 10000 ) ap.Money = NaN

}