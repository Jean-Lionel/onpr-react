import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import SendIcon from '@mui/icons-material/Send';

const FormulaireDeclaration = () => {

    const [nom_instution, setNom_instution] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [nom_declarant, setNom_declarant] = useState("");
    const [motif_declaration, setMotif_declaration] = useState("");
    const [date_declaration, setDate_declaration] = useState("");
    const [victime_name, setVictime_name] = useState("");
    const [victime_prenom, setVictime_prenom] = useState("");
    const [type_declaration, setType_declaration] = useState("");
    const [victime_matricule, setVictime_matricule] = useState("");
    const [victime_telephone, setVictime_telephone] = useState("");
    const [victime_fonction, setVictime_fonction] = useState("");
    const [file_name_1, setFile_name_1] = useState("");
    const [file_justification_1, setFile_justification_1] = useState("");
    const [file_name_2, setFile_name_2] = useState("");
    const [file_justification_2, setFile_justification_2] = useState("");
    const [file_name_3, setFile_name_3] = useState("");
    const [file_justification_3, setFile_justification_3] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }
    return ( <Box>
        
        <form onSubmit={handleSubmit} >
        <h1>Formulaire de déclaration</h1>
        
        <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: { md: '45%' , xs:'100%' } },
        marginBottom: '40px'
      }}
      noValidate
      autoComplete="off"

      
    >

        <h5>Information de l'Institution</h5>
       
      <div>
        <TextField
          label="Nom de l'institution"
          id="nom_instution"
          size="small"
          value={nom_instution}
          required
          placeholder="ex: ONPR"
          onChange={(e) => setNom_instution(e.target.value)}
        />
        <TextField
          label="Addresse de l'institution"
          id="adresse"
          value={adresse}
          placeholder="ex : Bujumbura/Mukaza/Rohero"
          size="small"
          required
          onChange={(e) => setAdresse(e.target.value)}
        />  
      </div>
      <div>
        <TextField
          label="Téléphone de l'institution"
          id="telephone"
          value={telephone}
          size="small"
          placeholder="ex: 22 222 222 "
          required
          onChange={(e) => setTelephone(e.target.value)}
          
        />
        <TextField
          label="Email de l'institution'"
          id="email"
          placeholder="ex : exemple@gmail.com"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />  
      </div>
      <div>
        <TextField
          label="Nom du declarant"
          id="nom_declarant"
          size="small"
          required
          placeholder="ex: BUCUMI JEAN LEO"
          value={nom_declarant}
          onchange={(e)=>setNom_declarant(e.target.value)}
        />

        <TextField
            id="date"
            label="Date de déclaration"
            type="date"
            size="small"
            sx={{ width: '100%' }}
            InputLabelProps={{
                shrink: true,
              }}
            required
            value={date_declaration}
            onChange={setDate_declaration}

      />
        
      </div>

      <div>
      <FormControl fullWidth sx={{ m:2, width: '92%' }} variant="standard">
            <ReactQuill 
                theme="snow" value={motif_declaration}
                onChange={setMotif_declaration}
            >
            </ReactQuill>

            </FormControl>
      </div>
      
      <h5>Information du victime</h5>
      
      <div>
        <TextField
          label="Nom"
          id="setVictime_name"
          size="small"
          placeholder="ex: Ndongani"
          required
          onChange={setVictime_name}
        />
        <TextField
          label="Prénom"
          id="victime_prenom"
          size="small"
          placeholder="ex: Ndongani"
          required
          onChange={setVictime_prenom}
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: '45%' }} size="small">
        <InputLabel id="demo-select-small">Type de déclaration</InputLabel>
        <Select
            labelId="demo-select-small"
            id="type_declaration"
            label="Age"
            onChange={setType_declaration}
            >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>

        <TextField
          label="Matricule"
          id="victime_matricule"
          size="small"
          placeholder=""
          required
          onChange={setVictime_matricule}
        />
      </div>

      <div>
      <TextField
          label="Téléphone"
          id="victime_telephone"
          size="small"
          placeholder=""
          onChange={setVictime_telephone}
        />
      <TextField
          label="Fonction"
          id="victime_fonction"
          size="small"
          placeholder=""
          onChange={setVictime_fonction}
        />

      </div>
      <h5>
          Document Justificatif
      </h5>

      <div>
        <TextField
        size="small"
        label="Titre du document justificatif I"
        
        required
        />
        <TextField
        type="file"
        size="small"
        label="Document justificatif I"
        required
        InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
        size="small"
        label="Titre du document justificatif II" 
        />
        <TextField
        type="file"
        size="small"
        label="Document justificatif II"
        InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div>
        <TextField
        size="small"
        label="Titre du document justificatif III" 
        />
        <TextField
        type="file"
        size="small"
        label="Document justificatif III"
        InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div >
          <Button type="submit" size="small" startIcon={(<SendIcon />)}
          sx={{ width: '92%' }}
           variant="contained">
               Envoyer </Button>
      </div>
      
    </Box>
    </form>
    </Box> );
}
 
export default FormulaireDeclaration;