// components/CardsSection.js
import Card from '../../_components/Card';

const CardsSection = () => {
  const userFears = ['Breaking live data', 'No way back', "I don't understand fields"];
  const marketFailures = ['Zapier → no recovery', 'Workato → too abstract', 'Celigo → complex errors'];
  const designPrinciples = ['Explain before act', 'Preview before commit', 'Recover by default'];

  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-between gap-8">
      {/* User Fears Card */}
      <div className="w-full flex">
        <Card 
          title="User Fears" 
          items={userFears} 
          bgColor="bg-green-100" 
          textColor="text-green-700" 
        />
      </div>

      {/* Market Failures Card */}
      <div className="w-full flex">
        <Card 
          title="Market Failures" 
          items={marketFailures} 
          bgColor="bg-purple-100" 
          textColor="text-purple-700" 
        />
      </div>

      {/* Design Principles Card */}
      <div className="w-full flex">
        <Card 
          title="Design Principles" 
          items={designPrinciples} 
          bgColor="bg-teal-100" 
          textColor="text-teal-700" 
        />
      </div>
    </div>
  );
};

export default CardsSection;
