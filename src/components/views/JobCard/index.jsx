import { Link } from "react-router-dom";
import { Heart, Location, UnLike, UnVeriried, Verified } from "../../../assets/Icons";
import dateCalculator from "../../../utils/dateCalculator";
import IconBox from "../../common/IconBox";
import Rating from "../../common/Rating";
import Skills from "../Skills";
import { StyledCard } from "./styled";


function JobCard({ data }) {
  return (
    <StyledCard>
      <header>
        <h3 className="title">{data.title}</h3>
        <div className="icons">
          <IconBox><UnLike /></IconBox>
          <Link to={`details/${data.id}`}>
            <IconBox><Heart /></IconBox>
          </Link>
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
        <Skills data={data.skills} />
        <div className="proposals"><p>Proposals:</p><span>{data.proposals}</span></div>
      </main>
      <footer>
        <span className="verified">{data.verified ? <><Verified /> Payment verified</> : <> <UnVeriried />Payment verified</>}</span>
        <Rating num={data.star} />
        <span className="spent">${data.spent}+</span>
        <span className="location"><Location />{data.location}</span>
      </footer>
    </StyledCard >
  )
}

export default JobCard