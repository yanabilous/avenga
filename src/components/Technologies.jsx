import React, {useState} from "react";

const tabData = {
  Cloud: {
    description:
      "Our team of certified AWS, Google Cloud, and Azure professionals is prepared to provide expert consulting, migration, and engineering services. Avenga delivers a comprehensive range of cloud solutions designed to enhance speed, reliability, and security for your needs.",
    stats: [
      {value: "35 %", description: "Total cost of ownership savings"},
      {value: "1 trillion", description: "Cloud computing market value by 2028"},
    ],
  },
  Automation: {
    description:
      "Explore advanced digital security with blockchain technology. Our skilled blockchain developers at Avenga build decentralized solutions and applications to enhance transaction traceability and data security.",
    stats: [
      {value: "67 bln", description: "Blockchain market worth by 2026"},
      {value: "86 %", description: "Expected industry CAGR by 2030"},
    ],
  },
  "Data and AI": {
    description:
      "Harness the power of data to enhance decision-making, boost business agility, and enable accurate planning. Avenga supports businesses globally in collecting, processing, visualizing, and utilizing data to drive success.",
    stats: [
      {value: "95 %", description: "Businesses suffer from unstructured data"},
      {value: "82 %", description: "AI usage in risk management cases"},
    ],
  },
  Salesforce: {
    description:
      "Cultivate customer loyalty by delivering a unique buyer’s journey that sets you apart from competitors. As a certified Salesforce partner, Avenga offers bespoke Salesforce solutions to optimize sales and customer engagement.",
    stats: [
      {value: "52 %", description: "Increase of leads volume"},
      {value: "33 %", description: "CRM users worldwide"},
    ],
  },
  Microsoft: {
    description:
      "Optimize team productivity, coherence, and collaboration with Avenga’s tailored Microsoft solutions. Leverage Microsoft 365, SharePoint Intranet, and Power Platform to ensure efficient goal-oriented cooperation across your organization.",
    stats: [
      {value: "91 %", description: "Used by Fortune 100 companies"},
      {value: "79 %", description: "Healthcare organizations adopted Microsoft"},
    ],
  },
  Blockchain: {
    description:
      "Explore advanced digital security with blockchain technology. Our skilled blockchain developers at Avenga build decentralized solutions and applications to enhance transaction traceability and data security.",
    stats: [
      {value: "67 bln", description: "Blockchain market worth by 2026"},
      {value: "86 %", description: "Expected industry CAGR by 2030"},
    ],
  },
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Cloud");

  return (
    <section className="technologies">
      <div className="technologies__header">
        <h2 className="technologies__title">Technologies</h2>
        <div className="technologies__tabs">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`technologies__tab ${
                activeTab === tab ? "technologies__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="technologies__content">
        <div className="technologies__left">
          <p className="technologies__description">{tabData[activeTab].description}</p>
          <button className="technologies__explore-button">Explore <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clipPath="url(#clip0_0_384)">
              <path
                d="M13.0979 0H2.51865C2.021 0 1.61631 0.404688 1.61631 0.902344C1.61631 1.4 2.021 1.80469 2.51865 1.80469H10.9159L0.265527 12.4578C-0.087207 12.8105 -0.087207 13.382 0.265527 13.7348C0.618262 14.0875 1.18975 14.0875 1.54248 13.7348L12.1929 3.08164V11.4789C12.1929 11.9766 12.5976 12.3813 13.0952 12.3813C13.5929 12.3813 13.9976 11.9766 13.9976 11.4789V0.902344C14.0003 0.404688 13.5956 0 13.0979 0Z"
                fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_0_384">
                <rect width="14" height="14" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </button>
        </div>

        <div className="technologies__stats">
          {tabData[activeTab].stats.map((stat, index) => (
            <div key={index} className="technologies__stat">
              <span className="technologies__stat-value">{stat.value}</span>
              <p className="technologies__stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;