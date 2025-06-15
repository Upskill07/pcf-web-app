import React from 'react';
import './KnowMore.css';


const KnowMore = () => {
  return (
    <div className="knowmore-page">
     
      {/* Founder Section */}
      <div className="founder-section">
        <h2 className='kmhead'>Meet Our Founder</h2>
        <h3>Dnyaneshwar Birajdar — Founder & Director</h3>
        <p><strong> BE Graduate | Sr. Software Developer | Social Visionary</strong></p>
        <p className='kmtxt'>
          Dnyaneshwar Birajdar- Founder Director | People Civilization Foundation (PCF)
            He is BE graduate and working in software industry since Oct 2010. Currently he is working
                as Sr. Software Developer in one of the renowned software companies in the world.
        </p>
        <p className='kmtxt'>
          <b>Why PCF?</b> Since childhood he was closely observing the different shades of life even some unfortunate life
           incidents happened at very early age. Being form the rural background he is much aware of the possible 
           obstacles that need to be overcome to lead the life. Inspired by the famous quote of Gandhiji, ‘Be the 
           Change you wish to see in the world’ he founded a NGO People Civilization Foundation (PCF), a social 
           think-tank for the self-development of rural youths. He believe that Self-Development of individual is
            very important than changing anything else. Today, People Civilization is running almost 11 projects 
            in rural area, more than 25 volunteers are working for this cause on need basis; numerous well-wishers 
            are supporting the projects by contributing the best in their capacity.
        </p>

        <p className='kmtxt'>
            <b>Background of Dnyaneshwar Birajdar</b>- ‘Born with nothing and lost everything’. This is not just another 
            quote but its fact when we speak about Dnyaneshwar Birajdar. At the age of four, he lost his whole 
            family including the parents in deadliest earthquake of 30 Sept. 1993, in Killari village of Latur 
            district, Maharashtra. Instantly, family of eight people became the family of two people. Yes, He 
            survived only with his Grandma and both were going through big emotional trauma. Now survival became a 
            challenge. Somehow his Grandma recovered from this mental shock almost after one year and feeling some
             hope about Dnyaneshwar. Now he became mission of her life. She used to work as daily wage labor in 
             farm and was earning Rupees 35 per day. This was the only income source to the family. May be due to 
             such unfortunate situation and other challenges of distress, inferiority, ignorance and sympathy in 
             the society, very soon Dnyaneshwar realized that Education is the only weapon to change this situation.
        </p>
        <p className='kmtxt'>
            <b>Education:</b> Along with his study, he used to help his Grandma in all types of work in house. Fortunately,
             he could secure good marks in SSC and got admitted to Govt. Polytechnic, Latur. He has started working
              part-time in college’s library to manage his canteen and other expenses .He passed diploma in 
              distinction and got admitted to Government College of Engineering, Karad. Along with the study, on 
              weekends Dnyaneshwar used to work part-time in one of the companies in MIDC, Karad to manage his 
              expenses. In 2010, he successfully completed BE (IT) in distinction and now he is working for one 
              of the renowned software companies in the world.
         </p>
         <p className='kmtxt'>
            <b>Inspiration: </b>The journey so far was with full of ups-downs and struggle but it never stopped him. 
            Though many of us can see it as big achievement but he says, ‘It was period of Making of Life’.
             Moreover he realized the saying of Gandhiji that ‘Be the change you wish to see in the world’. 
             Based on this philosophy and diverse life experiences he thought to form a social platform ‘PEOPLE 
             CIVILIZATION FOUNDATION’ which can be useful for the self-development of rural youths.
            <br></br>As <b> ‘Everyone thinks of changing the world but no one thinks of changing himself…-Leo Tolstoy’</b><br></br>
              taking it as inspiration, Today People Civilization is undertaking various real time projects to 
              empower the youths by encouraging them to recognize their abilities and implement the same with 
              positive mindset.
         </p>

        
      </div>

     

      {/* Trustees Section */}
      <div className="trustee-section">
        <h2 className='kmhead'>Meet Our Trustees</h2>
        <div className="trustee-list">
          <div className="trustee-card">
            <h4>Milind Joshi</h4>
            <p>Pune | PCF Trustee</p>
            <p>📞 9890997368</p>
          </div>
          <div className="trustee-card">
            <h4>Sunil Sawargave</h4>
            <p>Founder - Chanakya Maths & Science Academy, Latur</p>
            <p>📞 8600390212</p>
          </div>
          <div className="trustee-card">
            <h4>Lalitkumar Dhas</h4>
            <p>Managing Director - Vishwa Infra, Aurangabad</p>
            <p>📞 902858889</p>
          </div>
          <div className="trustee-card">
            <h4>Sagar Birajdar</h4>
            <p>Production Supervisor - Greenpack Industries, Aurangabad</p>
            <p>📞 9923247324</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
