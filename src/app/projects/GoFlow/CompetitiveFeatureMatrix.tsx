'use client'
import React from 'react';

export default function CompetitiveFeatureMatrix() {
  const features = [
    { name: 'Error Handling', key: 'errorHandling' },
    { name: 'Rollback Cap.', key: 'rollbackCap' },
    { name: 'Cardinality', key: 'cardinality' },
    { name: 'Data Safety', key: 'dataSafety' },
    { name: 'Error Visible', key: 'errorVisible' },
    { name: 'Version Ctrl', key: 'versionCtrl' },
    { name: 'AI Mapping', key: 'aiMapping' },
    { name: 'Self-Healing', key: 'selfHealing' },
  ];

  const platforms = [
    {
      name: 'Zapier',
      features: {
        errorHandling: 'basic',
        rollbackCap: 'weak',
        cardinality: 'weak',
        dataSafety: 'weak',
        errorVisible: 'basic',
        versionCtrl: 'weak',
        aiMapping: 'weak',
        selfHealing: 'weak',
      },
    },
    {
      name: 'Workato',
      features: {
        errorHandling: 'advanced',
        rollbackCap: 'basic',
        cardinality: 'basic',
        dataSafety: 'basic',
        errorVisible: 'advanced',
        versionCtrl: 'basic',
        aiMapping: 'basic',
        selfHealing: 'weak',
      },
    },
    {
      name: 'Celigo',
      features: {
        errorHandling: 'advanced',
        rollbackCap: 'basic',
        cardinality: 'basic',
        dataSafety: 'basic',
        errorVisible: 'advanced',
        versionCtrl: 'basic',
        aiMapping: 'advanced',
        selfHealing: 'basic',
      },
    },
    {
      name: 'Jitterbit',
      features: {
        errorHandling: 'advanced',
        rollbackCap: 'basic',
        cardinality: 'weak',
        dataSafety: 'basic',
        errorVisible: 'advanced',
        versionCtrl: 'basic',
        aiMapping: 'weak',
        selfHealing: 'weak',
      },
    },
    {
      name: 'Elastic.io',
      features: {
        errorHandling: 'basic',
        rollbackCap: 'weak',
        cardinality: 'weak',
        dataSafety: 'weak',
        errorVisible: 'basic',
        versionCtrl: 'weak',
        aiMapping: 'weak',
        selfHealing: 'weak',
      },
    },
    {
      name: 'Skyvia',
      features: {
        errorHandling: 'basic',
        rollbackCap: 'weak',
        cardinality: 'weak',
        dataSafety: 'weak',
        errorVisible: 'basic',
        versionCtrl: 'weak',
        aiMapping: 'weak',
        selfHealing: 'weak',
      },
    },
    {
      name: 'GoFlow',
      features: {
        errorHandling: 'advanced',
        rollbackCap: 'advanced',
        cardinality: 'advanced',
        dataSafety: 'advanced',
        errorVisible: 'advanced',
        versionCtrl: 'advanced',
        aiMapping: 'advanced',
        selfHealing: 'advanced',
      },
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case 'advanced':
        return '✓';
      case 'basic':
        return '◐';
      case 'weak':
        return '✗';
      default:
        return '';
    }
  };

  const getBgColor = (status: string) => {
    switch (status) {
      case 'advanced':
        return 'bg-[#9FD5B3]';
      case 'basic':
        return 'bg-[#F5E6A8]';
      case 'weak':
        return 'bg-[#F5C1C8]';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">

      {/* Table Container with horizontal scroll */}
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow-sm border border-gray-200 rounded-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="sticky left-0 z-10 bg-gray-50 p-2 md:p-4 text-center text-sm md:text-base text-gray-600 font-medium border-b-2 border-r-2 border-gray-300 min-w-[100px]">
                    Platform
                  </th>
                  {features.map((feature) => (
                    <th
                      key={feature.key}
                      className="p-2 md:p-4 text-center text-xs md:text-base text-gray-600 font-medium border-b-2 border-gray-300 min-w-[80px] md:min-w-[100px]"
                    >
                      {feature.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {platforms.map((platform, idx) => (
                  <tr key={platform.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="sticky left-0 z-10 p-2 md:p-4 text-center text-sm md:text-base text-gray-700 font-medium border-r-2 border-gray-300 bg-inherit">
                      {platform.name}
                    </td>
                    {features.map((feature) => {
                      const status = platform.features[feature.key as keyof typeof platform.features];
                      return (
                        <td
                          key={feature.key}
                          className={`p-2 md:p-4 text-center text-xl md:text-2xl ${getBgColor(status)}`}
                        >
                          <span className='text-black'>{getIcon(status)}</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-8 mt-6 md:mt-8 px-2">
        <div className="flex items-center gap-2">
          <span className="px-3 md:px-4 py-2 bg-[#F5C1C8] rounded text-sm md:text-base text-black">✗ Weak/Missing</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 md:px-4 py-2 bg-[#F5E6A8] rounded text-sm md:text-base text-black">◐ Basic</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 md:px-4 py-2 bg-[#9FD5B3] rounded text-sm md:text-base text-black">✓ Advanced</span>
        </div>
      </div>
    </div>
  );
}