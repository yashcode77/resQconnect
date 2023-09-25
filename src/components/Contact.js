import React from 'react';

function Contact() {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const officeStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    display: 'inline-block',
    width: '45%',
    textAlign: 'left',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
       <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Contact Us</h1>
      <div className="agency-info">
        <div style={officeStyle}>
          <img
            src="https://www.homelessassistance.us/gallery/10758_ehdpzpmc.png" // Replace with the actual image URL
            alt="Main Office"
            style={imageStyle}
          />
          <br></br>
          <h2>Headquarters Office</h2>
          <p>123 Main Street</p>
          <p>City: Vashi,Navi Mumbai</p>
          <a href="tel:+123456789">Phone: +123456789</a>
          <br />
          <a href="mailto:main@example.com">Email: resqconnect123@gmail.com</a>
        </div>
        <div style={officeStyle}>
          <img
            src="http://eidosarch.com/wp-content/uploads/2015/07/DSC_0292.jpg" // Replace with the actual image URL
            alt="Regional Office"
            style={imageStyle}
          />
          <br/><br/><br/>
          <h2>Regional Office</h2>
          <p>456 Regional Ave</p>
          <p>City: Haus Kaus,New Delhi</p>
          <a href="tel:+987654321">Phone: +987654321</a>
          <br />
          <a href="mailto:regional@example.com">Email: resqconnect123@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
