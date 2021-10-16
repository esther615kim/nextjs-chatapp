import React from 'react';
import { Avatar, IconButton, TextField } from "@mui/material";
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
    return (
        <Container>
            <Header>
                <MyAvatar />
                <IconWrapper>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </IconWrapper>
            </Header>

            <Search>
                <SearchInput />
                <IconButton>
                    <SearchIcon />
                </IconButton>

            </Search>

        </Container>
    )

}

export default Sidebar;

const Container = styled.div`
// css문법

`;

const SearchInput = styled(TextField)`
height:5,
border:none;
outlined-width:0;
flex:1;

`

const Header = styled.div`
border:1px solid salmon;
display:flex;
flex-direction:row;
top:0;
background:#ccc;
// 위에 붙어 있게 함
position:sticky; 
justify-content:space-between;
align-items:center;
height:80px;
border-bottom: 1px solid whitesmoke;
padding:10px;`;

const MyAvatar = styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.7; 
}
`;

const IconWrapper = styled.div`
color:blue;
`;

const Search = styled.div`
display:flex;
align-items:center;
padding:2rem;
border-radius:35,
`