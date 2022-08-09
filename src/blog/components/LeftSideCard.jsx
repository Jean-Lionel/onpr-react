import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import ListeItemLeft from './leftSideComponent/ListeItemLeft';
import { useSelector } from 'react-redux';
// import LanguageChanger from '../../components/language_changer/language_changer';



function LeftSideCard(props) {

  const { currentLanguage } = useSelector((storeOf) => {
    return { currentLanguage: storeOf.nisys.currentLanguage };
  })


  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex'}}>
          <CardContent >

            {leftData.map((e) => {
              return(
              <>
                <h5>{e.title[currentLanguage.code]}</h5>
                {e.corps.map(el => {
                  return <ListeItemLeft data ={el.label[currentLanguage.code]} />
                })}
              </>)
              })} 

          </CardContent>

        </Card>
      </CardActionArea>
    </Grid>
  );
}

const leftData = [
  {
    title: {
      fr: 'Direction Générale',
      en: 'Executive management'
    },

    corps: [
      {
        label: {
          fr: 'Secretariat',
          en: 'Secretary'
        },
      },
      {
        label: {
          fr: 'Conseillers',
          en: 'Advisers'
        },
      },
      {
        label: {
          fr: 'Agences',
          en: 'Agences'
        },
      },
      {
        label: {
          fr: 'Cellule Communication  et Relations Publiques',
          en: 'Communication and Public Relations Unit'
        },
      },
      {
        label: {
          fr: 'Cellule informatique',
          en: 'Computer cell'
        },
      },
      {
        label: {
          fr: 'Médecin Conseil',
          en: 'Medical advisor'
        }
      },
      {
        label: {
          fr: 'Actuaire',
          en: 'Actuary'
        }
      },
      {
        label: {
          fr: 'Audit interne',
          en: 'Internal audit'
        }
      },
      {
        label: {
          fr: 'Bibliothèque et Archives',
          en: 'Library and Archives'
        }
      },
    ]
  },
  {
    title: {
      fr: 'Direction Administrative et Finacière',
      en: 'Administrative and financial management'
    },
    corps: [
      {
        label: {
          fr: 'Secretariat',
          en: 'Secretary'
        },
      },
      {
        label: {
          fr: 'Service du Personnel et Logistique',
          en: 'Personnel and Logistics Department'
        },
      },
      {
        label: {
          fr: 'Service de Recouvrement',
          en: 'Collection and invoicing service'
        },
      },
      {
        label: {
          fr: 'Service Comptable',
          en: 'Accounting department'
        },
      }
    ]

  },
  {
    title: {
      fr: 'Direction des Prestations',
      en: 'Services Department'
    },
    corps: [
      {
        label: {
          fr: 'Secretariat',
          en: 'Secretary'
        },
      },
      {
        label: {
          fr: 'Service des Pensions ',
          en: 'Pensions Service'
        },
      },
      {
        label: {
          fr: 'Service des Risques Professionnels ',
          en: 'Occupational Risks Department'
        },
      }
    ]
  }

]


export default LeftSideCard;
