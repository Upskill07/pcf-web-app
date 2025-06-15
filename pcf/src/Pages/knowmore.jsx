import React, { useEffect } from 'react';
import './KnowMore.css';

const KnowMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="knowmore-page">
      {/* Founder Section */}
      <div className="founder-section">
        <h2 className='kmhead'>Meet Our Founder</h2>
        <h3>Dnyaneshwar Birajdar — Founder Director | People Civilization Foundation (PCF), Killari</h3>
        <p>
        Corporate profile:{" "}
        <a
          href="https://www.linkedin.com/in/dnyaneshwar-birajdar-8a787b77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#0077b5' }}
        >
          LinkedIn – Dnyaneshwar Birajdar
        </a>
      </p>

        <p><strong>BE Graduate | Sr. Software Developer | Social Visionary</strong></p>
        <p className='kmtxt'>
          Dnyaneshwar Birajdar- Founder Director | People Civilization Foundation (PCF).
         He is a BE graduate, has been working in the software industry since October 2010. Currently, 
         he serves as a Senior Software Developer at one of the world’s leading software companies. Alongside 
         his professional career, he is the Founder and Director of People Civilization Foundation (PCF) - 
         a non-profit organization dedicated to the self-development of rural youth.
        </p>
         <br />
        <p className='kmtxt'>
          <b>Why PCF?</b> Having grown up in a rural setting and faced numerous life challenges, Dnyaneshwar 
          developed a deep understanding of the obstacles that rural youth must overcome to lead meaningful 
          lives. Inspired by Mahatma Gandhi’s timeless quote, “Be the change you wish to see in the world,” he 
          established People Civilization Foundation, a social think tank focused on fostering awareness, education, 
          and holistic development.He believes that self-development is the foundation of true change, more vital 
          than attempting to change external circumstances alone. Since 2015, PCF is actively running numerous 
          result-oriented project for rural students in different parts of Maharashtra. 

        </p>
        <br />
        <p className='kmtxt'>
          <b>Background of Dnyaneshwar Birajdar</b> - ‘Born with nothing and lost everything’. This is not just
          another quote but a fact when we speak about Dnyaneshwar Birajdar. At the age of four, he lost his
          whole family including his parents in the deadliest earthquake of 30 Sept. 1993, in Killari village
          of Latur district, Maharashtra. Instantly, a family of eight people became a family of two people.
          Yes, he survived only with his Grandma and both were going through a big emotional trauma.
          Now survival became a challenge. Somehow his Grandma recovered from this mental shock almost
          after one year and felt some hope about Dnyaneshwar. Now he became the mission of her life.
          She used to work as a daily wage laborer in a farm and was earning Rupees 35 per day.
          This was the only income source for the family. Maybe due to such unfortunate situations and
          other challenges of distress, inferiority, ignorance, and sympathy in society, very soon Dnyaneshwar
          realized that Education is the only weapon to change this situation.
        </p>
        <p className='kmtxt'>
          <b>Early Life: Strength Born from Struggle-</b>  The story of Dnyaneshwar Birajdar is one of 
          extraordinary resilience. At the age of four, he tragically lost his entire family—parents and 
          relatives—in the devastating Killari earthquake on 30th September 1993, in Latur district, Maharashtra.
           What remained was a family of two: Dnyaneshwar and his grandmother, both grappling with deep emotional
            trauma.His grandmother, despite her immense loss, took up the responsibility of raising him. Working as 
            a daily-wage farm laborer earning just ₹35 a day, she became his strength. These early life challenges 
            shaped Dnyaneshwar’s character and awakened in him the belief that education is the most powerful 
            weapon to change one’s circumstances.

        </p>
        <p className='kmtxt'>
          <b>Education and Determination:</b> While pursuing his education, Dnyaneshwar supported his grandmother 
          ith household work. He secured excellent marks in SSC and enrolled in further studies. To manage his
           daily expenses, he worked part-time in the college library throughout his early educational years. <br />
            Later, he completed his diploma with distinction and was admitted to a reputed government engineering college.
            To support himself financially during this time, he worked part-time on weekends at a local company in MIDC. 
            In 2010, he successfully completed his <b>Bachelor of Engineering in Information Technology </b>with distinction and 
            began his professional journey in the software industry.

        </p>
       <p className='kmtxt'>
        <b>Inspiration Behind the Movement:</b> Dnyaneshwar's journey was filled with hardships, yet he never allowed them to define his future. While many view his achievements as extraordinary, he humbly refers to it as “the making of a life.” He deeply resonates with the words of Leo Tolstoy:
        <br /><br />
       <i>“Everyone thinks of changing the world, but no one thinks of changing himself.”</i>

        <br /><br />
        This profound insight, combined with his lived experiences, became the foundation for establishing the People Civilization Foundation (PCF)—a platform dedicated to empowering rural youth by helping them unlock their inner potential and embrace personal transformation.
        <br /><br />
        Today, PCF is actively implementing real-world, impact-driven projects that promote self-awareness, skill development, and positive social action, inspiring youth to become the change they wish to see.
      </p>

      </div>

      {/* Trustees Section 
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
      </div>*/}
    </div>
    
  );
};

export default KnowMore;
