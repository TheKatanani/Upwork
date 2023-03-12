import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainApi } from '../../API'
import { Heart, Verified, WorldWide } from '../../assets/Icons'
import { Container, MainButton } from '../../assets/styled-components/components'
import Loading from '../../components/common/Loading'
import Rating from '../../components/common/Rating'
import { Input } from '../../components/common/Input/style'
import Skills from '../../components/views/Skills'
import useFetch from '../../hook/useFetch'
import { DetailsStyled } from './styled'
import dateCalculator from '../../utils/dateCalculator'
import IconBox from '../../components/common/IconBox'
const JopDetails = () => {
  const [copy, setCopy] = useState(false)
  const { id } = useParams()
  const { data, error, isLoading } = useFetch(`${mainApi}products/${id}`)
  const url = `https://www.upwork.com/home/details/${id}`
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <span>{error}</span>
  }
  return (
    <DetailsStyled>
      <Container className='container'>
        <h1>Job details</h1>
        <div className="content">
          <main>
            <header className="title">
              <h2>
                {data.title}
              </h2>
            </header>
            <section className='jobType'>
              <div className="jobType">
                <a href="/#">{data.jobType}</a>
              </div>
              <div className="time">
                <p>Posted {dateCalculator(data.postTime)}</p>
              </div>
              <div className="targetLocation">
                <WorldWide />
                <span>WorldWide</span>
              </div>
            </section>
            <section className="description">
              <p>
                {data.description}
              </p>
            </section>
            <section className="details">
              <div className="price">{data.priceType}</div>
              <div className="developerLevel">{data.developerLevel}</div>
              <div className="budget">budget:${data.budget}</div>
            </section>
            <section className="projectType"></section>
            <section className="skills">
              <h2>Skills and Expertise</h2>
              <Skills data={data.skills} />
            </section>
          </main>
          <aside>
            <section className='buttons'>
              <MainButton>Apply Now</MainButton>
              <IconBox><Heart /> Save Job</IconBox>
              <div className="flag">
                <a href="/#">
                  Flag as inappropriate
                </a>
              </div>
              <p>send a proposal for: 4 Connects</p>{/*replace it to dainamic data*/}
              <p>Available Connects: 130</p>
            </section>
            <section>
              <h2>About the client</h2>
              <div className="verified">
                <Verified />
                <p>Payment method verified</p>
              </div>
              <div className="stars">
                <Rating num={data.star} num2="4.58 of 226 reviews" />
              </div>
              <div className="box">
                <h4>Thailand</h4>
                <p>Ubon Ratchathani 12:08 pm</p>
              </div>
              <div className="box">
                <h4>449 jobs posted</h4>
                <p>67% hire rate, 4 open jobs</p>
              </div>
              <div className="box">
                <h4>$35K total spent</h4>
                <p>358 hires, 82 active</p>
              </div>
              <p>Member since Feb 4, 2013</p>
            </section>
            <section>
              <h2>Job link</h2>
              <Input type="text" placeholder={url} readOnly className='readOnly' />
              <span className='copy'
                onClick={() => {
                  navigator.clipboard.writeText(url)
                  setCopy(true)
                  setTimeout(() => {
                    setCopy(false)
                  }, 3000)
                }}
              >Copy link</span>
              {copy && <span>done</span>}
            </section>
          </aside>
        </div>
      </Container>
    </DetailsStyled>
  )
}

export default JopDetails

/*
if click on the button the e.target.focus is return true then add class or any event on set time out for ex 
onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}
{  textField.select() now i need to create ref and copy it 
  document.execCommand('copy')
      "id":5,
      "jobType":"Front-end Developer",
      "title": "Mobile game development",
      "description": "We're looking for a developer to create a fun and addictive mobile game for iOS and Android.",
      "skills": [
        "Game development",
        "Unity",
        "C# programming",
        "Graphics design"
      ],
      "priceType": "Fixed-price",
      "developerLevel": "Expert",
      "budget": 10000,
      "postTime": "2023-01-01T12:00:00Z",
      "proposals": 20,
      "verified": true,
      "star": 4,
      "location": "Tokyo",
      "spent": 15000
    },
*/