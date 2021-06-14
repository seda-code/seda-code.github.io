import React from 'react';
import ProfileCard from './ProfileCard';


class TeamSection extends React.Component {
    render() {
        return (
            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2 data-aos="fade-in">Team</h2>
                        <p data-aos="fade-in">We are an experienced team of software engineers who has been involved in several projects as varied as healthcare, fintech, insurtech, and automation among others.</p>
                    </div>

                    <div className="row justify-content-md-center">
                        <ProfileCard name="Sebastián Inones"
                            role="Co-Founder"
                            description="Software Developer Engineer specialized in .NET Core and Azure.
                                Also, doing RPA mostly with Selenium."
                            twitter="https://twitter.com/InonesSebastian"
                            linkedIn="https://www.linkedin.com/in/sebastianinones/"
                            gitHub="https://github.com/sebainones"
                        />

                        <ProfileCard name="Daniel Valcarce"
                            role="Co-Founder"
                            description="An experienced software developer who has focused in recent years on the field of Artificial Intelligence."
                            twitter="https://twitter.com/davamix"
                            linkedIn="https://www.linkedin.com/in/danielvalcarce/"
                            gitHub="https://github.com/davamix" />

                        <ProfileCard name="Ariel Grillo"
                            role="Full stack Developer"
                            description="Full stack developer with experience in .Net technologies."
                            linkedIn="https://www.linkedin.com/in/arielgrillo/"
                            gitHub="https://github.com/arielgrillo"
                        />

                    </div>
                </div>
            </section>
        );
    }
}

export default TeamSection;