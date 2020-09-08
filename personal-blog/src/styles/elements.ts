import styled from 'styled-components';

export const Navigation = styled.nav`
    width : 100vw;
    height : 80px;
    background : #172b4d;
    display : flex ;
    color : white ;
    .nav-section {
        display : flex;
        justify-content : center;
        align-items : center;
        flex : 1;
    } 
    .nav-section2 {
        display : flex;
        justify-content : space-around;
        align-items : center;
        flex : 1;
    }
    .nav-section2 a {
        color : white;
        text-decoration : none;
        outline : none;
        padding : 20px;
        font-weight : 700;
    }
    .underline {
        border-bottom : 1px solid;
    }
    `

export const H1 = styled.h1`
    font-size: 1.5rem;
    color : white;

`


export const FooterBlog = styled.footer`
    width : 100vw;
    background-color : #f4f5f7;
    height: 11rem;
    display : flex;
`


export const MainSection = styled.section`
    flex : 1;
    display : flex;
    justify-content : center;
    align-items : center;

`