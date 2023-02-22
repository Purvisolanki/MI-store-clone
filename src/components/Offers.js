import React from 'react'
// import { Link } from 'react-router-dom';
// import Offer from "./Offer.js";
// import "../styles/Offers.css"
// const Offers = () => {
//     const offer = [
//         {
//               "url": "https://in.event.mi.com/in/offer-with-mi",
//               "image": "https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230"
//         },
//         {
//               "url": "https://in.event.mi.com/in/work-from-home-essentials",
//               "image": "https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230"
//         },
//         {
//               "url": "https://xiaomi.giveindia.org/",
//               "image": "https://i02.appmifile.com/761_operator_in/27/04/2021/09489d6a77f96111372718a551d2799d.png?width=398&height=230"
//         }
//     ]
//     return (
        
//         <div className="offersSection"> 
//         { offer.map((item,index)=>(
//         < Offer key={item.image} index={index} src={item.image} link={item.url} />
//         ))}
//     </div>
//     )
// }

import "../styles/offers.css";
const Offers = () => {
  return (
    <>
    <div className='container'>
    <div className="offer">
    <a href="https://in.event.mi.com/in/offer-with-mi"> 
      <img className="offerImg" src="https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230" alt='offer'
     /></a>
    </div>
    <div className="offer">
        <a href="https://in.event.mi.com/in/work-from-home-essentials">
    <img className="offerImg" src="https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230" alt='offer'/></a>
  </div>
  </div></>
  )
}

export default Offers