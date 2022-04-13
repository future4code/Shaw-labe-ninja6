import styled from 'styled-components'

export const MainContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
    align-items: center;
    width: 95%;
    margin: 20px;
    .filtros{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:95%;
    }
`
export const ListaServico = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
    width: 100%;
    margin: 20px;
`
export const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    width:20%;
    margin:15px;
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