import React from 'react';
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Certificates = props => (

    <div className="Certificates">
        <div className="Certificates-container">

        { props.data.map((cert,index) => (

            <div className="Certificates-item" key={`Cert-${index}`}>
                <H2Styled name={cert.name}> {cert.date}</H2Styled>
                <H3Styled>{cert.institution}</H3Styled>
                <PStyled name={cert.description}></PStyled>
            </div>
        
        ))}    


        </div>
    </div>

);

export default Certificates;