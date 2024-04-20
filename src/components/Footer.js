import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-image: url("/footer-bg1.jpg");
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 40px 40px;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Align content to the left */
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterColumn = styled.div`
    flex: 1 1 calc(25% - 20px);
    margin-bottom: 20px;
    text-align: left;

    @media (max-width: 992px) {
        flex-basis: calc(33.333% - 20px);
    }

    @media (max-width: 768px) {
        flex-basis: calc(50% - 20px);
    }

    @media (max-width: 576px) {
        flex-basis: 100%;
    }
`;

const FooterHeading = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
`;

const FooterItem = styled.div`
    margin-bottom: 10px;
`;

const FooterIc = styled.img`
    height: 50px; 
    margin-right: 40px;
    width: auto;
`;

const FooterIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterColumn>
                    <FooterItem>
                        <FooterIc src="/prime-logo.png" alt="Prime Logo" />
                    </FooterItem>
                    <FooterItem>One sentence about Prime Oil</FooterItem>
                    <p> 2024 &copy; <a>Prime Oil</a></p>
                    <p>All Rights Reserved.</p>
                </FooterColumn>
                <FooterColumn>
                    <FooterHeading>Services</FooterHeading>
                    <FooterItem>Log In</FooterItem>
                    <FooterItem>Register</FooterItem>
                    <FooterItem>About Evacon</FooterItem>
                    <FooterItem>Contact Support</FooterItem>
                    <FooterItem>How It Works</FooterItem>
                </FooterColumn>
                <FooterColumn>
                    <FooterHeading>Useful Links</FooterHeading>
                    <FooterItem>Sponsors</FooterItem>
                    <FooterItem>Speakers</FooterItem>
                    <FooterItem>Registration</FooterItem>
                    <FooterItem>Schedule</FooterItem>
                    <FooterItem>Event Gallery</FooterItem>
                </FooterColumn>
                <FooterColumn>
                    <FooterHeading>Contact Info</FooterHeading>
                    <FooterItem>
                        <FooterIcon src="/telephone.png" alt="Phone Icon" />
                        (541)754-3010
                    </FooterItem>
                    <FooterItem>
                        <FooterIcon src="/email.png" alt="Email Icon" />
                        websiteinfo@gmail.com
                    </FooterItem>
                    <FooterItem>
                        <FooterIcon src="/pin.png" alt="Email Icon" />
                        Contact Address
                    </FooterItem>
                </FooterColumn>
            </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;
