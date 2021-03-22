import React from "react";

import "./ourStory.scss";
import meAndRing from '../../images/me-and-ring-proposal.jpg';
import PhotoBlock from '../../components/ui/PhotoBlock/PhotoBlock';

const OurStory = (props) => (
  <div className="story">
        <h1 className="story__heading">Our Story</h1>
        <p className="story__text">Grant and I met in Fall 2016 at the University of South Carolina. We had the same German class and by chance sat next to each other. Everyday in class I would get Taco Bell or Pizza Hut for lunch and eat it in the classroom (it was the fastest food to get on campus) and Grant always commented on my unhealthy eating habits. Even though it annoyed him, he must have seen something he liked, because come October he asked me out on a date. We got Hibachi and went to a movie. From then on we couldn't stay away from each other. On November 17th, 2016 he asked me to be his girlfriend and right before we left for winter break we told each other we loved each other.</p>
        <p className="story__text">Through my study abroad semester and endless college stress we continued to work together and love each other. We knew we didn't want to be apart, so we decided to move to Charlotte, NC after college and move in together.</p>
        <p className="story__text">Shortly after moving to Charlotte we got our first baby dog, Farrah. Then in Spring 2019 we moved into our first house together (make sure to get a big yard Farrah could run around in). We then decided to get Farrah a baby sister, Fiona. We have never been happier than we are with our little family and cannot wait to spend our future together.</p>
        <section>
            <h2 className="story__subheading">The Proposal</h2> 
            <p className="story__text">Grant finally decided to pop the question on December 29th , 2020. While we were tidying up the house he asked me to come over so he could give me a hug. Now for Grant that's very out of character, so I was suspicious. He said he was looking around the house and he was so grateful for me and everything we had. I had made this house a home for him. Then he said "which is why I can't go another day without asking you this" and pulled a ring box out of his back pocket as he got down on one knee. After that I started bawling my eyes out and everything is a blur until he said "will you marry me", to which I promptly said yes. He told me he couldn't think of a better place to ask me to be his wife than the home we "built" together.</p>
            <img src={meAndRing} alt="Jessica showing off her new ring" className="story__photo"></img>
        </section>
        <section>
            {/* timeline */}
        </section>
        <section>
          <PhotoBlock photos={['crowders-mtn', 'bryson-city', 'anna-ruby-falls', 'me-and-grant-proposal', 'me-kiss-grant-proposal', 'ring']} />
        </section>
  </div>
);

export default OurStory;