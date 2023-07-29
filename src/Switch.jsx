import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
          

const SwitchPage = () => {
    
    return ( 
             <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="Label" />
              <FormControlLabel required control={<Switch />} label="Required" />
              <FormControlLabel disabled control={<Switch />} label="Disabled" />
            </FormGroup>
          );
        }
 
 
export default SwitchPage;