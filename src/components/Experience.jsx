import React from 'react';
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Experience = props => (

    <div className="Experience">
        <div className="Experience-container">

        {props.data.map((exp,index) => (

            <div className="Experience-item" key={`Exp-${index}`}>
                <H2Styled name={exp.company}> {exp.startDate}-{exp.endDate}</H2Styled>
                <H3Styled>{exp.jobTitle}</H3Styled>

                <PStyled name={exp.jobDescription}></PStyled>
            </div>

        ))}

        </div>
    </div>

);

export default Experience;