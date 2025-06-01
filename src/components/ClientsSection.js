import React from 'react';

import logo1 from "../images/clients/carlton_kodai.avif";
import logo2 from "../images/clients/mku_college_logo.png";
import logo3 from "../images/clients/hc_mdu.png";
import logo4 from "../images/clients/boston_logo.jpg";
import logo5 from "../images/clients/msi-logo.jpg";
import logo6 from "../images/clients/thia_mills.png";

const ClientsSection = () => {
  const clients = [
    {
      name: "Carlton Kodai",
      logo: logo1
    },
    {
      name: "MKU",
      logo: logo2
    },
    {
      name: "Client 3",
      logo: logo3
    },
    {
      name: "Client 4",
      logo: logo4
    },
    {
      name: "Client 5",
      logo: logo5
    },
    {
      name: "Client 6",
      logo: logo6
    }
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-title">
          <span>TRUSTED BY</span>
          <h2>OUR CLIENTS</h2>
          <p>We are proud to work with prestigious clients across various industries</p>
        </div>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index}>
              <img 
                src={client.logo} 
                alt={client.name}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;