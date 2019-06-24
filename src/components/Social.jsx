import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
    
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color}
`;


const twitter = {
    color: "#38A1F3"
}

const linkedin = {
    color: "#0e76a8"
}

const github = {
    color: "#333"
}

const getColor = (name) => {
    if (name == 'twitter')
        return twitter;

    if (name == 'linkedin')
        return linkedin;

    if (name == 'github')
        return github;
}

const Social = props => (

    <div className="Social">
        
        <SocialUl>
            
            <SocialLi key="Social-Twitter">
                <SocialAnchor href="https://twitter.com/ccasbre27">
                    <ThemeProvider theme={getColor("twitter")}>
                    <SocialIcon className="fa fa-twitter" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>

            <SocialLi key="Social-LinkedIn">
                <SocialAnchor href="https://www.linkedin.com/in/carloscastrobrenes/">
                    <ThemeProvider theme={getColor("linkedin")}>
                    <SocialIcon className="fa fa-linkedin" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>

            <SocialLi key="Social-GitHub">
                <SocialAnchor href="https://github.com/ccasbre27">
                    <ThemeProvider theme={getColor("github")}>
                    <SocialIcon className="fa fa-github" />
                    </ThemeProvider>
                </SocialAnchor>
            </SocialLi>

           
        </SocialUl>
        
    </div>

);

export default Social;