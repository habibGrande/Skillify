import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
    
const UserProfile = () => {

    
      return (
       <> 
          <div style={{
             backgroundImage: 'url("https://cdn.discordapp.com/attachments/1212842028753494046/1214538036407181392/download_1.jpg?ex=65f979b0&is=65e704b0&hm=10eb8e23d0f54a30be31d5d4b46673afa0705683fc3c332e3f47b3616ccd2792&")',
             backgroundSize: '100% 350px',backgroundRepeat:'no-repeat',
             height:'350px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
              
              <h1>Profile page</h1>
          </div>
           

       </>
      );
}
    
export default UserProfile;

