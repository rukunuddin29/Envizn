import React from "react";

function BaliMap() {
  return (
    <div className="w-full relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126763.35256771507!2d115.092003!3d-8.409518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240b61f63236b%3A0x3030bfbcaf77220!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1692449832925!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
}

export default BaliMap;
