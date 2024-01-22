
import "../styles/BodyPage.css"
import Card from "./Card";
import foodData from "../Data";
function BodyPage({ selectedType }) {
  console.log(selectedType)
  const filteredData = selectedType? foodData.filter((item) => item.type === selectedType): foodData;
    
    
    console.log(filteredData)
    return (
      <div className="Page" >
        <div className="cardContainer">
        {filteredData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
        </div>
        
        

        

        
  
        
        
      </div>
    );
  }

export default BodyPage;