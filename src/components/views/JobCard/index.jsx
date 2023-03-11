import { Heart, Location, UnLike, UnVeriried, Veriried } from "../../../assets/Icons";
import IconBox from "../../common/IconBox";
import Rating from "../../common/Rating";
import Skill from "../../common/Skill";
import { StyledCard } from "./styled";


function JobCard({ data }) {
  const dateCalculator = (postTime) => {
    const date = new Date(postTime);
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  }
  return (
    <StyledCard>
      <header>
        <h3 className="title">{data.title}</h3>
        <div className="icons">
          <IconBox><UnLike /></IconBox>
          <IconBox><Heart /></IconBox>
        </div>
      </header>
      <main>
        <div className="deteils">
          <span className="priceType">{data.hourly || data.priceType}</span>
          <span className="developerLevel">{data.developerLevel}</span>
          <span className="budget">${data.budget}</span>
          <span className="postTime">{dateCalculator(data.postTime)}</span>
        </div>
        <p className="description">
          {data.description}
        </p>
        <div className="skills">
          {data.skills.map((el, i) => <Skill className="skill" key={i}>{el}</Skill>)}
        </div>
        <div className="proposals"><p>Proposals:</p><span>{data.proposals}</span></div>
      </main>
      <footer>
        <span className="verified">{data.verified?<><Veriried/> Payment verified</>:<> <UnVeriried/>Payment verified</>}</span>
        <Rating num={data.star} />
        <span className="spent">${data.spent}+</span>
        <span className="location"><Location/>{data.location}</span>
      </footer>
    </StyledCard>
  )
}

export default JobCard