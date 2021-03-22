import React from "react";

import "./venue.scss";

import PhotoBlock from '../../components/ui/PhotoBlock/PhotoBlock';

const Venue = (props) => (
  <div>
    <h1>Red Barn Events</h1>
    <PhotoBlock photos={['redbarn-couch', 'redbarn-mason-jar', 'redbarn-barn']} />
    <h2>Details</h2>
    <h3>Ceremony:</h3>
    <p>The ceremony will begin at 5pm. It will be outdoors on the grass with wooden pew seating.</p>
    <h3>Cocktail Hour:</h3>
    <p>Cocktail hour will immediately follow the ceremony and will last approximately 1hr. It will be on a gravel space where we will have an open bar, appetizers, and several lawn games.</p>
    <h3>Reception:</h3>
    <p>The reception &amp; dance floor will be inside a covered barn. The barn does not have AC, but if needed we have large fans. During the reception guests can still overflow into the cocktail space. Dinner will be served after cocktail hour. The reception will end around 10pm.</p>
    <h3>Menu:</h3>
    <p>TBD</p>
    <h3>Bathrooms:</h3>
    <p>Bathrooms are on site and handicap accessible. The bathrooms are uni-sex.</p>
    <h2>Directions</h2>
    <p><strong>Address:</strong> 6012 Jeanne Dr., Waxhaw, NC 28173</p>
    <p>When you turn down Jeanne Dr. you will go down a long drive and will pass 3 houses. At the last house the drive will bend towards the right. After that you will turn left at the next road and park in the grass to the right before the barn.</p>
    <p>We will have handicap spaces marked for those who need them.</p>
    
    <h3>From 485-Outer:</h3>
    <p>Take exit 57 for NC-16 toward Providence Rd/Weddington</p>
    <p>Use the right 2 lanes to turn right onto NC-16 S/Providence Rd</p>
    <p>4.3 mi later turn left onto Ennis Rd</p>
    <p>1.0 mi later turn left onto New Town Rd</p>
    <p>3.2 mi later turn right onto Waxhaw Indian Trail Rd S</p>
    <p>2.1 mi later turn left onto Jeanne Dr.</p>

    <h3>From 485-Inner:</h3>
    <p>Take exit 52 for E John St</p>
    <p>0.4 mi later turn left onto E John St</p>
    <p>1.4 mi later turn right onto Potter Rd</p>
    <p>4.5 mi later at the traffic circle, take the 1st exit onto Waxhaw Indian Trail Rd</p>
    <p>0.3 mi later at the traffic circle, continue straight to stay on Waxhaw Indian Trail Rd</p>
    <p>4.7 mi later turn left onto Jeanne Dr.</p>

    <h3>From US-521:</h3>
    <p>Shortly after crossing into SC Turn left onto Marvin Rd/State Rd S-29-54 (There will be QT &amp; Aldi on the right &amp; a Shell on the left)</p>
    <p>1.4 mi later continue onto New Town Rd</p>
    <p>1.1 mi later, at the traffic circle, take the 2nd exit and stay on New Town Rd</p>
    <p>0.1 mi later, at the traffic circle, continue straight to stay on New Town Rd</p>
    <p>6.5 mi later turn right onto Waxhaw Indian Trail Rd S</p>
    <p>2.1 mi later turn left onto Jeanne Dr.</p>

  </div>
);

export default Venue;