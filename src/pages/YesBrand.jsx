import './YesBrand.css';

const benefits = [
  {
    name: "Cocoa",
    image: "/images/yes-cocoa-varient.png", // Replace with your actual image if available
    description:
      "Improves heart health, lowers blood pressure, boosts mood, rich in antioxidants.",
  },
  {
    name: "Coffee",
    image: "/images/product-coffee.svg", // Replace with your actual image if available
    description:
      "Increases alertness, may reduce risk of diabetes and neurodegenerative diseases, high in antioxidants.",
  },
  {
    name: "Nuts",
    image: "/images/product-dried-nuts.svg", // Replace with your actual image if available
    description:
      "Support heart health, good for brain function, provide healthy fats and proteins, help with weight management.",
  },
];

const YesBrand = () => {
  return (
    <div className="container yes-brand-container">
      <div className="yes-brand-header">
        <img className="yes-brand-logo" src="/images/yes-logo.png" alt="Yes Brand Logo" />
      </div>
      <div className="yes-brand-benefits">
        {benefits.map((item) => (
          <div className="yes-benefit-card" key={item.name}>
            {item.image && (
              <img src={item.image} alt={item.name} className="yes-benefit-image" />
            )}
            <h2 className="yes-benefit-name">{item.name}</h2>
            <p className="yes-benefit-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YesBrand;