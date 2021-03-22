import React from "react";

import "./faq.scss";
import QuestionAnswer from "./QuestionAnswer/QuestionAnswer";

const FAQ = (props) => (
  <div className="FAQ">
    <h1 className="FAQ__heading">FAQ</h1>
    <QuestionAnswer
      question="What is the parking situation?"
      answer="Ample parking is available on site in the grass. There will be signs directing you where to park. Handicap parking will be available for those who need it."
    />
    <QuestionAnswer
      question="Is it indoors or outdoors?"
      answer="The ceremony will be outside in the grass. Cocktail hour will be outside as well on gravel. The reception will be in a covered barn, but the barn will be open to allow overflow into the cocktail area. There is no ac, but if necessary we have big fans."
    />
    <QuestionAnswer
      question="What should I wear?"
      answer="The dress code is casual dressy. Nice jeans and a nice top is fine, but you can also dress in semi-formal attire as well."
    />
    <QuestionAnswer
      question="What is there to do in the area?"
      answer="tbd"
    />
    <QuestionAnswer
      question="Can I Uber / Lift?"
      answer="Yes!"
    />
    <QuestionAnswer
      question="Will you be providing alcohol?"
      answer="We will be providing beer, wine, &amp; prosecco. If you would like to bring your own you are welcome to."
    />
    <QuestionAnswer
      question="What's for dinner?"
      answer="tbd"
    />
    <QuestionAnswer
      question="How long will the event be?"
      answer="tbd"
    />
    <QuestionAnswer
      question="What will the weather be like?"
      answer="tbd"
    />
    <QuestionAnswer
      question="What time should I arrive?"
      answer="tbd"
    />
    <QuestionAnswer
      question="Are kids allowed?"
      answer="As much as we love your little ones, this will be an adults-only celebration. We hope this advance notice means you’re able to let your hair down and celebrate with us on the day!”"
    />
    <QuestionAnswer
      question="Can I bring a date?"
      answer="tbd"
    />
    <QuestionAnswer
      question="Do you have a hotel block for guests? Where do you recommend I stay?"
      answer="tbd"
    />
    <QuestionAnswer
      question="When is the rsvp deadline? Do I need to mail back my rsvp or can I do it online?"
      answer="tbd"
    />
    <QuestionAnswer
      question="Are the ceremony and reception location wheelchair accessible?"
      answer="Yes. If needed we also have use to a golf cart to get guests to and from the ceremony location"
    />
    <QuestionAnswer
      question="May I take a centerpiece/candle/flowers home as a souvenir?"
      answer="Please ask before taking anything home (except wedding favors of course). Several of the décor pieces belong to the venue so we want to make sure nothing gets taken home that isn't ours!"
    />
    <QuestionAnswer
      question="Can I take and post pictures of the wedding on social media?"
      answer="We ask that you refrain from taking photos during the ceremony, but for the rest of the event we encourage guests to post pictures on their social media and please tag each photo with our wedding hashtag #________ so we can keep track of all of your pictures!"
    />
    <QuestionAnswer
      question="I still have questions, what is the best way to contact you?"
      answer="You can text Jessica at (513) 491-1978"
    />
  </div>
);

export default FAQ;
