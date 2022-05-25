import { Box, Button, FormControl, InputLabel, LinearProgress, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import SendIcon from '@mui/icons-material/Send';
import usePostDate from "../../utility/usePostData";

const FormulaireDeclaration = () => {

    const {response, isLoading, error,  submitData} = usePostDate()

    const [nom_instution, setNom_instution] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [nom_declarant, setNomDeclarant] = useState("");
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

    console.log("La valeur est de " + nom_declarant)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('nom_instution', nom_instution)
        data.append('adresse', adresse)
        data.append('telephone', telephone)
        data.append('email', email)
        data.append('nom_declarant', nom_declarant)
        data.append('motif_declaration', motif_declaration)
        data.append('date_declaration', date_declaration)
        data.append('victime_name', victime_name)
        data.append('victime_prenom', victime_prenom)
        data.append('type_declaration', type_declaration)
        data.append('victime_matricule', victime_matricule)
        data.append('victime_telephone', victime_telephone)
        data.append('victime_fonction', victime_fonction)
        data.append('file_name_1', file_name_1)
        data.append('file_justification_1', file_justification_1)
        data.append('file_name_2', file_name_2)
        data.append('file_justification_2', file_justification_2)
        data.append('file_name_3', file_name_3)
        data.append('file_justification_3', file_justification_3)
       
        submitData('declaration/',data);
        // axios.post('declaration/', data,{
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   }
        // });
       
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
          onChange={(e) => setNomDeclarant(e.target.value)}
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
            onChange={(e) => setDate_declaration(e.target.value)}

      />
        
      </div>

      <div>
      <FormControl fullWidth sx={{ m:2, width: '92%' }} variant="standard">
            <ReactQuill 
                theme="snow" value={motif_declaration}
                onChange={ setMotif_declaration}
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
          onChange={(e)=> setVictime_name(e.target.value)}
        />
        <TextField
          label="Prénom"
          id="victime_prenom"
          size="small"
          placeholder="ex: Ndongani"
          required
          onChange={(e)=> setVictime_prenom(e.target.value)}
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: '45%' }} size="small">
        <InputLabel id="demo-select-small">Type de déclaration</InputLabel>
        <Select
            labelId="demo-select-small"
            id="type_declaration"
            label="Age"
            onChange={(e)=> setType_declaration(e.target.value)}
            >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value="ACCIDENT DE TRAVAIL">ACCIDENT DE TRAVAIL</MenuItem>
            <MenuItem value="MALADIE PROFESSIONNELLES">MALADIE PROFESSIONNELLES</MenuItem>
           
        </Select>
        </FormControl>

        <TextField
          label="Matricule"
          id="victime_matricule"
          size="small"
          placeholder=""
          required
          onChange={(e) => setVictime_matricule(e.target.value)}
        />
      </div>

      <div>
      <TextField
          label="Téléphone"
          id="victime_telephone"
          size="small"
          placeholder=""
          onChange={(e) => setVictime_telephone(e.target.value)}
        />
      <TextField
          label="Fonction"
          id="victime_fonction"
          size="small"
          placeholder=""
          onChange={(e) => setVictime_fonction(e.target.value)}
        />

      </div>
      <h5>
          Document Justificatif
      </h5>

      <div>
        <TextField
        size="small"
        label="Titre du document justificatif I"
        value={file_name_1}
        onChange={(e) => setFile_name_1(e.target.value)}
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
        onChange={(e) => setFile_justification_1(e.target.files[0])}
        />
      </div>

      <div>
        <TextField
        size="small"
        label="Titre du document justificatif II"
        value={file_name_2}
        onChange={(e) => setFile_name_2(e.target.value)}
        />
        <TextField
        type="file"
        size="small"
        label="Document justificatif II"
        InputLabelProps={{
            shrink: true,
          }}
        onChange={(e) => setFile_justification_2(e.target.files[0])}
        />
      </div>

      <div>
        <TextField
        size="small"
        label="Titre du document justificatif III" 
        value={file_name_3}
        onChange={(e) => setFile_name_3(e.target.value)}
        />
        <TextField
        type="file"
        size="small"
        label="Document justificatif III"
        InputLabelProps={{
            shrink: true,
          }}
        onChange={(e) => setFile_justification_3(e.target.files[0])}
        />
      </div>
      {isLoading && <LinearProgress />}
      {error && <p>{ JSON.stringify(error) }</p>}
      {response && <p>{ response.data.success }</p>}
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