import React from 'react';

interface CardProps {
  title: string;
  items: React.ReactNode[];
  bgColor: string;
  textColor: string;
}

const Card: React.FC<CardProps> = ({ title, items, bgColor, textColor }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${bgColor} ${textColor} w-full`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
