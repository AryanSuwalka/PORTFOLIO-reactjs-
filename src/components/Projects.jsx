import React from 'react';
import '../styles/Projects.css';


const cardsData = [
  {
    title: 'Web Development',
    subtitle: 'Web Design & Logo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus veniam corporis velit debitis dolor...',
    link: '#about'
  },
  {
    title: 'Web Development',
    subtitle: 'Web Design & Logo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus veniam corporis velit debitis dolor...',
    link: '#about'
  },
  {
    title: 'Web Development',
    subtitle: 'Web Design & Logo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus veniam corporis velit debitis dolor...',
    link: '#about'
  },
  {
    title: 'Web Development',
    subtitle: 'Web Design & Logo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus veniam corporis velit debitis dolor...',
    link: '#about'
  }
];

const Card = ({ title, subtitle, description, link, index }) => {
  const cardClass = index % 2 === 0 ? 'card even' : 'card odd';

  return (
    <div className={cardClass}>
      <h5>{title}</h5>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <span><a href={link}>Read More....</a></span>
    </div>
  );
};

const WorkCards = () => {
  return (
    <section className="work_cards">
      <h2 className="title">
        WHAT I <span className="title_end">DO</span>
      </h2>
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            link={card.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkCards;
