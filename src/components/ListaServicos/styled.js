import styled from 'styled-components'

export const MainContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
    width: 90%;
    margin: 20px;
`
export const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    width:20%;
    margin:25px;
    padding:25px;
    box-shadow: 5px 5px 10px;
    border-radius:5px;
    p{
        margin-top:0;
    }
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    button{
        margin:10px;
        margin-left:0;
        padding:10px;
        border-radius:5px;
    }
    img{
        width:40px;
        height:40px;
    }
`