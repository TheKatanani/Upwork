import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mainApi } from '../../API'
import { Available, CopyLink, Delete, EmptyPortfolio, Location, Pen, Plus } from '../../assets/Icons'
import { Container, PrimaryButton, SecondaryButton } from '../../assets/styled-components/components'
import Avater from '../../components/common/Avater'
import IconBox from '../../components/common/IconBox'
import Loading from '../../components/common/Loading'
import AsideItem from '../../components/views/Aside/AsideItem'
import Skills from '../../components/views/Skills'
import useFetch from '../../hook/useFetch'
import dateCalculator from '../../utils/dateCalculator'
import { ProfileStyled } from './styled'

const Profile = () => {
  const { data , isLoading, error } = useFetch(`${mainApi}user/1`)
  const name = useSelector(state => state.auth.user)
  // try it leter if you have time
  // useEffect(() => {
  //   const pervTitle = document.title
  //   document.title = `${name} - ${data.title}`
  //   return () => document.title = pervTitle
  // }, [data])
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <p>{error.messige}</p>
  }
  return (
    <ProfileStyled>
      <Container className='container'>
        <header>
          <div className="box">
            <div className="avater">
              <IconBox><Pen /></IconBox>
              <Avater />
            </div>
            <div className='user'>
              <h1 className='userName'>{name}</h1>
              <div className="location">
                <Location /> {data.location}
                <span className='time'>{dateCalculator(new Date())}</span>
                <div className="avilable">
                  <span><Available />Available now</span>off<IconBox><Pen /></IconBox>
                </div>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <SecondaryButton className='secondary'> See Public View</SecondaryButton>
            <PrimaryButton className='primary'>Profile Settings</PrimaryButton>
          </div>
        </header>
        <div className="content">
          <aside>
            <section>
              <AsideItem title="Video introduction" Icon={Plus} />

              <AsideItem title="Hours per week">
                <p>More thean 30 hrs/week</p>
                <p>No contact-to-hire prefence set</p>
              </AsideItem>

              <AsideItem title="Languages" Icon2={Plus}>
                <p>English: <span>Basic</span></p>
              </AsideItem>

              <h4>Verfications</h4>

              <AsideItem title="Military Veteran" Icon={Plus} />
              <AsideItem title="Education" Icon={Plus} />
              <AsideItem title="Al-Aqsa-University" Icon2={Delete}>
                <p>Bachelor of Computer Science (BCompSc), Computer science
                  2020-2024 (expected)</p>
              </AsideItem>
            </section>

          </aside>

          <main>
            <header className="title">
              <AsideItem title={data.title} />
              <div>
                <p>${data.hourlyRate}/hr</p>
                <IconBox><Pen /></IconBox>
                <IconBox><CopyLink /></IconBox>
              </div>
            </header>
            <section className='overview'>
              <p>{data.overview}</p>
              <IconBox><Pen /></IconBox>
            </section>
            <section className='workHistory'>
              <h2>Work history</h2>
              <p>No work yet. Once you start getting hired on Upwork, your work with clients will show up here.<Link>Start your search</Link> </p>
            </section>
            <section className="portfolio">
              <AsideItem title="portfolio" Icon={Plus} />
              <div className="content">
                <EmptyPortfolio />
                <p>Talent who add portfolios to their profile are more likely to win work. (+20%)</p>
                <Link>Add a portfolio</Link>
              </div>
            </section>
            <section className="skills">
              <AsideItem title='Skills' />
              <Skills data={data.skills} />
            </section>
            <section className="projectCatalog">
              <div>
                <h2>Your Progect Calalog</h2>
                <SecondaryButton>Manage Projects</SecondaryButton>
              </div>
              <p>Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.</p>
            </section>
          </main>

        </div>
      </Container>
    </ProfileStyled>)
}

export default Profile