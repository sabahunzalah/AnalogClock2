// // calculation for hours
// //1hour =60 min have 30deg
// //hours=12 hours in clock have to rotate 360 deg in a clock.
// //12 hours
// //360deg
// // 1hour=360/12=>30deg
// //h hours=30deg+m/2



// // min=60min
// //30deg
// //1min=30/60=1/2
// // m min=(1/2)*m
// // m/2
// // calculation for minutes
// //60min
// //360 deg
// //1min=360/60  =>6deg
// //m min =6m
// // calculation for seconds
// //60sec
// //360 deg
// //1sec=360/60  =>6deg
// //s sec =6s

setInterval(() => {
    d = new Date();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();
    hrotation=30*hh+mm/2;
    mrotation=6*mm;
    srotation=6*ss;
    hours.style.transform =`rotate(${hrotation}deg)`;
    minutes.style.transform =`rotate(${mrotation}deg)`;
   seconds.style.transform =`rotate(${srotation}deg)`;

}, 1000);



