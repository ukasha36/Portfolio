import React from 'react'
import "./Experience.css";
 


const ExperienceItem = ({experiences}) => {


 

  return (
    <>

    
      {experiences.map((val, idx) => {

let boxColorClass = '';
switch (val.id) {
  case 0:
    boxColorClass = 'red-box';
    break;
  case 1:
    boxColorClass = 'blue-box';
    break;
  case 2:
    boxColorClass = 'yellow-box';
    break;
  default:
    break;
}


              return (
                <div className={ `${boxColorClass}`} key={idx}>
                <div  className="jobbox">
                  <ul className="jobul">
                    <div className="jobtitle">
                      <div>
                        {" "}
                        <img src={val.img} alt={val.role} className="jobimg" />
                      </div>
                      <div className="jobdetails">
                        <li className="jobli jobrole">{val.role}</li>
                        <li className="jobli company">{val.company}</li>
                        <li className="jobli jobdate">{val.date}</li>
                      </div>
                    </div>

                    <li className="jobli jobdesc">{val.desc}</li>
                    <li className="jobli"> {val.skills && (
                                <li className="jobli">
                                    <b>Skills: </b>
                                    <ul className="skillsli">
                                        {val.skills.map((el, i) => {
                                            return <li key={i}>{el}</li>;
                                        })}
                                    </ul>
                                </li>
                            )}
                              </li>

                              <li className="jobli jobdate"><h4>{val.date}</h4></li>
        
                  </ul>
                </div>
                </div>
              );
            })}

    </>
  )
}

export default ExperienceItem